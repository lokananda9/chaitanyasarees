import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react'; // Added ExternalLink
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

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
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80" // Updated image URL
    },
    {
      name: "Delhi Showroom",
      address: "45 Connaught Place, New Delhi - 110001",
      phone: "+91-9876543211",
      email: "delhi@chaitanyasarees.com",
      hours: "10:00 AM - 8:30 PM (All days)",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&q=80" // Updated image URL
    },
    {
      name: "Bangalore Branch",
      address: "78 Brigade Road, Bangalore - 560001",
      phone: "+91-9876543212",
      email: "bangalore@chaitanyasarees.com",
      hours: "10:30 AM - 9:00 PM (All days)",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop&q=80" // Updated image URL
    },
    {
      name: "Hyderabad Store",
      address: "156 Abids Main Road, Hyderabad - 500001",
      phone: "+91-9876543213",
      email: "hyderabad@chaitanyasarees.com",
      hours: "10:00 AM - 9:30 PM (All days)",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&q=80" // Updated image URL
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-accent" />, // Updated icon style
      title: "By Telephone", // Updated title
      details: [
        "Customer Care: +91-9876543210",
        "Wholesale Enquiries: +91-9876543215",
        "Bespoke Orders: +91-9876543216"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-accent" />, // Updated icon style
      title: "Via Email", // Updated title
      details: [
        "General Enquiries: info@chaitanyasarees.com",
        "Client Support: support@chaitanyasarees.com",
        "Online Orders: orders@chaitanyasarees.com"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />, // Updated icon style
      title: "Our Availability", // Updated title
      details: [
        "Monday - Sunday: 10:00 AM - 9:00 PM (IST)",
        "Customer Support: Available 24/7 via Email",
        "Online Boutique: Open for orders 24/7"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement/* | HTMLSelectElement */>) => {
    // For Select, you might need to handle it differently if not using Radix Select's onValueChange
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value // Assuming 'subject' is the field for inquiry type
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Potentially show a success message or clear form
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-3">Connect With Us</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            We are delighted to assist you. Reach out for any inquiries, support, or to plan your visit to our showrooms.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-border rounded-sm shadow-md p-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">Full Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g., Aishwarya Rai" required className="rounded-sm"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">Email Address</label>
                    <Input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g., a.rai@example.com" required className="rounded-sm"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">Phone Number (Optional)</label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g., +91 98765 43210" className="rounded-sm"/>
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-secondary mb-1.5">Nature of Inquiry</label>
                    <Select name="subject" onValueChange={handleSelectChange}> {/* Use name for subject state */}
                      <SelectTrigger id="inquiryType" className="rounded-sm w-full">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Product Information">Product Information</SelectItem>
                        <SelectItem value="Order Support">Order Support</SelectItem>
                        <SelectItem value="Bespoke Design">Bespoke Design</SelectItem>
                        <SelectItem value="Visit Showroom">Plan a Visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">Your Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Please share details about your inquiry..." rows={6} required className="rounded-sm"/>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm text-base py-3">
                  <Send className="w-4 h-4 mr-2.5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <aside className="lg:col-span-2 space-y-8">
            <Card className="bg-card border-border rounded-sm shadow-md p-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Direct Contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-serif font-medium text-primary mb-1.5">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-secondary">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-primary/5 border-primary/20 rounded-sm shadow-sm p-8 text-center"> {/* Light primary bg */}
              <h3 className="text-2xl font-serif font-semibold text-primary mb-3">Immediate Assistance?</h3>
              <p className="text-secondary mb-5 text-sm">
                Our dedicated team is ready to assist you. Call us for prompt support.
              </p>
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm text-base">
                <Phone className="w-4 h-4 mr-2.5" />
                Call Now: +91-9876543210
              </Button>
            </Card>
          </aside>
        </div>
      </div>

      {/* Showrooms Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Visit Our Sanctuaries of Silk" subtitle="Experience the Chaitanya legacy in person at our elegantly appointed showrooms across India." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showrooms.map((showroom) => ( // Removed index as showroom.name should be unique enough for key
              <Card key={showroom.name} className="bg-card border-border rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
                <img
                  src={showroom.image}
                  alt={showroom.name}
                  className="w-full h-56 object-cover" // Fixed height for image
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-3">{showroom.name}</h3>
                  <div className="space-y-2.5 text-sm text-secondary mb-5 flex-grow">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{showroom.address}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>{showroom.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>{showroom.email}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{showroom.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm text-sm">
                    Get Directions <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Locate Our Flagship Atelier" subtitle="Find our primary showroom in Mumbai, the heart of India's textile heritage." />
          <div className="aspect-[16/7] bg-muted rounded-sm overflow-hidden border border-border shadow-md"> {/* Adjusted aspect ratio and added border */}
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