import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
// Removed background hero image per request
import eventsIcon from "@/assets/events-icon.jpg";
import travelIcon from "@/assets/travel-icon.jpg";
import realestateIcon from "@/assets/realestate-icon.jpg";
import clothingIcon from "@/assets/clothing-icon.jpg";

const Index = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="relative min-h-[80vh] flex items-center"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <img 
                src="/2025_09_15_09_14_IMG_6693.JPG" 
                alt="Pacewood Group"
                className="mx-auto h-24 w-auto mb-2 object-contain"
                loading="eager"
                decoding="async"
              />
              <h1 className="text-5xl md:text-7xl font-heading leading-tight">
                Pacewood Group
              </h1>
              <p className="text-xl md:text-2xl font-subheading opacity-90">
                Your Trusted Partner in Events, Travel, Real Estate & Clothing
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services/events">Book Now</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-4 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center text-center">
            <Badge variant="secondary" className="px-4 py-2">
              30% Off Sound Systems
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              20% Off Travel Bookings
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Free Property Consultation
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across events, travel, real estate, and clothing to serve all your business and personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Events"
              description="Complete event solutions including PA systems, catering, and logistics."
              image={eventsIcon}
              link="/services/events"
              features={[
                "PA System Hire & Sales",
                "Video & Photography", 
                "Catering Services",
                "Tent & Chair Hire"
              ]}
            />
            <ServiceCard
              title="Travel & Tours"
              description="Vacation planning and group tours with up to 20% discount."
              image={travelIcon}
              link="/services/travel"
              features={[
                "Vacation Planning",
                "Group Tours",
                "Holiday Packages",
                "20% Discount Available"
              ]}
            />
            <ServiceCard
              title="Real Estate"
              description="Complete property services from buying to management."
              image={realestateIcon}
              link="/services/realestate"
              features={[
                "Home Buying & Selling",
                "Property Management",
                "Market Analysis",
                "Rental Services"
              ]}
            />
            <ServiceCard
              title="Clothing"
              description="Custom clothing solutions for schools and corporates."
              image={clothingIcon}
              link="/services/clothing"
              features={[
                "School Uniforms",
                "Corporate Wear",
                "Custom T-shirts",
                "House Decorations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-heading text-primary">
                Why Choose Pacewood Group?
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">1</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2">Comprehensive Solutions</h3>
                    <p className="text-muted-foreground">All your business needs under one roof - from events to real estate.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">2</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">Deep understanding of Zimbabwe market with years of experience.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">3</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2">Quality & Reliability</h3>
                    <p className="text-muted-foreground">Consistent quality and reliable service delivery across all divisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="mr-3 h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">1 McIntosh Road, Hatfield, Harare</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">+263772348529</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">info@pacewood.com</span>
                  </div>
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Contact us today for a free consultation and discover how Pacewood Group can help your business grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
