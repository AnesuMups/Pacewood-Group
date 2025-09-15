import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, MapPin, Home, TrendingUp, Users, Search } from "lucide-react";
import realestateIcon from "@/assets/realestate-icon.jpg";

const RealEstate = () => {
  const services = [
    {
      title: "Home Buying",
      description: "Find your perfect home with our expert guidance",
      icon: Home,
      features: ["Property search", "Market analysis", "Negotiation support", "Legal assistance"]
    },
    {
      title: "Home Selling",
      description: "Maximize your property value with professional marketing",
      icon: TrendingUp,
      features: ["Property valuation", "Professional photography", "Marketing strategy", "Buyer screening"]
    },
    {
      title: "Home Renting",
      description: "Quality rental properties for tenants and landlords",
      icon: Users,
      features: ["Tenant screening", "Lease agreements", "Property inspections", "Rent collection"]
    },
    {
      title: "Property Management",
      description: "Complete property management solutions",
      icon: Search,
      features: ["Maintenance coordination", "Tenant relations", "Financial reporting", "Property upkeep"]
    }
  ];

  const propertyTypes = [
    { type: "Residential Homes", description: "Family houses and apartments", available: "50+ listings" },
    { type: "Commercial Properties", description: "Office spaces and retail", available: "25+ listings" },
    { type: "Industrial Properties", description: "Warehouses and factories", available: "15+ listings" },
    { type: "Land & Plots", description: "Residential and commercial land", available: "30+ listings" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Free Property Consultation
              </Badge>
              <h1 className="text-5xl font-heading">Pacewood Real Estate</h1>
              <p className="text-xl opacity-90">
                Your trusted partner in Zimbabwe's real estate market. From buying your first home 
                to managing investment properties, we're here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">View Properties</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={realestateIcon} 
                alt="Pacewood Real Estate"
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
            <h2 className="text-4xl font-heading text-primary mb-4">Our Real Estate Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions for all your property needs
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

      {/* Property Types */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Property Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of properties across Harare and Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-subheading text-primary">
                    {property.type}
                  </CardTitle>
                  <Badge variant="outline">{property.available}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{property.description}</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link to="/contact">View Listings</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Market Analysis & Insights</h2>
              <p className="text-lg text-muted-foreground">
                Stay informed about Zimbabwe's property market with our expert analysis and insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">Market Trends</h3>
                    <p className="text-muted-foreground text-sm">Regular updates on property values and market movements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">Property Valuations</h3>
                    <p className="text-muted-foreground text-sm">Professional property assessments and valuations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-primary">Investment Advice</h3>
                    <p className="text-muted-foreground text-sm">Expert guidance for property investment decisions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Why Choose Pacewood Real Estate?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Local market expertise
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Professional network
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Transparent processes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Competitive rates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Full-service support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm">1 McIntosh Road, Hatfield, Harare</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div className="text-sm space-y-1">
                      <p>+263772348529</p>
                      <p>+263716090950</p>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;