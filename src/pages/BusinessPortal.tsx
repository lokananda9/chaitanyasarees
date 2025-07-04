import { useState } from 'react';
import { Users, FileText, BarChart3, Settings, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactList from '@/components/ContactList';
import AddContactForm from '@/components/AddContactForm';
import InvoiceGenerator from '@/components/InvoiceGenerator';

const BusinessPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddContact, setShowAddContact] = useState(false);

  const stats = [
    {
      title: "Total Clients",
      value: "248",
      change: "+12%",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Active Orders",
      value: "56",
      change: "+8%",
      icon: <FileText className="w-6 h-6 text-green-600" />
    },
    {
      title: "Monthly Revenue",
      value: "₹12.5L",
      change: "+15%",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Pending Invoices",
      value: "23",
      change: "-5%",
      icon: <FileText className="w-6 h-6 text-orange-600" />
    }
  ];

  const recentActivities = [
    { action: "New order from Priya Textiles", time: "2 hours ago", type: "order" },
    { action: "Invoice #INV-2024-001 generated", time: "4 hours ago", type: "invoice" },
    { action: "Payment received from Sharma Sarees", time: "1 day ago", type: "payment" },
    { action: "New client added: Fashion House", time: "2 days ago", type: "client" },
    { action: "Bulk order shipped to Delhi", time: "3 days ago", type: "shipment" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Business Portal</h1>
              <p className="text-xl text-red-100">
                Manage your wholesale business, clients, and orders efficiently
              </p>
            </div>
            <div className="hidden md:block">
              <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                <Plus className="w-4 h-4 mr-2" />
                Quick Actions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change} from last month</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-full">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full justify-start bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setActiveTab('clients')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Manage Clients
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => setActiveTab('invoices')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Invoice
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Client Management</h2>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setShowAddContact(!showAddContact)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Client
              </Button>
            </div>

            {showAddContact && (
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Add New Client</CardTitle>
                </CardHeader>
                                 <CardContent>
                   <AddContactForm onContactAdded={() => setShowAddContact(false)} />
                 </CardContent>
              </Card>
            )}

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Client List</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ContactList />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Invoice Management</h2>
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Generate Invoice</CardTitle>
              </CardHeader>
                             <CardContent>
                 <InvoiceGenerator 
                   profile={{
                     id: '1',
                     contactId: '1',
                     name: 'Select a client first',
                     phoneNumber: '',
                     products: []
                   }}
                   onInvoiceSent={() => {
                     console.log('Invoice sent');
                   }}
                 />
               </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Business Reports</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Sales Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Top Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Priya Textiles", amount: "₹2,45,000" },
                      { name: "Sharma Sarees", amount: "₹1,89,000" },
                      { name: "Fashion House", amount: "₹1,56,000" },
                      { name: "Delhi Emporium", amount: "₹1,23,000" }
                    ].map((client, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{client.name}</span>
                        <span className="text-red-600 font-semibold">{client.amount}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Revenue Analytics Chart Placeholder</p>
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