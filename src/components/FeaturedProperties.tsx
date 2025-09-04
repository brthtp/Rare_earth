import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Manhattan Penthouse",
      location: "Upper East Side, New York",
      price: "$12,500,000",
      image: property1,
      beds: 4,
      baths: 5,
      sqft: "3,200",
      description: "Breathtaking city views from this exquisite penthouse featuring floor-to-ceiling windows and premium finishes."
    },
    {
      id: 2,
      title: "Oceanfront Villa",
      location: "Malibu, California",
      price: "$18,750,000",
      image: property2,
      beds: 6,
      baths: 7,
      sqft: "5,800",
      description: "Contemporary waterfront masterpiece with infinity pool and panoramic ocean views on private coastline."
    },
    {
      id: 3,
      title: "Historic Mansion",
      location: "Beverly Hills, California",
      price: "$22,000,000",
      image: property3,
      beds: 8,
      baths: 10,
      sqft: "8,500",
      description: "Timeless elegance meets modern luxury in this meticulously restored estate with manicured gardens."
    }
  ];

  return (
    <section id="properties" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-card-foreground mb-6">
            Featured <span className="text-gradient-gold">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Discover our handpicked selection of the world's most prestigious properties, 
            each offering unparalleled luxury and sophistication.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group hover-lift overflow-hidden border-border/50 bg-card shadow-luxury">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-elegant">{property.location}</span>
                </div>
                
                <h3 className="text-2xl font-luxury font-semibold text-card-foreground mb-3">
                  {property.title}
                </h3>
                
                <p className="text-muted-foreground font-elegant mb-4 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.sqft} sq ft</span>
                  </div>
                </div>
                
                <Button variant="ghost-luxury" className="w-full group">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury" size="lg">
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;