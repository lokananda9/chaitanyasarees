
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Contact } from '@/lib/types';
import ContactCard from './ContactCard';
import AddContactForm from './AddContactForm';
import { getContacts, searchContacts } from '@/lib/storageUtils';

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchContacts = () => {
    setIsLoading(true);
    try {
      const contactList = searchQuery 
        ? searchContacts(searchQuery)
        : getContacts();
      setContacts(contactList);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchContacts();
  }, [searchQuery]);
  
  return (
    <div className="w-full max-w-md mx-auto">
      <AddContactForm onContactAdded={fetchContacts} />
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search contacts..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        {isLoading ? (
          <div className="text-center py-8">Loading contacts...</div>
        ) : contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard 
              key={contact.id} 
              contact={contact} 
              refreshContacts={fetchContacts} 
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {searchQuery ? 'No contacts match your search' : 'No contacts found'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
