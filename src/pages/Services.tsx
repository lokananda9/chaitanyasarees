import { Truck, Shield, Palette, Users, HeadphonesIcon, RotateCcw, Scissors, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const mainServices = [
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Retail Sales",
      description: "Premium sarees for individual customers with personalized shopping experience",
      features: ["Wide collection of 500+ designs", "Expert styling consultation", "Personal shopping assistance", "Size and fit guidance"]
    },
    {
      icon: <Truck className="w-12 h-12 text-red-600" />,
      title: "Wholesale Business",
      description: "Bulk orders for retailers and distributors across India",
      features: ["Competitive wholesale pricing", "Minimum order quantity: 50 pieces", "Pan-India distribution", "Credit facility for verified dealers"]
    },
    {
      icon: <Palette className="w-12 h-12 text-red-600" />,
      title: "Custom Design",
      description: "Bespoke saree design services for special occasions",
      features: ["Personal designer consultation", "Custom color combinations", "Unique patterns and motifs", "Bridal collection customization"]
    },
    {
      icon: <Calendar className="w-12 h-12 text-red-600" />,
      title: "Rental Services",
      description: "Premium saree rental for special events and occasions",
      features: ["Designer sarees for rent", "Wedding and party collections", "Professional cleaning included", "Flexible rental periods"]
    }
  ];

  const additionalServices = [
    {
      icon: <Scissors className="w-8 h-8 text-red-600" />,
      title: "Alterations & Tailoring",
      description: "Expert alteration services for perfect fit"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Quality Assurance",
      description: "100% authentic products with quality guarantee"
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: "Free Shipping",
      description: "Complimentary delivery on orders above ₹2,999"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-red-600" />,
      title: "Easy Returns",
      description: "7-day hassle-free return policy"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-red-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    },
    {
      icon: <Palette className="w-8 h-8 text-red-600" />,
      title: "Color Matching",
      description: "Expert color coordination for complete outfits"
    }
  ];

  const pricing = [
    {
      category: "Cotton Sarees",
      priceRange: "₹1,500 - ₹5,000",
      features: ["Handloom cotton", "Block prints", "Daily wear collection", "Comfortable fabric"]
    },
    {
      category: "Silk Sarees",
      priceRange: "₹5,000 - ₹25,000",
      features: ["Pure silk quality", "Traditional designs", "Zari work", "Special occasions"]
    },
    {
      category: "Designer Collection",
      priceRange: "₹8,000 - ₹50,000",
      features: ["Contemporary designs", "Premium fabrics", "Exclusive patterns", "Limited editions"]
    },
    {
      category: "Bridal Sarees",
      priceRange: "₹15,000 - ₹1,00,000",
      features: ["Heavy embroidery", "Premium materials", "Customization available", "Complete bridal sets"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Comprehensive saree solutions for every need - from individual purchases to bulk orders, 
            custom designs to rental services
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for your saree requirements under one roof
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extra services that make your shopping experience exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pricing Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our saree categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((category, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {category.category}
                  </h3>
                  <div className="text-2xl font-bold text-red-600 mb-4">
                    {category.priceRange}
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures the best experience for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Understand your requirements and preferences" },
              { step: "2", title: "Selection", description: "Browse our collection or request custom designs" },
              { step: "3", title: "Customization", description: "Personalize your saree with our expert team" },
              { step: "4", title: "Delivery", description: "Quality check and timely delivery to your doorstep" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today to discuss your requirements or visit our showroom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;