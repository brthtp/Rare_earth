import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  HandHeart, 
  Shield, 
  TrendingUp, 
  Key, 
  FileText,
  Users,
  Globe
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Property Sourcing",
      description: "Exclusive access to off-market properties and pre-launch opportunities through our global network.",
      features: ["Off-market listings", "Pre-launch access", "Global network"]
    },
    {
      icon: HandHeart,
      title: "Concierge Service",
      description: "White-glove service from initial consultation to post-sale support with dedicated relationship managers.",
      features: ["Personal relationship manager", "24/7 support", "Post-sale services"]
    },
    {
      icon: Shield,
      title: "Due Diligence",
      description: "Comprehensive property analysis, legal verification, and market assessment by industry experts.",
      features: ["Legal verification", "Market analysis", "Risk assessment"]
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment guidance for property portfolios with focus on appreciation and ROI optimization.",
      features: ["Portfolio strategy", "ROI optimization", "Market insights"]
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Premium property management services for investment properties with regular reporting and maintenance.",
      features: ["Maintenance oversight", "Tenant management", "Regular reporting"]
    },
    {
      icon: FileText,
      title: "Legal Support",
      description: "Expert legal assistance for property transactions, documentation, and regulatory compliance.",
      features: ["Transaction support", "Documentation", "Compliance"]
    },
    {
      icon: Users,
      title: "Family Office Services",
      description: "Specialized services for family offices including multi-generational property planning and succession.",
      features: ["Succession planning", "Multi-generational advice", "Family office support"]
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Global property services spanning major international markets with local expertise and insights.",
      features: ["International markets", "Local expertise", "Cross-border transactions"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-elegant text-sm">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-card-foreground mb-6">
            Exceptional Service
            <span className="block text-gradient-gold">Every Step</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Our comprehensive suite of services ensures every aspect of your luxury property 
            journey is handled with the utmost care and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover-lift bg-background border-border/50 shadow-luxury">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-luxury">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-luxury font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-elegant mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        <span className="font-elegant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-luxury border border-border/50">
            <h3 className="text-2xl font-luxury font-semibold text-foreground mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-muted-foreground font-elegant mb-6 max-w-xl mx-auto">
              Let our experts guide you through your luxury property journey with personalized service and unmatched expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 font-elegant font-medium shadow-gold hover:shadow-luxury transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8">
                Schedule Consultation
              </button>
              <button className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground font-elegant font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;