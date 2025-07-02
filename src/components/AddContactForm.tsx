import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { addContact } from '@/lib/storageUtils';
import { toast } from '@/components/ui/use-toast';
import { Plus, X } from 'lucide-react';

interface AddContactFormProps {
  onContactAdded: () => void;
}

const AddContactForm = ({ onContactAdded }: AddContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneNumber.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Please enter both name and phone number',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const success = addContact({ name: name.trim(), phoneNumber: phoneNumber.trim(), profileCreated: false });
      if (success) {
        toast({
          title: 'Contact Added',
          description: `${name} has been added to your contacts`,
          duration: 3000,
        });
        setName('');
        setPhoneNumber('');
        setIsOpen(false);
        onContactAdded();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add contact',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)} 
        className="mb-4 w-full bg-brand-blue hover:bg-brand-blue/90"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add New Contact
      </Button>
    );
  }

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex justify-between items-center">
          Add New Contact
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Contact Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Phone Number (e.g., +1234567890)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="flex-1 bg-brand-blue hover:bg-brand-blue/90"
            >
              {isLoading ? 'Adding...' : 'Add Contact'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddContactForm;