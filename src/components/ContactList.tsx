
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ContactCard from './ContactCard';
import AddContactForm from './AddContactForm';
import { useContacts } from '@/hooks/useContacts'; // Import the new hook

const ContactList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: contacts, isLoading, error } = useContacts(searchQuery); // Use the hook

  // Handle error state if needed
  if (error) {
    console.error('Error fetching contacts:', error);
    // You might want to display an error message to the user
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search contacts..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="space-y-2 mb-4">
        {isLoading ? (
          <div className="text-center py-8">Loading contacts...</div>
        ) : contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard 
              key={contact.id} 
              contact={contact}
              // refreshContacts is no longer needed due to query invalidation
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {searchQuery ? 'No contacts match your search' : 'No contacts found'}
          </div>
        )}
      </div>
      
      {/* onContactAdded is no longer needed as useAddContact will invalidate the query */}
      <AddContactForm />
    </div>
  );
};

export default ContactList;
