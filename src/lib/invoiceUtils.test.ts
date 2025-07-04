import { describe, it, expect, beforeEach, vi } from 'vitest';
import { generateInvoiceText } from './invoiceUtils';
import { ContactProfile, Product } from './types';
import DOMPurify from 'dompurify';

// Mock DOMPurify
vi.mock('dompurify', () => ({
  default: {
    sanitize: vi.fn((text) => text), // Simple pass-through mock
  },
}));

describe('generateInvoiceText', () => {
  const expectedSanitizerConfig = {
    USE_PROFILES: { html: false },
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_TRUSTED_TYPE: false,
  };

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    // Ensure DOMPurify.sanitize is reset for each test run
    (DOMPurify.sanitize as vi.Mock).mockImplementation((text, config) => {
      // Basic mock: if config matches, return text, else return modified for specific test
      if (config && config.USE_PROFILES && config.USE_PROFILES.html === false) {
        if (text.includes("<script>") || text.includes("<br>")) { // For the specific sanitization test case
            return text.replace(/<[^>]*>/g, '');
        }
        return text;
      }
      return text; // Fallback
    });
  });

  const mockProfile: ContactProfile = {
    id: 'prof1',
    contactId: 'c1',
    name: 'Test User',
    phoneNumber: '1234567890',
    products: [],
  };

  it('should generate correct invoice text for a profile with no products', () => {
    const invoiceText = generateInvoiceText(mockProfile);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Test User', expectedSanitizerConfig);
    expect(invoiceText).toContain('INVOICE FOR TEST USER');
    expect(invoiceText).toContain('Total Amount: ₹0');
    expect(invoiceText).toContain('Total Paid: ₹0');
    expect(invoiceText).toContain('Total Balance: ₹0');
  });

  it('should generate correct invoice text for a profile with one product', () => {
    const product: Product = { id: 'p1', name: 'Product A', price: 100, paidAmount: 50 };
    const profileWithProduct = { ...mockProfile, products: [product] };
    const invoiceText = generateInvoiceText(profileWithProduct);

    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Test User', expectedSanitizerConfig);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Product A', expectedSanitizerConfig);
    expect(invoiceText).toContain('INVOICE FOR TEST USER');
    expect(invoiceText).toContain('*Product A*');
    expect(invoiceText).toContain('Price: ₹100');
    expect(invoiceText).toContain('Paid: ₹50');
    expect(invoiceText).toContain('Balance: ₹50');
    expect(invoiceText).toContain('Total Amount: ₹100');
    expect(invoiceText).toContain('Total Paid: ₹50');
    expect(invoiceText).toContain('Total Balance: ₹50');
  });

  it('should generate correct invoice text for a profile with multiple products', () => {
    const product1: Product = { id: 'p1', name: 'Product A', price: 100, paidAmount: 50 };
    const product2: Product = { id: 'p2', name: 'Product B', price: 200, paidAmount: 200 };
    const profileWithProducts = { ...mockProfile, products: [product1, product2] };
    const invoiceText = generateInvoiceText(profileWithProducts);

    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Test User', expectedSanitizerConfig);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Product A', expectedSanitizerConfig);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Product B', expectedSanitizerConfig);
    expect(invoiceText).toContain('INVOICE FOR TEST USER');
    expect(invoiceText).toContain('*Product A*');
    expect(invoiceText).toContain('*Product B*');
    expect(invoiceText).toContain('Total Amount: ₹300'); // 100 + 200
    expect(invoiceText).toContain('Total Paid: ₹250');   // 50 + 200
    expect(invoiceText).toContain('Total Balance: ₹50');  // (100-50) + (200-200)
  });

  it('should handle product names needing sanitization', () => {
    // Update mock to simulate DOMPurify actually changing the text
    (DOMPurify.sanitize as vi.Mock).mockImplementation((text) => text.replace(/<[^>]*>/g, ''));

    const product: Product = { id: 'p1', name: 'Product <script>alert("xss")</script>X', price: 100, paidAmount: 50 };
    const profileWithProduct = { ...mockProfile, name: 'User <br> Name', products: [product] };
    const invoiceText = generateInvoiceText(profileWithProduct);

    // The mockImplementation for DOMPurify.sanitize in beforeEach will handle the actual sanitization for this test case.
    // We expect it to be called with the raw text and the config.
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('User <br> Name', expectedSanitizerConfig);
    expect(DOMPurify.sanitize).toHaveBeenCalledWith('Product <script>alert("xss")</script>X', expectedSanitizerConfig);

    // Check that the sanitized names (as per the mock's behavior) are used in the output
    expect(invoiceText).toContain('INVOICE FOR User  Name');
    expect(invoiceText).toContain('*Product X*');
  });

  it('should correctly round numbers', () => {
    const product: Product = { id: 'p1', name: 'Product C', price: 100.789, paidAmount: 50.123 };
    const profileWithProduct = { ...mockProfile, products: [product] };
    const invoiceText = generateInvoiceText(profileWithProduct);

    expect(invoiceText).toContain('Price: ₹101'); // Rounded from 100.789
    expect(invoiceText).toContain('Paid: ₹50');   // Rounded from 50.123
    expect(invoiceText).toContain('Balance: ₹51'); // 101 - 50
    expect(invoiceText).toContain('Total Amount: ₹101');
    expect(invoiceText).toContain('Total Paid: ₹50');
    expect(invoiceText).toContain('Total Balance: ₹51');
  });
});
