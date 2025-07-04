import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const showrooms = [
    {
      name: "Mumbai Flagship Store",
      address: "123 Textile Avenue, Silk Market, Mumbai - 400001",
      phone: "+91-9876543210",
      email: "mumbai@chaitanyasarees.com",
      hours: "10:00 AM - 9:00 PM (All days)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      name: "Delhi Showroom",
      address: "45 Connaught Place, New Delhi - 110001",
      phone: "+91-9876543211",
      email: "delhi@chaitanyasarees.com",
      hours: "10:00 AM - 8:30 PM (All days)",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      name: "Bangalore Branch",
      address: "78 Brigade Road, Bangalore - 560001",
      phone: "+91-9876543212",
      email: "bangalore@chaitanyasarees.com",
      hours: "10:30 AM - 9:00 PM (All days)",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop"
    },
    {
      name: "Hyderabad Store",
      address: "156 Abids Main Road, Hyderabad - 500001",
      phone: "+91-9876543213",
      email: "hyderabad@chaitanyasarees.com",
      hours: "10:00 AM - 9:30 PM (All days)",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-red-600" />,
      title: "Phone Numbers",
      details: [
        "Customer Care: +91-9876543210",
        "Wholesale Enquiry: +91-9876543215",
        "Custom Orders: +91-9876543216"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600" />,
      title: "Email Addresses",
      details: [
        "General: info@chaitanyasarees.com",
        "Support: support@chaitanyasarees.com",
        "Orders: orders@chaitanyasarees.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "Business Hours",
      details: [
        "Monday - Sunday: 10:00 AM - 9:00 PM",
        "Customer Support: 24/7",
        "Online Orders: 24/7"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            We're here to help you find the perfect saree. Get in touch with us today!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91-XXXXXXXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          <SelectItem value="custom">Custom Design</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your detailed message..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <Card className="border-none shadow-lg bg-red-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Call our customer care for instant support
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91-9876543210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Showrooms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visit Our Showrooms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our collection in person at any of our showrooms across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showrooms.map((showroom, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={showroom.image}
                    alt={showroom.name}
                    className="w-full sm:w-48 h-48 sm:h-auto object-cover"
                  />
                  <CardContent className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {showroom.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{showroom.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-red-600" />
                        <span>{showroom.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-red-600" />
                        <span>{showroom.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>{showroom.hours}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
                      Get Directions
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us on Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our flagship store location in Mumbai
            </p>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7919922192976!2d72.82773831490214!3d18.94125178716098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2c8f7c8c7b%3A0x4c5f6c8f7c8c7b4c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;