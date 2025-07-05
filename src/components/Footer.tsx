import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground font-sans"> {/* Changed background and default text color */}
      <div className="container mx-auto px-4 py-16"> {/* Increased padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap */}
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1"> {/* Allow company info to span more on smaller screens if needed */}
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-primary mb-1">Chaitanya Sarees</h3>
              <p className="text-xs text-secondary">Elegance Redefined</p>
            </div>
            <p className="text-sm text-secondary mb-6"> {/* Increased bottom margin */}
              Leading manufacturer and retailer of premium quality sarees, serving customers 
              across India with traditional and contemporary designs since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-5">Quick Links</h4> {/* Increased bottom margin */}
            <ul className="space-y-3"> {/* Increased spacing */}
              <li><Link to="/" className="text-sm text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-secondary hover:text-primary transition-colors">Our Collection</Link></li>
              <li><Link to="/about" className="text-sm text-secondary hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-secondary hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/business-portal" className="text-sm text-secondary hover:text-primary transition-colors">B2B Portal</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-5">Our Products</h4> {/* Increased bottom margin */}
            <ul className="space-y-3 text-sm text-secondary"> {/* Increased spacing */}
              <li>Silk Sarees</li>
              <li>Cotton Sarees</li>
              <li>Designer Sarees</li>
              <li>Bridal Collection</li>
              <li>Festive Wear</li>
              <li>Custom Designs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-foreground mb-5">Contact Info</h4> {/* Increased bottom margin */}
            <div className="space-y-4 text-sm"> {/* Increased spacing */}
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" /> {/* Changed icon color & size */}
                <div className="text-secondary">
                  <p>
                    123 Textile Avenue, Silk Market,<br />
                    Mumbai - 400001, Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" /> {/* Changed icon color & size */}
                <span className="text-secondary hover:text-primary transition-colors cursor-pointer">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" /> {/* Changed icon color & size */}
                <span className="text-secondary hover:text-primary transition-colors cursor-pointer">info@chaitanyasarees.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"> {/* Increased margin top */}
          <p className="text-xs text-muted-foreground"> {/* Changed text size & color */}
            © {new Date().getFullYear()} Chaitanya Sarees. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0"> {/* Reduced space */}
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;