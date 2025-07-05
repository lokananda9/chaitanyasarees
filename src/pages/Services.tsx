import { Link } from 'react-router-dom'; // Added Link for CTA
import { Truck, Shield, Palette, Users, Headphones, RotateCcw, ScissorsIcon, CalendarDays, CheckCircle2 } from 'lucide-react'; // Updated icons
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle'; // Import SectionTitle

const Services = () => {
  const mainServices = [
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Personalized Retail Experience",
      description: "Discover an exquisite collection of sarees with dedicated styling consultation and a bespoke shopping journey.",
      features: ["Extensive collection of 500+ unique designs", "Expert styling and trend consultation", "Personal shopping appointments available", "Precise size and fit guidance"]
    },
    {
      icon: <Truck className="w-12 h-12 text-accent" />,
      title: "Wholesale & Distribution",
      description: "Seamless bulk ordering solutions for retailers and distributors across India, ensuring quality and reliability.",
      features: ["Competitive wholesale pricing tiers", "Flexible minimum order quantities (starting 50 pieces)", "Efficient pan-India logistics network", "Exclusive credit facilities for empaneled dealers"]
    },
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Bespoke Design Services",
      description: "Collaborate with our master designers to create unique, custom sarees for your most cherished occasions.",
      features: ["In-depth personal designer consultation", "Customizable color palettes and fabric selection", "Development of unique patterns and motifs", "Specialized bridal collection customization"]
    },
    {
      icon: <CalendarDays className="w-12 h-12 text-accent" />, // Updated icon
      title: "Premium Saree Rentals",
      description: "Access our curated collection of premium and designer sarees for your special events and occasions.",
      features: ["Exclusive designer sarees for rent", "Curated wedding and party wear collections", "Professional dry-cleaning and maintenance included", "Flexible rental durations with convenient terms"]
    }
  ];

  const additionalServices = [
    {
      icon: <ScissorsIcon className="w-10 h-10 text-accent" />, // Updated icon
      title: "Expert Alterations",
      description: "Our skilled tailors provide meticulous alteration services for a flawless and comfortable fit."
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Authenticity Guarantee",
      description: "We assure 100% authentic handlooms and materials, backed by our stringent quality checks."
    },
    {
      icon: <Truck className="w-10 h-10 text-accent" />,
      title: "Complimentary Shipping",
      description: "Enjoy free, insured shipping on all domestic orders exceeding a specified value."
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-accent" />,
      title: "Hassle-Free Returns",
      description: "A straightforward 7-day return and exchange policy for your complete peace of mind."
    },
    {
      icon: <Headphones className="w-10 h-10 text-accent" />, // Updated icon
      title: "Dedicated Client Support",
      description: "Our client relations team is available around the clock to assist with any queries."
    },
    {
      icon: <Palette className="w-10 h-10 text-accent" />,
      title: "Color & Fabric Consultation",
      description: "Expert advice on color palettes and fabric choices to complement your style and occasion."
    }
  ];

  const pricing = [
    {
      category: "Artisanal Cotton Sarees",
      priceRange: "₹2,500 - ₹8,000",
      features: ["Premium handloom cotton", "Authentic block prints & weaves", "Ideal for daily & semi-formal wear", "Breathable, comfortable fabric"]
    },
    {
      category: "Regal Silk Sarees",
      priceRange: "₹7,000 - ₹45,000",
      features: ["Pure silk (Kanjivaram, Banarasi, etc.)", "Intricate traditional designs", "Exquisite Zari and embroidery work", "Perfect for weddings & grand occasions"]
    },
    {
      category: "Designer Collection",
      priceRange: "₹12,000 - ₹75,000+",
      features: ["Contemporary & fusion designs", "Luxurious premium fabrics", "Exclusive patterns & embellishments", "Often limited edition pieces"]
    },
    {
      category: "Bridal Masterpieces",
      priceRange: "₹25,000 - ₹2,00,000+",
      features: ["Opulent embroidery & craftsmanship", "Finest silks, velvets, and nets", "Bespoke customization available", "Complete bridal trousseau consultation"]
    }
  ];

  const processSteps = [
      { step: "01", title: "Initial Consultation", description: "We begin by understanding your unique needs, preferences, and the occasion." },
      { step: "02", title: "Curated Selection", description: "Explore our vast collection or discuss bespoke design possibilities with our experts." },
      { step: "03", title: "Personalization & Crafting", description: "Your chosen saree is customized or crafted with meticulous attention to detail by our artisans." },
      { step: "04", title: "Quality Assurance & Delivery", description: "Rigorous quality checks followed by secure, timely delivery to your preferred location." }
    ];


  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-3">Our Bespoke Services</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            At Chaitanya Sarees, we offer a comprehensive suite of services tailored to provide an unparalleled saree experience, from selection to aftercare.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Core Offerings" subtitle="Discover the foundational services that define the Chaitanya Sarees experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {mainServices.map((service) => (
              <Card key={service.title} className="bg-card border-border rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <div className="flex items-start space-x-5 mb-5">
                    <div className="flex-shrink-0 mt-1">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-base text-secondary leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 pl-0"> {/* Removed left padding for custom bullet */}
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" /> {/* Updated bullet */}
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

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Value-Added Benefits" subtitle="Enhancing your experience with services designed for your utmost convenience and satisfaction." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <Card key={service.title} className="text-center bg-card p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm">
                <div className="flex justify-center mb-5">{service.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-secondary">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Investment Guide" subtitle="A transparent overview of our pricing, reflecting the quality and craftsmanship inherent in every Chaitanya Saree." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((category) => (
              <Card key={category.category} className="bg-card border-border rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">{category.category}</h3>
                <p className="font-sans text-2xl font-bold text-accent mb-4">{category.priceRange}</p>
                <ul className="space-y-2 text-sm text-secondary flex-grow">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Seamless Process" subtitle="A glimpse into our client-centric approach, ensuring a delightful journey from consultation to delivery." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((processItem) => (
              <div key={processItem.step} className="text-center p-6 bg-card border border-border rounded-sm shadow-sm">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-serif font-bold mx-auto mb-5">
                  {processItem.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{processItem.title}</h3>
                <p className="text-sm text-secondary">{processItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Experience Unmatched Elegance</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Allow us to assist you in finding or creating the saree of your dreams. <br className="hidden sm:block" />
            Connect with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-6 rounded-sm">
                Inquire Now
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-10 py-6 rounded-sm">
                Explore Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;