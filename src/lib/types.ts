
export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  profileCreated: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  paidAmount: number;
}

export interface ContactProfile {
  id: string;
  contactId: string;
  name: string;
  phoneNumber: string;
  products: Product[];
}

export interface TransactionLog {
  id: string;
  contactId: string;
  contactName: string;
  date: string;
  type: 'message' | 'pdf' | 'image';
  content: string;
  products?: Product[];
}

export type InvoiceFormat = 'text' | 'pdf' | 'image';
