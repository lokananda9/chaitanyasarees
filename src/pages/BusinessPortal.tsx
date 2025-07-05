import { useState } from 'react';
import { Users, FileText, BarChart3, Settings, Plus, Search, CheckCircle } from 'lucide-react'; // Added CheckCircle
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Added CardDescription
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactList from '@/components/ContactList'; // Assuming this will be styled or is simple enough
import AddContactForm from '@/components/AddContactForm'; // Assuming this will be styled or is simple enough
import InvoiceGenerator from '@/components/InvoiceGenerator'; // Assuming this will be styled or is simple enough

const BusinessPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddContact, setShowAddContact] = useState(false);

  const stats = [
    {
      title: "Total Clients",
      value: "248",
      change: "+12%",
      icon: <Users className="w-6 h-6 text-primary" /> // Updated color
    },
    {
      title: "Active Orders",
      value: "56",
      change: "+8%",
      icon: <FileText className="w-6 h-6 text-primary" /> // Updated color
    },
    {
      title: "Monthly Revenue",
      value: "₹12.5L",
      change: "+15%",
      icon: <BarChart3 className="w-6 h-6 text-primary" /> // Updated color
    },
    {
      title: "Pending Invoices",
      value: "23",
      change: "-5%", // Keep color logic for negative change if needed
      icon: <FileText className="w-6 h-6 text-destructive" /> // Using destructive for negative implication
    }
  ];

  const recentActivities = [
    { action: "New order from Priya Textiles", time: "2 hours ago", type: "order", icon: <FileText className="w-4 h-4 text-primary" /> },
    { action: "Invoice #INV-2024-001 generated", time: "4 hours ago", type: "invoice", icon: <FileText className="w-4 h-4 text-accent" /> },
    { action: "Payment received from Sharma Sarees", time: "1 day ago", type: "payment", icon: <CheckCircle className="w-4 h-4 text-green-600" /> },
    { action: "New client: Fashion House", time: "2 days ago", type: "client", icon: <Users className="w-4 h-4 text-primary" /> },
    { action: "Bulk order shipped to Delhi", time: "3 days ago", type: "shipment", icon: <Truck className="w-4 h-4 text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">Business Portal</h1>
              <p className="text-lg text-secondary max-w-2xl">
                Streamline your wholesale operations, manage client relations, and track your business growth.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm">
                <Plus className="w-5 h-5 mr-2" />
                Quick Actions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted p-1 rounded-md">
            <TabsTrigger value="dashboard" className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Dashboard</TabsTrigger>
            <TabsTrigger value="clients" className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Clients</TabsTrigger>
            <TabsTrigger value="invoices" className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Invoices</TabsTrigger>
            <TabsTrigger value="reports" className="rounded-sm data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">Reports</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.title} className="bg-card border-border rounded-sm shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-secondary">{stat.title}</CardTitle>
                    {stat.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-serif text-foreground">{stat.value}</div>
                    <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-destructive'}`}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activities */}
              <Card className="lg:col-span-2 bg-card border-border rounded-sm shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground">Recent Activities</CardTitle>
                  <CardDescription className="text-sm text-secondary">Overview of latest business interactions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                        <div className="p-2 bg-muted rounded-full">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card border-border rounded-sm shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground">Quick Actions</CardTitle>
                   <CardDescription className="text-sm text-secondary">Access common tasks quickly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="default" className="w-full justify-start rounded-sm" onClick={() => { setActiveTab('clients'); setShowAddContact(true); }}>
                    <Plus className="w-4 h-4 mr-2" /> Add New Client
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-sm" onClick={() => setActiveTab('invoices')}>
                    <FileText className="w-4 h-4 mr-2" /> Generate Invoice
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-sm" onClick={() => setActiveTab('reports')}>
                    <BarChart3 className="w-4 h-4 mr-2" /> View Reports
                  </Button>
                  <Button variant="ghost" className="w-full justify-start rounded-sm">
                    <Settings className="w-4 h-4 mr-2" /> Account Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-3xl font-serif font-semibold text-foreground">Client Management</h2>
              <Button className="rounded-sm" onClick={() => setShowAddContact(!showAddContact)}>
                <Plus className="w-4 h-4 mr-2" /> {showAddContact ? 'Cancel' : 'Add New Client'}
              </Button>
            </div>

            {showAddContact && (
              <Card className="bg-card border-border rounded-sm shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Add New Client</CardTitle>
                </CardHeader>
                <CardContent>
                   <AddContactForm onContactAdded={() => setShowAddContact(false)} />
                 </CardContent>
              </Card>
            )}

            <Card className="bg-card border-border rounded-sm shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Client Directory</CardTitle>
                <CardDescription className="text-sm text-secondary">Search and manage your client base.</CardDescription>
                 <div className="pt-4">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        type="text"
                        placeholder="Search clients by name or ID..."
                        className="w-full pl-10 pr-4 py-2 rounded-sm h-10 text-sm"
                      />
                    </div>
                  </div>
              </CardHeader>
              <CardContent>
                <ContactList /> {/* Assuming ContactList will adapt or be restyled later */}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">Invoice Management</h2>
            <Card className="bg-card border-border rounded-sm shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Generate New Invoice</CardTitle>
                <CardDescription className="text-sm text-secondary">Create and dispatch professional invoices.</CardDescription>
              </CardHeader>
              <CardContent>
                 <InvoiceGenerator 
                   profile={{ id: '1', contactId: '1', name: 'Select a client first', phoneNumber: '', products: [] }}
                   onInvoiceSent={() => console.log('Invoice sent callback triggered')}
                 />
               </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-3xl font-serif font-semibold text-foreground">Business Reports & Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border rounded-sm shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-sm flex items-center justify-center">
                    <p className="text-secondary">Sales Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-sm shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Top Performing Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Priya Textiles", amount: "₹2,45,000" },
                      { name: "Sharma Sarees", amount: "₹1,89,000" },
                      { name: "Fashion House", amount: "₹1,56,000" },
                      { name: "Delhi Emporium", amount: "₹1,23,000" }
                    ].map((client) => (
                      <div key={client.name} className="flex justify-between items-center p-3 bg-muted rounded-sm">
                        <span className="text-sm font-medium text-foreground">{client.name}</span>
                        <span className="text-sm text-primary font-semibold">{client.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border rounded-sm shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Revenue Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-muted rounded-sm flex items-center justify-center">
                  <p className="text-secondary">Revenue Analytics Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessPortal;