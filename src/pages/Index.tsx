import { Link } from 'react-router-dom';
// Removed useState and useEffect for hero slideshow, will simplify for now
import { ArrowRight, Star, Users, Award, Truck, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Simplified hero data for a static hero section initially
const heroData = {
  title: "Timeless Elegance, Woven Anew",
  subtitle: "Discover our exclusive collection of handcrafted sarees, designed for the modern connoisseur.",
  image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1600&h=900&fit=crop&q=80", // Higher quality image
  cta: "Explore the Collection"
};

const Index = () => {
  // const [currentSlide, setCurrentSlide] = useState(0); // Removed for static hero

  // const heroSlides = [ ... ]; // Removed for static hero

  const features = [
    {
      icon: <Award className="w-10 h-10 text-accent" />, // Updated icon style
      title: "Premium Quality",
      description: "Finest fabrics and authentic craftsmanship since 1985."
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />, // Updated icon style
      title: "Artisanal Heritage", // Updated title
      description: "Celebrating generations of weavers and their timeless skill." // Updated description
    },
    {
      icon: <Truck className="w-10 h-10 text-accent" />, // Updated icon style
      title: "Global Shipping", // Updated title
      description: "Delivering elegance to your doorstep, worldwide." // Updated description
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />, // Updated icon style
      title: "Authenticity Assured", // Updated title
      description: "Genuine handlooms and materials, certified for your peace of mind." // Updated description
    }
  ];

  const productCategories = [
    {
      name: "Regal Silk Sarees", // Updated name
      image: "https://images.unsplash.com/photo-1610030469621-bd4ddc830ace?w=800&h=1000&fit=crop&q=80", // Higher quality image
      description: "Luxurious silk sarees for timeless special occasions.", // Updated description
      count: "200+ Designs"
    },
    {
      name: "Artisanal Cotton", // Updated name
      image: "https://images.unsplash.com/photo-1506629905607-84c84b32eb42?w=800&h=1000&fit=crop&q=80", // Higher quality image
      description: "Comfortable cotton sarees for refined daily elegance.", // Updated description
      count: "150+ Designs"
    },
    {
      name: "Designer Weaves", // Updated name
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop&q=80", // Higher quality image
      description: "Contemporary masterpieces by renowned designers.", // Updated description
      count: "100+ Designs"
    },
    {
      name: "Bridal Splendor", // Updated name
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=1000&fit=crop&q=80", // Higher quality image
      description: "Exquisite bridal collection to cherish for a lifetime.", // Updated description
      count: "80+ Designs"
    }
  ];

  // useEffect for slideshow removed for static hero

  return (
    <div className="min-h-screen bg-background text-foreground font-sans"> {/* Changed to bg-background */}
      <Header />
      
      {/* Hero Section - Simplified */}
      <section
        className="relative h-[75vh] min-h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroData.image})` }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {heroData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10">
              {heroData.subtitle}
            </p>
            <Link to="/products">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-6 rounded-sm"> {/* Updated button style */}
                {heroData.cta}
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted"> {/* Changed bg, increased padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              The Chaitanya Promise
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Experience the pinnacle of quality, artistry, and service that defines our legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-background p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm"> {/* Updated card style */}
                {/* CardContent is removed as padding is on Card now */}
                <div className="flex justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-background"> {/* Changed bg, increased padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Curated Collections
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Explore our diverse range of sarees, each telling a unique story of tradition and artistry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm bg-card"> {/* Updated card style */}
                <div className="relative h-96 overflow-hidden"> {/* Fixed height for image container */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Smoother scale
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" /> {/* Subtle gradient */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium"> {/* Updated badge style */}
                      {category.count}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"> {/* Larger heading */}
                    {category.name}
                  </h3>
                  <p className="text-sm text-secondary mb-4 h-16 overflow-hidden"> {/* Fixed height for description */}
                    {category.description}
                  </p>
                  <Link to="/products" className="w-full">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm text-sm"> {/* Updated button style */}
                      Explore Sarees
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted"> {/* Changed bg, increased padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Voices of Elegance
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Hear from our valued patrons who have embraced the Chaitanya experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap for lg */}
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                review: "The Kanjivaram I purchased is a masterpiece. The craftsmanship is beyond compare, and I received so many compliments. A true heirloom piece!",
                location: "Mumbai, India"
              },
              {
                name: "Anjali Reddy",
                rating: 5,
                review: "My bridal saree from Chaitanya was a dream come true. The attention to detail and personalized service made my special day even more memorable.",
                location: "Hyderabad, India"
              },
              {
                name: "Meera Patel",
                rating: 5,
                review: "I've been a loyal customer for years. The quality of their silk and cotton sarees is consistently excellent. Highly recommended for authentic weaves.",
                location: "Delhi, India"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 rounded-sm flex flex-col"> {/* Updated card style */}
                {/* CardContent is removed as padding is on Card now */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" /> // Updated star color
                  ))}
                </div>
                <p className="text-base text-secondary mb-6 italic flex-grow"> {/* Increased bottom margin */}
                  "{testimonial.review}"
                </p>
                <div className="mt-auto pt-4 border-t border-border"> {/* Pushes author to bottom */}
                  <p className="text-lg font-serif font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground"> {/* Changed bg and text color */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6"> {/* Increased bottom margin */}
            Begin Your Journey of Elegance
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto"> {/* Adjusted opacity and margin */}
            Discover the perfect saree that reflects your unique style and grace. <br className="hidden sm:block" />
            Our collections await your discerning eye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-6 rounded-sm"> {/* Updated button style */}
                Shop All Collections
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
               <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-10 py-6 rounded-sm"> {/* Updated button style */}
                Plan Your Visit
                <Heart className="ml-3 w-5 h-5" />
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
