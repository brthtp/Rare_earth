import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Home, Star } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-elegant text-sm">Exclusive Properties for Discerning Clients</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6 leading-tight">
            Luxury Beyond
            <span className="block text-gradient-gold">Expectations</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 font-elegant mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary properties crafted for high net worth individuals who demand nothing but perfection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="luxury" size="lg" className="group">
              Explore Properties
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-luxury" size="lg">
              Schedule Private Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Home className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-luxury font-bold text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground font-elegant">Luxury Properties</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-luxury font-bold text-foreground">25</span>
              </div>
              <p className="text-muted-foreground font-elegant">Prime Locations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-luxury font-bold text-foreground">98%</span>
              </div>
              <p className="text-muted-foreground font-elegant">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;