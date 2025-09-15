import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

const ServiceCard = ({ title, description, image, link, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-subheading text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button variant="primary" size="lg" asChild className="w-full">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;