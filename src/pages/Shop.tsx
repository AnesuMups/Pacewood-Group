import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ShoppingCart, Phone } from "lucide-react";

const Shop = () => {
  const products = [
    {
      category: "Speakers",
      price: "From $200",
      description: "High-quality PA speakers for events and venues",
      features: ["Professional grade", "Various sizes", "Rental & sales"]
    },
    {
      category: "Amplifiers", 
      price: "From $150",
      description: "Powerful amplifiers for sound reinforcement",
      features: ["Multiple channels", "Digital & analog", "Professional series"]
    },
    {
      category: "Mixers",
      price: "From $100", 
      description: "Audio mixing consoles for professional sound",
      features: ["Multi-channel", "Digital effects", "USB connectivity"]
    },
    {
      category: "Keyboards",
      price: "From $200",
      description: "Electronic keyboards for music production",
      features: ["Weighted keys", "Built-in sounds", "MIDI compatible"]
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Special Offer: 30% Off Selected Items
            </Badge>
            <h1 className="text-5xl font-heading mb-6">Audio Equipment Store</h1>
            <p className="text-xl opacity-90">
              Professional sound equipment for events, venues, and personal use. 
              Quality products with expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Special Promotion */}
      <section className="py-8 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-subheading mb-2">Limited Time Offer</h2>
          <p className="text-lg">30% Off on Selected Sound Systems - Contact us for details!</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional audio equipment for all your sound needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-subheading text-primary">
                      {product.category}
                    </CardTitle>
                    <Badge variant="outline">{product.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/contact">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Order Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Visit Our Store</h2>
              <p className="text-lg text-muted-foreground">
                Located in Granary Park Phase 4 Shops, our store showcases the latest in 
                professional audio equipment. Our experienced staff can help you find the 
                perfect solution for your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">📍</span>
                  </div>
                  <span>Granary Park Phase 4 Shops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+263772348529 / +263780033624 / +263775694916</span>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Need Help Choosing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our audio experts are ready to help you select the right equipment 
                  for your specific needs and budget.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Free consultation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Equipment testing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Installation support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Warranty coverage
                  </li>
                </ul>
                <Button variant="primary" className="w-full" asChild>
                  <Link to="/contact">Contact Our Experts</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;