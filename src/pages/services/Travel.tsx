import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Globe, Users, Calendar, MapPin, Plane } from "lucide-react";
import travelIcon from "@/assets/travel-icon.jpg";

const Travel = () => {
  const services = [
    {
      title: "Vacation Planning",
      description: "Customized vacation packages for individuals and families",
      icon: Calendar,
      features: ["Personalized itineraries", "Accommodation booking", "Activity planning", "Travel insurance"]
    },
    {
      title: "Group Tours",
      description: "Organized tours for groups and organizations",
      icon: Users,
      features: ["Corporate retreats", "School trips", "Church tours", "Special interest groups"]
    },
    {
      title: "Holiday Packages",
      description: "All-inclusive holiday packages to top destinations",
      icon: Plane,
      features: ["Beach holidays", "Safari adventures", "City breaks", "Cultural tours"]
    },
    {
      title: "Travel Consultation",
      description: "Expert advice for all your travel needs",
      icon: Globe,
      features: ["Destination guidance", "Budget planning", "Travel documentation", "Local insights"]
    }
  ];

  const destinations = [
    { name: "Victoria Falls", type: "Adventure", discount: "20% Off" },
    { name: "Hwange National Park", type: "Safari", discount: "15% Off" },
    { name: "Eastern Highlands", type: "Nature", discount: "20% Off" },
    { name: "Kariba", type: "Leisure", discount: "15% Off" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Discount up to 20% on Bookings
              </Badge>
              <h1 className="text-5xl font-heading">Pacewood Travel & Tours</h1>
              <p className="text-xl opacity-90">
                Discover Zimbabwe and beyond with our expertly crafted travel packages. 
                From safari adventures to cultural experiences, we make travel dreams come true.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Your Vacation Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="http://www.pacewood.com" target="_blank" rel="noopener noreferrer">
                    Online Booking
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={travelIcon} 
                alt="Pacewood Travel & Tours"
                className="w-full max-w-md rounded-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-subheading mb-2">Limited Time Offer</h2>
          <p className="text-lg">Up to 20% discount on all travel bookings - Book now and save!</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Our Travel Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel solutions for all your adventure needs
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

      {/* Popular Destinations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Popular Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore Zimbabwe's most beautiful destinations with special discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-subheading text-primary">
                      {destination.name}
                    </CardTitle>
                    <Badge variant="outline">{destination.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{destination.type} Package</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Why Travel with Us?</h2>
              <p className="text-lg text-muted-foreground">
                With years of experience in Zimbabwe's tourism industry, we offer:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">Local Expertise</h3>
                    <p className="text-muted-foreground text-sm">Deep knowledge of Zimbabwe's hidden gems and popular attractions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">Competitive Pricing</h3>
                    <p className="text-muted-foreground text-sm">Best value packages with discounts up to 20%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">24/7 Support</h3>
                    <p className="text-muted-foreground text-sm">Round-the-clock assistance during your travels</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Contact Our Travel Experts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div className="text-sm space-y-1">
                    <p>+263772348529</p>
                    <p>+263780033624</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-accent" />
                  <span className="text-sm">www.pacewood.com</span>
                </div>
                <div className="space-y-2">
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/contact">Plan My Trip</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="http://www.pacewood.com" target="_blank" rel="noopener noreferrer">
                      Online Booking
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;