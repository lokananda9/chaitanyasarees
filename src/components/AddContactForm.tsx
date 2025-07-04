import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAddContact } from '@/hooks/useContacts'; // Import the hook
import { toast } from '@/components/ui/use-toast';
import { Plus, X } from 'lucide-react';
import DOMPurify from 'dompurify';

// onContactAdded prop is no longer needed
const AddContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const addContactMutation = useAddContact(); // Use the hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhoneNumber = phoneNumber.trim();

    if (!trimmedName || !trimmedPhoneNumber) {
      toast({
        title: 'Missing Information',
        description: 'Please enter both name and phone number',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    const sanitizedName = DOMPurify.sanitize(trimmedName);
    // Basic phone number validation (allow digits, +, -, spaces, parentheses)
    // For MNC level, a more robust validation library or regex might be preferred.
    const validatedPhoneNumber = trimmedPhoneNumber.replace(/[^0-9+\- ()]/g, '');


    addContactMutation.mutate(
      { name: sanitizedName, phoneNumber: validatedPhoneNumber },
      {
        onSuccess: () => {
          toast({
            title: 'Contact Added',
            // Use sanitizedName for the toast message to be safe, though name state is also an option
            description: `${sanitizedName} has been added to your contacts`,
            duration: 3000,
          });
          setName('');
          setPhoneNumber('');
          setIsOpen(false);
          // onContactAdded(); // No longer needed, query invalidation handles updates
        },
        onError: (error) => {
          console.error("Error adding contact:", error);
          toast({
            title: 'Error',
            description: 'Failed to add contact. Please try again.',
            variant: 'destructive',
            duration: 3000,
          });
        },
      }
    );
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
              disabled={addContactMutation.isPending}
              className="flex-1 bg-brand-blue hover:bg-brand-blue/90"
            >
              {addContactMutation.isPending ? 'Adding...' : 'Add Contact'}
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