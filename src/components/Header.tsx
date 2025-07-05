import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Business Portal', path: '/business-portal' },
  ];

  return (
    <header className="bg-background shadow-md border-b border-border sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-5"> {/* Increased padding slightly */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            {/* Optional: Simple placeholder for a more refined logo mark later */}
            {/* <div className="w-8 h-8 bg-primary rounded-sm mr-2 group-hover:bg-accent transition-colors"></div> */}
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                Chaitanya Sarees
              </h1>
              <p className="text-xs font-sans text-muted-foreground group-hover:text-accent transition-colors">
                Elegance Redefined
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6"> {/* Reduced space slightly */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm font-medium transition-colors duration-300 pb-1 ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary hover:border-b-2 hover:border-primary/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-3 rounded-md font-sans text-base transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;