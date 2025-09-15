import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mic, Camera, Utensils, Truck } from "lucide-react";
import eventsIcon from "@/assets/events-icon.jpg";

const Events = () => {
  const services = [
    {
      title: "PA System Hire & Sales",
      description: "Professional sound systems for any size event",
      icon: Mic,
      features: ["High-quality speakers", "Wireless microphones", "Mixing consoles", "Technical support"]
    },
    {
      title: "Video & Photography",
      description: "Capture your special moments professionally",
      icon: Camera,
      features: ["4K video recording", "Professional photography", "Live streaming", "Post-production editing"]
    },
    {
      title: "Catering Services",
      description: "Delicious meals for your events",
      icon: Utensils,
      features: ["Custom menus", "Professional chefs", "Dietary accommodations", "Full service setup"]
    },
    {
      title: "Transport & Logistics",
      description: "Complete event transportation solutions",
      icon: Truck,
      features: ["Equipment delivery", "Guest transportation", "Setup & breakdown", "Roadshow trucks"]
    }
  ];

  const products = [
    { name: "Speakers", price: "From $200", description: "Professional PA speakers" },
    { name: "Amplifiers", price: "From $150", description: "High-power amplifiers" },
    { name: "Mixers", price: "From $100", description: "Audio mixing consoles" },
    { name: "Keyboards", price: "From $200", description: "Electronic keyboards" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Special Offer: 30% Off Selected Equipment
              </Badge>
              <h1 className="text-5xl font-heading">Pacewood Events</h1>
              <p className="text-xl opacity-90">
                Complete event solutions from PA systems to catering. We make your events memorable 
                with professional equipment and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/shop">View Equipment</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={eventsIcon} 
                alt="Pacewood Events"
                className="w-full max-w-md rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Our Event Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a successful event, from sound to logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl font-subheading text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Store */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Equipment Store</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purchase or rent professional audio equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-subheading text-primary">
                    {product.name}
                  </CardTitle>
                  <Badge variant="outline">{product.price}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link to="/contact">Order Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Complete Event Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Beyond equipment rental, we provide comprehensive event services including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-subheading text-primary">Setup Services</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Tent installation</li>
                    <li>• Chair arrangement</li>
                    <li>• Stage setup</li>
                    <li>• Lighting design</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-subheading text-primary">Support Services</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Technical support</li>
                    <li>• Event coordination</li>
                    <li>• Decoration services</li>
                    <li>• Cleanup services</li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm">Granary Park Phase 4 Shops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div className="text-sm space-y-1">
                    <p>+263772348529</p>
                    <p>+263780033624</p>
                    <p>+263775694916</p>
                  </div>
                </div>
                <Button variant="primary" className="w-full" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;