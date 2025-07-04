
import { useNavigate } from 'react-router-dom';
import { Contact } from '../lib/types';
import { Button } from '@/components/ui/button';
import { useDeleteContact, useCreateContactProfile } from '@/hooks/useContacts'; // Import hooks
import { toast } from '@/components/ui/use-toast';
import { Trash2 } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
  // refreshContacts is no longer needed
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const navigate = useNavigate();
  const deleteContactMutation = useDeleteContact();
  const createProfileMutation = useCreateContactProfile();

  const handleContactClick = async () => {
    if (!contact.profileCreated) {
      createProfileMutation.mutate(contact.id, {
        onSuccess: () => {
          toast({
            title: 'Profile Created',
            description: `Created profile for ${contact.name}`,
            duration: 3000,
          });
          // Navigation will occur after profile creation attempt (success or error handled by mutation)
          navigate(`/contact/${contact.id}`);
        },
        onError: (error) => {
          console.error('Error creating profile:', error);
          toast({
            title: 'Error',
            description: 'Failed to create profile. Please try again.',
            variant: 'destructive',
            duration: 3000,
          });
          // Still navigate, or decide on alternative behavior
          navigate(`/contact/${contact.id}`);
        }
      });
    } else {
      navigate(`/contact/${contact.id}`);
    }
  };

  const handleDeleteContact = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling to the card's onClick
    deleteContactMutation.mutate(contact.id, {
      onSuccess: () => {
        toast({
          title: 'Contact Deleted',
          description: `${contact.name} has been deleted.`,
          duration: 3000,
        });
        // refreshContacts(); // No longer needed
      },
      onError: (error) => {
        console.error('Error deleting contact:', error);
        toast({
          title: 'Error',
          description: 'Failed to delete contact. Please try again.',
          variant: 'destructive',
          duration: 3000,
        });
      },
    });
  };
  
  return (
    <div 
      className="flex justify-between items-center p-4 rounded-lg bg-white border border-gray-100 shadow-sm mb-2 cursor-pointer hover:bg-gray-50"
      onClick={handleContactClick}
    >
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{contact.name}</span>
        <span className="text-sm text-gray-500">{contact.phoneNumber}</span>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="text-red-600 hover:bg-red-50 hover:text-red-700"
        onClick={handleDeleteContact}
        disabled={isDeleting}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ContactCard;
