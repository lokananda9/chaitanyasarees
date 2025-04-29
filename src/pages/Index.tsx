
import { useState, useEffect } from 'react';
import ContactList from '@/components/ContactList';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulate checking for permissions in a real app
    const timer = setTimeout(() => {
      setReady(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="px-4 py-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-center">QuickBill Connect</h1>
      </div>
      
      <div className="container max-w-md mx-auto px-4 py-6">
        {!ready ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading contacts...</p>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-medium mb-4">Contacts</h2>
            <ContactList />
          </>
        )}
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
