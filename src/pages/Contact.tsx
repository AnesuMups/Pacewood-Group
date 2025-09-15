import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Ready to discuss your project? Get in touch with our team for personalized service and expert consultation.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading text-primary mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help with all your business needs. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-subheading text-primary mb-2">Office Address</h3>
                        <p className="text-muted-foreground">1 McIntosh Road, Hatfield, Harare, Zimbabwe</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-subheading text-primary mb-2">Phone Numbers</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>+263772348529</p>
                          <p>+263780033624</p>
                          <p>+263775694916</p>
                          <p>+263716090950</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-subheading text-primary mb-2">Email</h3>
                        <p className="text-muted-foreground">info@pacewood.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-subheading text-primary mb-2">Business Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+263..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="Events, Travel, Real Estate, Clothing"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-primary mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Visit our office in Hatfield, Harare for in-person consultations
            </p>
          </div>
          
          <div className="bg-background rounded-lg shadow-card p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <MapPin className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-subheading text-primary">Office Location</h3>
              <p className="text-muted-foreground">
                1 McIntosh Road, Hatfield, Harare, Zimbabwe
              </p>
              <p className="text-sm text-muted-foreground">
                Google Maps integration can be added here for precise location details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;