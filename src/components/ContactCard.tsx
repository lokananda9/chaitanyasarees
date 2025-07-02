
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contact } from '../lib/types';
import { Button } from '@/components/ui/button';
import { createContactProfile, deleteContact } from '@/lib/storageUtils';
import { toast } from '@/components/ui/use-toast';
import { Trash2 } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
  refreshContacts: () => void;
}

const ContactCard = ({ contact, refreshContacts }: ContactCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  
  const handleContactClick = async () => {
    if (!contact.profileCreated) {
      try {
        const created = createContactProfile(contact.id);
        if (created) {
          toast({
            title: 'Profile Created',
            description: `Created profile for ${contact.name}`,
            duration: 3000,
          });
          refreshContacts();
        }
      } catch (error) {
        console.error('Error creating profile:', error);
        toast({
          title: 'Error',
          description: 'Failed to create profile',
          variant: 'destructive',
          duration: 3000,
        });
        return;
      }
    }
    navigate(`/contact/${contact.id}`);
  };

  const handleDeleteContact = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleting(true);
    try {
      const deleted = deleteContact(contact.id);
      if (deleted) {
        toast({
          title: 'Contact Deleted',
          description: `${contact.name} has been deleted`,
          duration: 3000,
        });
        refreshContacts();
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete contact',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsDeleting(false);
    }
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
