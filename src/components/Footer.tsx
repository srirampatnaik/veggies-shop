import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">FreshVeggies</h3>
            <p className="text-gray-300">
              Your trusted source for fresh, locally sourced vegetables delivered right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-gray-300">contact@freshveggies.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-gray-300">123 Veggie Street, Fresh City</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} FreshVeggies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;