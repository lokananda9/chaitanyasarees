import { Users, Award, Globe, Heart, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const milestones = [
    { year: "1985", event: "Company founded by Mr. Rajesh Chaitanya" },
    { year: "1992", event: "Opened first retail showroom in Mumbai" },
    { year: "2000", event: "Expanded to 5 cities across India" },
    { year: "2010", event: "Launched online presence" },
    { year: "2015", event: "Achieved 50,000+ satisfied customers" },
    { year: "2020", event: "Introduced sustainable manufacturing" },
    { year: "2024", event: "Leading saree retailer with 25+ showrooms" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Passion for Excellence",
      description: "Every saree is crafted with love and attention to detail"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Customer First",
      description: "Your satisfaction and trust drive everything we do"
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Quality Assurance",
      description: "Committed to delivering only authentic, premium products"
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Cultural Heritage",
      description: "Preserving and promoting traditional Indian textile art"
    }
  ];

  const stats = [
    { number: "35+", label: "Years of Excellence" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "25+", label: "Showrooms" },
    { number: "500+", label: "Saree Designs" }
  ];

  const team = [
    {
      name: "Mr. Rajesh Chaitanya",
      position: "Founder & Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 35+ years in textile industry"
    },
    {
      name: "Mrs. Priya Chaitanya",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=300&h=300&fit=crop&crop=face",
      description: "Expert in traditional designs and modern aesthetics"
    },
    {
      name: "Mr. Arjun Chaitanya",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Leading digital transformation and expansion"
    },
    {
      name: "Ms. Kavya Sharma",
      position: "Design Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "20+ years of experience in saree design"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-red-100">
              Three decades of preserving tradition, crafting elegance, 
              and empowering women through the timeless beauty of sarees.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To preserve and promote the rich heritage of Indian textile art while 
                  making exquisite sarees accessible to women across the globe. We are 
                  committed to supporting traditional artisans and bringing their 
                  craftsmanship to the modern world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's most trusted and beloved brand for authentic 
                  Indian sarees, bridging traditional craftsmanship with contemporary 
                  style, and empowering every woman to embrace her cultural heritage 
                  with pride and elegance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small family business to India's leading saree retailer
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-2">{milestone.year}</h3>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Chaitanya Sarees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Join Our Journey
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Be part of our story and discover the perfect saree for every occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Explore Our Collection
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Visit Our Showroom
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;