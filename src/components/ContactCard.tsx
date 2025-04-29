
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contact } from '../lib/types';
import { Button } from '@/components/ui/button';
import { createContactProfile } from '@/lib/storageUtils';
import { toast } from '@/components/ui/use-toast';

interface ContactCardProps {
  contact: Contact;
  refreshContacts: () => void;
}

const ContactCard = ({ contact, refreshContacts }: ContactCardProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  
  const handleCreateProfile = async () => {
    setIsCreating(true);
    try {
      const created = createContactProfile(contact.id);
      if (created) {
        toast({
          title: 'Profile Created',
          description: `Created profile for ${contact.name}`,
          duration: 3000,
        });
        refreshContacts();
      } else {
        toast({
          title: 'Error',
          description: 'Failed to create profile',
          variant: 'destructive',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error creating profile:', error);
    } finally {
      setIsCreating(false);
    }
  };
  
  const handleViewProfile = () => {
    navigate(`/contact/${contact.id}`);
  };
  
  return (
    <div className="flex justify-between items-center p-4 rounded-lg bg-white border border-gray-100 shadow-sm mb-2">
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{contact.name}</span>
        <span className="text-sm text-gray-500">{contact.phoneNumber}</span>
      </div>
      
      {contact.profileCreated ? (
        <Button
          variant="default"
          className="bg-brand-blue hover:bg-brand-blue/90"
          onClick={handleViewProfile}
        >
          View
        </Button>
      ) : (
        <Button
          variant="outline"
          className="border-brand-blue text-brand-blue hover:bg-brand-lightBlue hover:text-brand-blue"
          onClick={handleCreateProfile}
          disabled={isCreating}
        >
          Create
        </Button>
      )}
    </div>
  );
};

export default ContactCard;
