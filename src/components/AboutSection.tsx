import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      number: "25+",
      label: "Years of Excellence",
      description: "Decades of expertise in luxury real estate"
    },
    {
      icon: Users,
      number: "1000+",
      label: "HNI Clients Served",
      description: "Trusted by high net worth individuals globally"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Global Markets",
      description: "International presence across prime locations"
    },
    {
      icon: TrendingUp,
      number: "$5B+",
      label: "Properties Sold",
      description: "Total value of luxury properties transacted"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-6">
              About
              <span className="block text-gradient-gold">Rare Earth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-elegant mb-8 leading-relaxed">
              Premium luxury real estate for discerning clients. We specialize in exclusive 
              properties with exceptional quality and service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="lg">
                Our Story
              </Button>
              <Button variant="outline-luxury" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="hover-lift bg-card border-border/50 shadow-luxury">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-luxury font-bold text-foreground mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="font-elegant font-semibold text-foreground mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-sm text-muted-foreground font-elegant">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;