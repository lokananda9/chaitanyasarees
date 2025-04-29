
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import NewPurchaseForm from '@/components/NewPurchaseForm';
import InvoiceGenerator from '@/components/InvoiceGenerator';
import { getProfileByContactId, getContacts } from '@/lib/storageUtils';
import { ContactProfile as ProfileType } from '@/lib/types';

const ContactProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  
  const loadProfile = () => {
    if (!id) return;
    
    try {
      const profileData = getProfileByContactId(id);
      if (profileData) {
        setProfile(profileData);
      } else {
        toast({
          title: 'Profile Not Found',
          description: 'Could not find the requested profile',
          variant: 'destructive',
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to load profile',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadProfile();
  }, [id]);
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const handleProductAdded = () => {
    loadProfile();
  };
  
  const handleInvoiceSent = () => {
    loadProfile();
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="px-4 py-6 bg-white shadow-sm">
          <h1 className="text-xl font-semibold text-center">Loading Profile...</h1>
        </div>
      </div>
    );
  }
  
  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="px-4 py-6 bg-white shadow-sm">
          <h1 className="text-xl font-semibold text-center">Profile Not Found</h1>
        </div>
        <div className="text-center py-8">
          <Button onClick={handleBackClick}>Back to Contacts</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="px-4 py-3 bg-white shadow-sm">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Contact Profile</h1>
        </div>
      </div>
      
      <div className="container max-w-md mx-auto px-4 py-6">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-500">{profile.phoneNumber}</p>
          </CardContent>
        </Card>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Products</h3>
          {profile.products.length > 0 ? (
            <div className="space-y-3">
              {profile.products.map(product => {
                const balance = product.price - product.paidAmount;
                return (
                  <Card key={product.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{product.name}</h4>
                        <span className="text-gray-500 text-sm">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-xs text-gray-500">Paid</span>
                          <p className="text-sm font-medium text-green-600">
                            ${product.paidAmount.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Balance</span>
                          <p className={`text-sm font-medium ${balance > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                            ${balance.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">No products added yet</p>
          )}
        </div>
        
        <NewPurchaseForm
          profileId={profile.id}
          onProductAdded={handleProductAdded}
        />
        
        <InvoiceGenerator
          profile={profile}
          onInvoiceSent={handleInvoiceSent}
        />
      </div>
      
      <Navigation />
    </div>
  );
};

export default ContactProfile;
