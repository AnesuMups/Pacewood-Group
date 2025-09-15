import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading text-primary">
              Pacewood Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium transition-colors hover:text-primary text-foreground">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-lg shadow-large border z-50">
                  <div className="py-2">
                    <Link
                      to="/services/events"
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      Events
                    </Link>
                    <Link
                      to="/services/travel"
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      Travel & Tours
                    </Link>
                    <Link
                      to="/services/realestate"
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      Real Estate
                    </Link>
                    <Link
                      to="/services/clothing"
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      Clothing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/shop" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/shop') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pl-4 space-y-2">
                <div className="font-medium text-muted-foreground">Services:</div>
                <Link
                  to="/services/events"
                  className="block pl-4 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  to="/services/travel"
                  className="block pl-4 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Travel & Tours
                </Link>
                <Link
                  to="/services/realestate"
                  className="block pl-4 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Real Estate
                </Link>
                <Link
                  to="/services/clothing"
                  className="block pl-4 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clothing
                </Link>
              </div>
              <Link 
                to="/shop" 
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/contact" 
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button variant="primary" asChild className="self-start">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;