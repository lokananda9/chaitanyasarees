
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added CardHeader, CardTitle
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, ShoppingBag, FileTextIcon, Edit3, UserCircle } from 'lucide-react'; // Added more icons
import Navigation from '@/components/Navigation'; // Assuming this is a bottom nav for mobile views
import NewPurchaseForm from '@/components/NewPurchaseForm'; // Needs theming if used
import InvoiceGenerator from '@/components/InvoiceGenerator'; // Needs theming if used
import { getProfileByContactId } from '@/lib/storageUtils'; // Removed getContacts as it's not used
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
      if (profileData) setProfile(profileData);
      else {
        toast({ title: 'Profile Not Found', description: 'Could not find the requested client profile.', variant: 'destructive' });
        navigate('/business-portal?tab=clients'); // Navigate back to clients tab in BusinessPortal
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({ title: 'Error', description: 'Failed to load profile.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => { loadProfile(); }, [id]);
  
  const handleBackClick = () => navigate('/business-portal?tab=clients'); // Consistent back navigation to BusinessPortal
  const handleProductAdded = () => loadProfile(); // Reload profile to see new product
  const handleInvoiceSent = () => loadProfile(); // Potentially update profile state if invoice affects it
  
  // Common header for loading and not found states
  const PageHeader = ({ title }: { title: string }) => (
    <header className="px-4 py-3 bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={handleBackClick} className="mr-2 text-primary hover:text-primary/80">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-serif font-semibold text-primary truncate">{title}</h1>
      </div>
    </header>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <PageHeader title="Loading Profile..." />
        <main className="flex-grow flex items-center justify-center"><p className="text-secondary">Fetching client details...</p></main>
        <Navigation />
      </div>
    );
  }
  
  if (!profile) {
     return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <PageHeader title="Profile Not Found" />
        <main className="flex-grow flex items-center justify-center text-center p-4">
          <div>
            <UserCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-secondary mb-6">The requested client profile could not be found or may have been removed.</p>
            <Button onClick={handleBackClick} variant="outline" className="rounded-sm border-primary text-primary hover:bg-primary/5">
              Back to Client List
            </Button>
          </div>
        </main>
        <Navigation />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <PageHeader title={profile.name} /> {/* Use dynamic profile name in header */}
      
      <main className="flex-grow container max-w-2xl mx-auto px-4 py-6 space-y-6"> {/* Increased max-width slightly */}
        <Card className="bg-card border-border rounded-sm shadow-sm">
          <CardHeader className="pb-3"> {/* Reduced bottom padding of header */}
            <CardTitle className="font-serif text-2xl text-foreground flex items-center">
              <UserCircle className="w-6 h-6 mr-3 text-accent" />
              Client Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0"> {/* Removed top padding of content */}
            <p className="text-base text-secondary"><span className="font-medium text-foreground">Name:</span> {profile.name}</p>
            <p className="text-base text-secondary"><span className="font-medium text-foreground">Phone:</span> {profile.phoneNumber}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border rounded-sm shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-foreground flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2.5 text-accent" />
              Purchased Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            {profile.products.length > 0 ? (
              <div className="space-y-4">
                {profile.products.map(product => {
                  const balance = product.price - product.paidAmount;
                  return (
                    <div key={product.id} className="p-4 border border-border rounded-sm bg-muted/30">
                      <div className="flex justify-between items-center mb-1.5">
                        <h4 className="font-medium text-foreground text-base">{product.name}</h4>
                        <span className="text-secondary text-sm font-semibold">₹{product.price.toFixed(2)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-xs text-muted-foreground">Paid:</span>
                          <p className="font-medium text-green-600">₹{product.paidAmount.toFixed(2)}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Balance:</span>
                          <p className={`font-medium ${balance > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                            ₹{balance.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-secondary py-4 text-sm">This client has not purchased any products yet.</p>
            )}
          </CardContent>
        </Card>
        
        {/* Forms might need their own Card wrapper if not already included by the component itself */}
        {/* Assuming NewPurchaseForm and InvoiceGenerator are self-contained with Card or similar styling */}
        <Card className="bg-card border-border rounded-sm shadow-sm">
          <CardHeader><CardTitle className="font-serif text-xl text-foreground">Add New Purchase</CardTitle></CardHeader>
          <CardContent><NewPurchaseForm profileId={profile.id} onProductAdded={handleProductAdded} /></CardContent>
        </Card>
        
        <Card className="bg-card border-border rounded-sm shadow-sm">
           <CardHeader>
            <CardTitle className="font-serif text-xl text-foreground flex items-center">
              <FileTextIcon className="w-5 h-5 mr-2.5 text-accent" />
              Generate Invoice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceGenerator profile={profile} onInvoiceSent={handleInvoiceSent} />
          </CardContent>
        </Card>
      </main>
      
      <Navigation /> {/* Assumed to be a bottom navigation bar */}
    </div>
  );
};

export default ContactProfile;
