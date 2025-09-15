import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading">Pacewood Group</h3>
            <p className="text-sm opacity-90">
              Your trusted partner in events, travel, real estate & clothing.
            </p>
            <div className="space-y-2 text-sm">
              <p>1 McIntosh Road, Hatfield, Harare</p>
              <p>+263772348529</p>
              <p>info@pacewood.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-subheading">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-subheading">Services</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/services/events" className="hover:text-accent transition-colors">Events</Link>
              <Link to="/services/travel" className="hover:text-accent transition-colors">Travel & Tours</Link>
              <Link to="/services/realestate" className="hover:text-accent transition-colors">Real Estate</Link>
              <Link to="/services/clothing" className="hover:text-accent transition-colors">Clothing</Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-subheading">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-primary-hover rounded-lg hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-hover rounded-lg hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-hover rounded-lg hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-hover mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Pacewood Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;