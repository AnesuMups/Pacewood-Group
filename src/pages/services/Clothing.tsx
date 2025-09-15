import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, MapPin, Shirt, GraduationCap, Building, Home } from "lucide-react";
import clothingIcon from "@/assets/clothing-icon.jpg";

const Clothing = () => {
  const services = [
    {
      title: "School Uniforms",
      description: "High-quality uniforms for all educational levels",
      icon: GraduationCap,
      features: ["Durable materials", "Custom sizing", "School logo embroidery", "Bulk discounts"]
    },
    {
      title: "Corporate Wear",
      description: "Professional clothing for businesses and organizations",
      icon: Building,
      features: ["Custom branding", "Professional designs", "Various styles", "Volume pricing"]
    },
    {
      title: "Custom T-shirts",
      description: "Personalized t-shirts for events and promotional use",
      icon: Shirt,
      features: ["Custom printing", "Various colors", "Quality fabrics", "Quick turnaround"]
    },
    {
      title: "House Decorations",
      description: "Textile decorations and home furnishing items",
      icon: Home,
      features: ["Curtains & drapes", "Cushion covers", "Table linens", "Custom designs"]
    }
  ];

  const products = [
    { 
      category: "School Uniforms", 
      description: "Complete uniform sets for primary and secondary schools",
      sizes: "All sizes available"
    },
    { 
      category: "Corporate Shirts", 
      description: "Professional shirts with company branding",
      sizes: "XS to 5XL"
    },
    { 
      category: "Promotional T-shirts", 
      description: "Custom branded t-shirts for events and marketing",
      sizes: "All sizes"
    },
    { 
      category: "Work Uniforms", 
      description: "Durable uniforms for various industries",
      sizes: "Standard & custom"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Custom Manufacturing
              </Badge>
              <h1 className="text-5xl font-heading">Pacewood Clothing</h1>
              <p className="text-xl opacity-90">
                Professional clothing solutions for schools, businesses, and individuals. 
                From school uniforms to corporate wear, we deliver quality and style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">View Catalog</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={clothingIcon} 
                alt="Pacewood Clothing"
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
            <h2 className="text-4xl font-heading text-primary mb-4">Our Clothing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional clothing manufacturing and customization services
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

      {/* Product Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our range of professional clothing and textile products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-subheading text-primary">
                    {product.category}
                  </CardTitle>
                  <Badge variant="outline">{product.sizes}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <Button variant="primary" size="sm" className="w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Our Manufacturing Process</h2>
              <p className="text-lg text-muted-foreground">
                From design consultation to final delivery, we ensure quality at every step.
              </p>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">1</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2 text-primary">Consultation</h3>
                    <p className="text-muted-foreground">We discuss your requirements and provide design recommendations</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">2</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2 text-primary">Design & Sampling</h3>
                    <p className="text-muted-foreground">Create designs and provide samples for approval</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">3</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2 text-primary">Production</h3>
                    <p className="text-muted-foreground">High-quality manufacturing using professional equipment</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-subheading">4</span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg mb-2 text-primary">Quality Control</h3>
                    <p className="text-muted-foreground">Thorough inspection before delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Why Choose Our Clothing Services?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      High-quality materials
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Custom designs available
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Competitive pricing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Fast turnaround times
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      Bulk order discounts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Factory Location</CardTitle>
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
                      <p>+263780033624</p>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/contact">Visit Our Factory</Link>
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

export default Clothing;