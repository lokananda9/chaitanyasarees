import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Truck, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Exquisite Silk Sarees",
      subtitle: "Handwoven with tradition, crafted with love",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&h=600&fit=crop",
      cta: "Explore Collection"
    },
    {
      title: "Bridal Collection 2024",
      subtitle: "Make your special day unforgettable",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&h=600&fit=crop",
      cta: "View Bridal Range"
    },
    {
      title: "Cotton Comfort Sarees",
      subtitle: "Elegant designs for everyday elegance",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=600&fit=crop",
      cta: "Shop Cotton Sarees"
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Premium Quality",
      description: "Finest fabrics and authentic craftsmanship since 1985"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "50,000+ Happy Customers",
      description: "Trusted by women across India for special occasions"
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: "Free Shipping",
      description: "Complimentary delivery on orders above ₹2,999"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Quality Guarantee",
      description: "100% authentic products with quality assurance"
    }
  ];

  const productCategories = [
    {
      name: "Silk Sarees",
      image: "https://images.unsplash.com/photo-1610030469621-bd4ddc830ace?w=400&h=500&fit=crop",
      description: "Luxurious silk sarees for special occasions",
      count: "200+ Designs"
    },
    {
      name: "Cotton Sarees",
      image: "https://images.unsplash.com/photo-1506629905607-84c84b32eb42?w=400&h=500&fit=crop",
      description: "Comfortable cotton sarees for daily wear",
      count: "150+ Designs"
    },
    {
      name: "Designer Collection",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
      description: "Contemporary designs by renowned designers",
      count: "100+ Designs"
    },
    {
      name: "Bridal Sarees",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=500&fit=crop",
      description: "Exquisite bridal collection for your big day",
      count: "80+ Designs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <Link to="/products">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Chaitanya Sarees?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the finest quality, authentic designs, and exceptional service 
              that has made us India's trusted saree destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of sarees, from traditional silk to contemporary designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-red-600 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Link to="/products">
                    <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      View Collection
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                review: "Absolutely stunning sarees! The quality is exceptional and the designs are breathtaking. Will definitely shop again.",
                location: "Mumbai"
              },
              {
                name: "Anjali Reddy",
                rating: 5,
                review: "Perfect bridal collection. Got my wedding saree from here and received countless compliments. Highly recommended!",
                location: "Hyderabad"
              },
              {
                name: "Meera Patel",
                rating: 5,
                review: "Great variety and excellent customer service. The silk sarees are authentic and beautifully crafted.",
                location: "Delhi"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Saree?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Browse our complete collection or visit our showroom for a personalized experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Browse Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Visit Showroom
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
