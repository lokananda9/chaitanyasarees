
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { addProductToProfile } from '@/lib/storageUtils';
import { toast } from '@/components/ui/use-toast';
import DOMPurify from 'dompurify';

interface NewPurchaseFormProps {
  profileId: string;
  onProductAdded: () => void;
}

const NewPurchaseForm = ({ profileId, onProductAdded }: NewPurchaseFormProps) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  
  const resetForm = () => {
    setProductName('');
    setPrice('');
    setPaidAmount('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedProductName = productName.trim();

    if (!trimmedProductName || !price) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all required fields (Product Name and Price)',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const sanitizedProductName = DOMPurify.sanitize(trimmedProductName);
      const priceNumber = parseFloat(price);
      const paidNumber = paidAmount ? parseFloat(paidAmount) : 0;
      
      if (isNaN(priceNumber) || priceNumber <= 0) {
        toast({
          title: 'Invalid Price',
          description: 'Price must be a positive number',
          variant: 'destructive',
          duration: 3000,
        });
        setIsSubmitting(false);
        return;
      }
      
      if (isNaN(paidNumber) || paidNumber < 0) {
        toast({
          title: 'Invalid Payment',
          description: 'Paid amount must be a non-negative number',
          variant: 'destructive',
          duration: 3000,
        });
        setIsSubmitting(false);
        return;
      }
      
      if (paidNumber > priceNumber) {
        toast({
          title: 'Invalid Payment',
          description: 'Paid amount cannot exceed price',
          variant: 'destructive',
          duration: 3000,
        });
        setIsSubmitting(false);
        return;
      }
      
      const success = addProductToProfile(profileId, {
        name: sanitizedProductName,
        price: priceNumber,
        paidAmount: paidNumber,
      });
      
      if (success) {
        toast({
          title: 'Product Added',
          description: `Added ${sanitizedProductName} to profile`,
          duration: 3000,
        });
        resetForm();
        setFormVisible(false);
        onProductAdded();
      } else {
        toast({
          title: 'Error',
          description: 'Failed to add product',
          variant: 'destructive',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!formVisible) {
    return (
      <Button 
        className="w-full bg-brand-blue hover:bg-brand-blue/90"
        onClick={() => setFormVisible(true)}
      >
        Add New Purchase
      </Button>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add New Purchase</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g., Laptop, Phone, Service"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              type="number"
              min="0.01"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="paid-amount">Paid Amount ($)</Label>
            <Input
              id="paid-amount"
              type="number"
              min="0"
              step="0.01"
              value={paidAmount}
              onChange={(e) => setPaidAmount(e.target.value)}
              placeholder="0.00"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => setFormVisible(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90"
            disabled={isSubmitting}
          >
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default NewPurchaseForm;
