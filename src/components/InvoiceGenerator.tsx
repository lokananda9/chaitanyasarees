import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ContactProfile, Product, InvoiceFormat } from '@/lib/types';
import { generateInvoiceText, sendViaWhatsApp } from '@/lib/invoiceUtils';
import { Send, FileText, Share, MessageSquare, Download } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface InvoiceGeneratorProps {
  profile: ContactProfile;
  onInvoiceSent: () => void;
}

const InvoiceGenerator = ({ profile, onInvoiceSent }: InvoiceGeneratorProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<InvoiceFormat>('message');
  const [previewVisible, setPreviewVisible] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  const downloadPDF = async () => {
    if (!pdfRef.current) return;
    
    try {
      const canvas = await html2canvas(pdfRef.current);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${profile.name}_invoice.pdf`);
      toast({
        title: 'PDF Downloaded',
        description: 'Invoice PDF has been downloaded',
        duration: 2000,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: 'Error',
        description: 'Failed to download PDF',
        variant: 'destructive',
        duration: 2000,
      });
    }
  };

  const downloadImage = async () => {
    if (!imageRef.current) return;
    
    try {
      const canvas = await html2canvas(imageRef.current);
      const link = document.createElement('a');
      link.download = `${profile.name}_invoice.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      toast({
        title: 'Image Downloaded',
        description: 'Invoice image has been downloaded',
        duration: 2000,
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: 'Error',
        description: 'Failed to download image',
        variant: 'destructive',
        duration: 2000,
      });
    }
  };

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
                      ₹{Math.round(product.price)}
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
            <Tabs defaultValue="message" onValueChange={(v) => setSelectedFormat(v as InvoiceFormat)}>
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="message">Message</TabsTrigger>
                <TabsTrigger value="pdf">PDF</TabsTrigger>
                <TabsTrigger value="image">Image</TabsTrigger>
              </TabsList>
              <TabsContent value="message" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-mono text-sm">
                  {invoiceText}
                </div>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => {
                    navigator.clipboard.writeText(invoiceText);
                    toast({
                      title: 'Copied!',
                      description: 'Message copied to clipboard',
                      duration: 2000,
                    });
                  }}
                >
                  Copy Message
                </Button>
              </TabsContent>
              <TabsContent value="pdf" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div ref={pdfRef} className="bg-white p-6 rounded border" style={{fontFamily: 'monospace', fontSize: '12px'}}>
                    <div style={{textAlign: 'center', marginBottom: '20px'}}>
                      <h2 style={{fontSize: '18px', fontWeight: 'bold'}}>CHAITANYA SAREES</h2>
                      <p>INVOICE</p>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      <p><strong>Bill To:</strong> {profile.name}</p>
                      <p><strong>Phone:</strong> {profile.phoneNumber}</p>
                      <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                    </div>
                    <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '20px'}}>
                      <thead>
                        <tr style={{borderBottom: '1px solid #000'}}>
                          <th style={{textAlign: 'left', padding: '8px'}}>Item</th>
                          <th style={{textAlign: 'right', padding: '8px'}}>Price</th>
                          <th style={{textAlign: 'right', padding: '8px'}}>Paid</th>
                          <th style={{textAlign: 'right', padding: '8px'}}>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProducts.map(product => (
                          <tr key={product.id} style={{borderBottom: '1px solid #ccc'}}>
                            <td style={{padding: '8px'}}>{product.name}</td>
                            <td style={{textAlign: 'right', padding: '8px'}}>₹{Math.round(product.price)}</td>
                            <td style={{textAlign: 'right', padding: '8px'}}>₹{Math.round(product.paidAmount)}</td>
                            <td style={{textAlign: 'right', padding: '8px'}}>₹{Math.round(product.price - product.paidAmount)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div style={{textAlign: 'right'}}>
                      <p><strong>Total: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + p.price, 0))}</strong></p>
                      <p><strong>Total Paid: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + p.paidAmount, 0))}</strong></p>
                      <p><strong>Total Balance: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + (p.price - p.paidAmount), 0))}</strong></p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-2"
                    onClick={downloadPDF}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="image" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div ref={imageRef} className="bg-white p-6 rounded border shadow-lg" style={{fontFamily: 'Arial, sans-serif'}}>
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold text-blue-800">CHAITANYA SAREES</h1>
                      <p className="text-gray-600">INVOICE</p>
                      <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Bill To:</h3>
                      <p className="text-lg font-medium">{profile.name}</p>
                      <p className="text-gray-600">{profile.phoneNumber}</p>
                    </div>
                    <div className="border rounded-lg overflow-hidden mb-6">
                      <div className="bg-blue-50 p-3 font-semibold grid grid-cols-4 gap-2">
                        <span>Item</span>
                        <span className="text-right">Price</span>
                        <span className="text-right">Paid</span>
                        <span className="text-right">Balance</span>
                      </div>
                      {selectedProducts.map(product => (
                        <div key={product.id} className="p-3 border-t grid grid-cols-4 gap-2">
                          <span>{product.name}</span>
                          <span className="text-right">₹{Math.round(product.price)}</span>
                          <span className="text-right">₹{Math.round(product.paidAmount)}</span>
                          <span className="text-right">₹{Math.round(product.price - product.paidAmount)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-lg"><strong>Total: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + p.price, 0))}</strong></p>
                      <p className="text-lg"><strong>Paid: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + p.paidAmount, 0))}</strong></p>
                      <p className="text-xl font-bold text-blue-800">Balance: ₹{Math.round(selectedProducts.reduce((sum, p) => sum + (p.price - p.paidAmount), 0))}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-2"
                    onClick={downloadImage}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Image
                  </Button>
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