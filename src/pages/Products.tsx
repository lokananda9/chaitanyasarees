import { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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
      image: "https://images.unsplash.com/photo-1610030469621-bd4ddc830ace?w=400&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1506629905607-84c84b32eb42?w=400&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
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
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
      badge: "Sale",
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

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-green-100 text-green-800';
      case 'New Arrival': return 'bg-blue-100 text-blue-800';
      case 'Limited Edition': return 'bg-purple-100 text-purple-800';
      case 'Premium': return 'bg-yellow-100 text-yellow-800';
      case 'Sale': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          {product.badge && (
            <Badge className={getBadgeColor(product.badge)}>
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary" className="rounded-full p-2">
            <Heart size={16} />
          </Button>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews} reviews)</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold text-red-600">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          <span className="text-sm text-green-600 font-medium">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
          </span>
        </div>
        <div className="text-sm text-gray-600">
          <p><span className="font-medium">Fabric:</span> {product.fabric}</p>
          <p><span className="font-medium">Work:</span> {product.work}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Saree Collection</h1>
          <p className="text-xl text-red-100">
            Discover over 500+ exquisite sarees from traditional to contemporary designs
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Filter by Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under ₹2,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹2,000 - ₹5,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹5,000 - ₹10,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Above ₹10,000</span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Fabric Type</h4>
                <div className="space-y-2">
                  {['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Net'].map(fabric => (
                    <label key={fabric} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{fabric}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search sarees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid size={16} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {selectedCategory !== 'all' && (
                  <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default" className="bg-red-600 hover:bg-red-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;