import { Link } from 'react-router-dom';
import { Users, Award, Globe, Heart, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Import Button
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const milestones = [
    { year: "1985", event: "Chaitanya Sarees founded by Mr. Rajesh Chaitanya with a vision for quality." },
    { year: "1992", event: "Opened first flagship retail showroom in the heart of Mumbai." },
    { year: "2000", event: "Expanded operations to 5 major cities across India, building a loyal clientele." },
    { year: "2010", event: "Launched our online presence, bringing Chaitanya Sarees to a global audience." },
    { year: "2015", event: "Celebrated serving over 50,000 satisfied customers worldwide." },
    { year: "2020", event: "Introduced sustainable and eco-friendly manufacturing practices." },
    { year: "2024", event: "Recognized as a leading saree retailer with over 25 exclusive showrooms." }
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Passion for Craft",
      description: "Every saree is a testament to our dedication, woven with love and meticulous attention."
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Client Dedication",
      description: "Your trust and satisfaction are the cornerstones of our enduring relationships."
    },
    {
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Unwavering Quality",
      description: "Committed to delivering only authentic, premium sarees that stand the test of time."
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: "Cultural Stewardship",
      description: "Preserving and promoting the rich tapestry of traditional Indian textile artistry."
    }
  ];

  const stats = [
    { number: "35+", label: "Years of Excellence" },
    { number: "50,000+", label: "Discerning Patrons" },
    { number: "25+", label: "Exclusive Showrooms" },
    { number: "1000+", label: "Unique Saree Designs" }
  ];

  const team = [
    {
      name: "Mr. Rajesh Chaitanya",
      position: "Founder & Chairman",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=300&fit=crop&crop=face&auto=format&q=75", // Placeholder
      description: "A visionary leader with over three decades of profound experience in the textile industry."
    },
    {
      name: "Mrs. Priya Chaitanya",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face&auto=format&q=75", // Placeholder
      description: "An expert curator blending traditional designs with sophisticated modern aesthetics."
    },
    {
      name: "Mr. Arjun Chaitanya",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop&crop=face&auto=format&q=75", // Placeholder
      description: "Spearheading digital transformation and strategic global expansion."
    },
    {
      name: "Ms. Kavya Sharma",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1610030469621-bd4ddc830ace?w=300&h=300&fit=crop&crop=face&auto=format&q=75", // Placeholder
      description: "Over 20 years of invaluable experience in innovative saree design and curation."
    }
  ];

  // Common section title styling
  const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-secondary max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );


  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-muted flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">Our Enduring Legacy</h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
            For over three decades, Chaitanya Sarees has been synonymous with preserving tradition, crafting elegance,
            and empowering through the timeless beauty of the Indian saree.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="bg-card border-border rounded-sm shadow-md p-8 md:p-10">
              <div className="flex items-start mb-5"> {/* Changed to items-start */}
                <Target className="w-10 h-10 text-accent mr-5 flex-shrink-0" />
                <h2 className="text-3xl font-serif font-semibold text-primary">Our Mission</h2>
              </div>
              <p className="text-base text-secondary leading-relaxed">
                To preserve and promote the rich heritage of Indian textile art while
                making exquisite sarees accessible globally. We are committed to supporting
                traditional artisans and bringing their timeless craftsmanship to the modern world.
              </p>
            </Card>

            <Card className="bg-card border-border rounded-sm shadow-md p-8 md:p-10">
              <div className="flex items-start mb-5"> {/* Changed to items-start */}
                <Eye className="w-10 h-10 text-accent mr-5 flex-shrink-0" />
                <h2 className="text-3xl font-serif font-semibold text-primary">Our Vision</h2>
              </div>
              <p className="text-base text-secondary leading-relaxed">
                To be the world's most trusted and beloved brand for authentic
                Indian sarees, bridging traditional craftsmanship with contemporary
                style, and empowering every individual to embrace their cultural heritage
                with pride and elegance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Journey in Numbers" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card border border-border rounded-sm shadow-sm">
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-base font-sans text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Journey Through Time" subtitle="From a cherished family business to India's leading saree connoisseur." />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-start ${ index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right' }`}>
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-8' : 'ml-8 order-last'}`}>
                    <Card className="bg-card border-border rounded-sm shadow-md p-6">
                      <h3 className="text-xl font-serif font-semibold text-primary mb-2">{milestone.year}</h3>
                      <p className="text-sm text-secondary">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="w-5 h-5 bg-accent rounded-full border-4 border-background shadow-md z-10 absolute left-1/2 transform -translate-x-1/2"></div>
                 {/* Spacer div removed, positioning handled by parent flex and margins */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Values" subtitle="The guiding principles that illuminate our path and define our commitment." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm">
                <div className="flex justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-secondary">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Leadership" subtitle="The passionate visionaries steering Chaitanya Sarees towards new horizons." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-card p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-muted" // Increased size and added border
                />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{member.position}</p>
                <p className="text-xs text-secondary">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Become Part of Our Legacy
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Explore our exquisite collections and experience the Chaitanya difference. <br className="hidden sm:block" /> Your journey into timeless elegance begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" variant="default" className="bg-background hover:bg-background/90 text-foreground text-base px-10 py-6 rounded-sm">
                Explore Collections
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent-foreground/50 text-accent-foreground hover:bg-accent-foreground hover:text-accent text-base px-10 py-6 rounded-sm">
                Contact Our Atelier
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;