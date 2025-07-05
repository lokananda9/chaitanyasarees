import { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, ChevronDown } from 'lucide-react'; // Added ChevronDown
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from "@/components/ui/checkbox"; // Added Checkbox
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Added Accordion
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // Keep list view for future if needed
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Sarees', count: 530 },
    { id: 'silk', name: 'Silk Sarees', count: 200 },
    { id: 'cotton', name: 'Cotton Sarees', count: 150 },
    { id: 'designer', name: 'Designer Collection', count: 100 },
    { id: 'bridal', name: 'Bridal Sarees', count: 80 }
  ];

  const products = [
    {
      id: 1,
      name: "Royal Kanjivaram Silk Saree",
      category: "silk",
      price: 8999,
      originalPrice: 12999,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1610030469621-bd4ddc830ace?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "Bestseller",
      colors: ["Red", "Gold", "Maroon"],
      fabric: "Pure Silk",
      work: "Zari Work"
    },
    {
      id: 2,
      name: "Elegant Cotton Handloom Saree",
      category: "cotton",
      price: 2499,
      originalPrice: 3499,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506629905607-84c84b32eb42?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "New Arrival",
      colors: ["Blue", "White", "Green"],
      fabric: "Cotton",
      work: "Block Print"
    },
    {
      id: 3,
      name: "Designer Georgette Saree",
      category: "designer",
      price: 5999,
      originalPrice: 8999,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "Limited Edition",
      colors: ["Pink", "Purple", "Coral"],
      fabric: "Georgette",
      work: "Embroidery"
    },
    {
      id: 4,
      name: "Bridal Heavy Work Saree",
      category: "bridal",
      price: 15999,
      originalPrice: 22999,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "Premium",
      colors: ["Red", "Maroon", "Gold"],
      fabric: "Net",
      work: "Heavy Embroidery"
    },
    {
      id: 5,
      name: "Traditional Banarasi Silk",
      category: "silk",
      price: 6999,
      originalPrice: 9999,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "",
      colors: ["Gold", "Red", "Orange"],
      fabric: "Banarasi Silk",
      work: "Brocade Work"
    },
    {
      id: 6,
      name: "Modern Printed Cotton Saree",
      category: "cotton",
      price: 1899,
      originalPrice: 2699,
      rating: 4.5,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop&q=80", // Updated image URL
      badge: "On Sale", // Changed badge text slightly
      colors: ["Multi", "Blue", "Pink"],
      fabric: "Cotton",
      work: "Digital Print"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeStyle = (badge: string) => { // Updated badge styling
    switch (badge) {
      case 'Bestseller': return 'bg-accent text-accent-foreground';
      case 'New Arrival': return 'bg-primary text-primary-foreground';
      case 'Limited Edition': return 'bg-secondary text-secondary-foreground';
      case 'Premium': return 'bg-foreground text-background';
      case 'On Sale': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group bg-card border-border rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="relative h-96 w-full overflow-hidden"> {/* Fixed height image container */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {product.badge && (
          <Badge className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-semibold ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </Badge>
        )}
        {/* Subtle hover actions - Example: Add to Wishlist */}
        <Button variant="ghost" size="icon" className="absolute top-3 right-3 h-8 w-8 bg-card/70 hover:bg-card text-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart size={16} />
        </Button>
      </div>
      <CardContent className="p-5 flex flex-col flex-grow"> {/* Increased padding */}
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors truncate">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <p className="font-sans text-lg font-medium text-primary">₹{product.price.toLocaleString()}</p>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        {/* <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Star size={14} className="fill-accent text-accent mr-1" />
          <span>{product.rating} ({product.reviews} reviews)</span>
        </div> */}
        <p className="font-sans text-xs text-secondary mb-1">Fabric: {product.fabric}</p>
        <p className="font-sans text-xs text-secondary mb-4">Work: {product.work}</p>

        <Button variant="outline" className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-sm text-sm">
          View Details
          {/* <ShoppingCart size={16} className="ml-2" /> */}
        </Button>
      </CardContent>
    </Card>
  );

  // Dummy data for filters - replace with actual logic later
  const priceRanges = ["Under ₹2,000", "₹2,000 - ₹5,000", "₹5,000 - ₹10,000", "Above ₹10,000"];
  const fabricTypes = ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Net', 'Linen', 'Organza'];


  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">Our Saree Collection</h1>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Discover an exquisite array of handcrafted sarees, each a testament to timeless tradition and artistry.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-8">
            <Card className="bg-card border-border rounded-sm shadow-sm p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Categories</h3>
              <ul className="space-y-1.5">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-secondary hover:bg-muted hover:text-primary'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs text-muted-foreground">({category.count})</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-card border-border rounded-sm shadow-sm p-6">
              <Accordion type="multiple" defaultValue={['price', 'fabric']} className="w-full">
                <AccordionItem value="price">
                  <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:no-underline py-3">Price Range</AccordionTrigger>
                  <AccordionContent className="pt-3 space-y-2.5">
                    {priceRanges.map(range => (
                      <label key={range} className="flex items-center space-x-2.5 font-sans text-sm text-secondary hover:text-primary cursor-pointer">
                        <Checkbox id={`price-${range}`} className="rounded-[2px] border-secondary data-[state=checked]:bg-primary data-[state=checked]:border-primary"/>
                        <span>{range}</span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fabric">
                  <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:no-underline py-3">Fabric Type</AccordionTrigger>
                  <AccordionContent className="pt-3 space-y-2.5">
                    {fabricTypes.map(fabric => (
                       <label key={fabric} className="flex items-center space-x-2.5 font-sans text-sm text-secondary hover:text-primary cursor-pointer">
                        <Checkbox id={`fabric-${fabric}`} className="rounded-[2px] border-secondary data-[state=checked]:bg-primary data-[state=checked]:border-primary"/>
                        <span>{fabric}</span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 p-4 bg-card border border-border rounded-sm shadow-sm">
              <div className="relative flex-1 w-full sm:w-auto sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search sarees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-sm text-sm h-10" // Adjusted input style
                />
              </div>
              
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-44 rounded-sm text-sm h-10"> {/* Adjusted select style */}
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* View mode toggle can be added back if list view is implemented */}
                {/* <div className="hidden sm:flex border border-border rounded-sm"> ... </div> */}
              </div>
            </div>

            {/* Products Grid */}
            <div className="mb-4">
              <p className="text-sm text-secondary">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== 'all' && (
                  <span className="font-medium text-foreground"> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
              </p>
            </div>

            <div className={`grid gap-x-6 gap-y-8 ${ // Adjusted gap
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' // Responsive columns
                : 'grid-cols-1' // List view (not styled yet)
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 md:mt-12">
              <div className="flex space-x-1.5"> {/* Reduced space */}
                <Button variant="outline" size="sm" disabled className="rounded-sm text-xs px-3">Previous</Button>
                <Button variant="default" size="sm" className="rounded-sm text-xs px-4 bg-primary hover:bg-primary/90">1</Button>
                <Button variant="outline" size="sm" className="rounded-sm text-xs px-4">2</Button>
                <Button variant="outline" size="sm" className="rounded-sm text-xs px-4">3</Button>
                <Button variant="outline" size="sm" className="rounded-sm text-xs px-3">Next</Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;