import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading mb-6">About Pacewood Group</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A trusted partner in Zimbabwe, delivering excellence across events, travel, real estate, and clothing since our establishment.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Pacewood Group was founded with a vision to become Zimbabwe's premier diversified service provider. 
                Starting as a single-focus business, we have grown into a comprehensive group offering specialized 
                services across four key sectors.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a 
                deep understanding of our clients' evolving needs. Today, we stand as a testament to Zimbabwean 
                entrepreneurship and business excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-heading text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Successful Events</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-heading text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-heading text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Business Divisions</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-heading text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Delivering excellence in events, travel, real estate, and clothing services while 
                  setting the standard for quality and innovation in Zimbabwe's business landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Providing affordable, reliable, and innovative services in Zimbabwe and beyond, 
                  while building lasting relationships with our clients through exceptional service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Pacewood Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-heading text-accent-foreground">Q</span>
              </div>
              <h3 className="text-xl font-subheading text-primary">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, ensuring every service meets the highest standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-heading text-accent-foreground">R</span>
              </div>
              <h3 className="text-xl font-subheading text-primary">Reliability</h3>
              <p className="text-muted-foreground">
                Our clients can count on us to deliver consistently, on time, every time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-heading text-accent-foreground">I</span>
              </div>
              <h3 className="text-xl font-subheading text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our services to meet changing market demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;