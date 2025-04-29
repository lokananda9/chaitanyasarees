
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContactProfile, Product, InvoiceFormat } from '@/lib/types';
import { generateInvoiceText, sendViaWhatsApp } from '@/lib/invoiceUtils';
import { Send, FileText, Share, MessageSquare } from "lucide-react";

interface InvoiceGeneratorProps {
  profile: ContactProfile;
  onInvoiceSent: () => void;
}

const InvoiceGenerator = ({ profile, onInvoiceSent }: InvoiceGeneratorProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<InvoiceFormat>('text');
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleSelectProduct = (product: Product) => {
    if (selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === profile.products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts([...profile.products]);
    }
  };

  const handlePreview = () => {
    if (selectedProducts.length === 0) {
      toast({
        title: 'No Products Selected',
        description: 'Please select at least one product',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }
    setPreviewVisible(true);
  };

  const handleSendViaWhatsApp = () => {
    if (selectedProducts.length === 0) {
      toast({
        title: 'No Products Selected',
        description: 'Please select at least one product',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    try {
      sendViaWhatsApp(profile, selectedFormat, selectedProducts);
      toast({
        title: 'Invoice Sent',
        description: `Invoice sent to ${profile.name} via WhatsApp`,
        duration: 3000,
      });
      onInvoiceSent();
      setPreviewVisible(false);
    } catch (error) {
      console.error('Error sending invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to send invoice',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  // Create a subset profile with only selected products
  const previewProfile = {
    ...profile,
    products: selectedProducts,
  };

  const invoiceText = generateInvoiceText(previewProfile);

  // If there are no products, show message
  if (profile.products.length === 0) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">No products added yet.</p>
          <p className="text-gray-500">Add a product to create an invoice.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {!previewVisible ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-between items-center">
              <span>Select Products for Invoice</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleSelectAll}
                className="text-xs"
              >
                {selectedProducts.length === profile.products.length ? 'Deselect All' : 'Select All'}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {profile.products.map(product => (
                <div key={product.id} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                  <Checkbox
                    checked={selectedProducts.some(p => p.id === product.id)}
                    onCheckedChange={() => handleSelectProduct(product)}
                    id={`product-${product.id}`}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <label 
                      htmlFor={`product-${product.id}`}
                      className="text-sm font-medium leading-none cursor-pointer flex-1"
                    >
                      {product.name}
                    </label>
                    <span className="text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={handlePreview}
              className="bg-brand-blue hover:bg-brand-blue/90"
              disabled={selectedProducts.length === 0}
            >
              <FileText className="w-4 h-4 mr-2" />
              Preview Invoice
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Invoice Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text" onValueChange={(v) => setSelectedFormat(v as InvoiceFormat)}>
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="pdf" disabled>PDF</TabsTrigger>
                <TabsTrigger value="image" disabled>Image</TabsTrigger>
              </TabsList>
              <TabsContent value="text" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-mono text-sm">
                  {invoiceText}
                </div>
              </TabsContent>
              <TabsContent value="pdf" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-center text-gray-500 py-8">
                    PDF preview would be displayed here.
                    <br />
                    (Requires additional libraries)
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="image" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-center text-gray-500 py-8">
                    Image preview would be displayed here.
                    <br />
                    (Requires additional libraries)
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
            <Button
              variant="outline"
              onClick={() => setPreviewVisible(false)}
            >
              Back
            </Button>
            <Button
              onClick={handleSendViaWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Send via WhatsApp
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default InvoiceGenerator;
