import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Chaitanya Sarees</h3>
                <p className="text-sm text-gray-400">Elegance Redefined</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer and retailer of premium quality sarees, serving customers 
              across India with traditional and contemporary designs since 1985.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Our Collection</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/business-portal" className="text-gray-300 hover:text-white transition-colors">B2B Portal</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
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
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Textile Avenue,<br />
                    Silk Market, Mumbai - 400001<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-red-500" />
                <span className="text-gray-300">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-red-500" />
                <span className="text-gray-300">info@chaitanyasarees.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chaitanya Sarees. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;