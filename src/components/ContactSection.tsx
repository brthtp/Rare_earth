import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8884150025"],
      description: "Available 24/7 for our valued clients"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["contact@rareearth.com", "sales@rareearth.com"],
      description: "Response within 2 hours guaranteed"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["2nd Floor, 'Ritwik Plaza, 2386/2387, 60 Feet Rd,", "next to Cauvery Public School, E Block,", "Sahakar Nagar, Bengaluru, Karnataka 560092"],
      description: "Visit our luxury showroom by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"],
      description: "After-hours appointments available"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-6">
            Contact
            <span className="block text-gradient-gold">Rare Earth</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Get in touch with our luxury property experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-luxury font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover-lift bg-card border-border/50 shadow-luxury">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-luxury font-semibold text-foreground mb-2">
                            {info.title}
                          </h4>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-foreground font-elegant">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground font-elegant">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 bg-card rounded-lg border border-border/50">
              <h4 className="font-luxury font-semibold text-foreground mb-4">
                Why Choose Us?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-luxury font-bold text-accent mb-1">2hrs</div>
                  <div className="text-sm text-muted-foreground font-elegant">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-luxury font-bold text-accent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground font-elegant">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-luxury font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-elegant">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-luxury font-bold text-accent mb-1">25+</div>
                  <div className="text-sm text-muted-foreground font-elegant">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-luxury border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-luxury font-semibold text-foreground mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-elegant">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-elegant">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-elegant">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email address"
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-elegant">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="font-elegant">Property Interest</Label>
                    <select 
                      id="interest"
                      className="w-full px-3 py-2 border border-border/50 rounded-md bg-background text-foreground focus:border-accent focus:outline-none font-elegant"
                    >
                      <option value="">Select your interest</option>
                      <option value="buying">Buying</option>
                      <option value="selling">Selling</option>
                      <option value="investing">Investment Opportunities</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-elegant">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your luxury property requirements..."
                      rows={4}
                      className="border-border/50 focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button variant="luxury" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center font-elegant">
                    By sending this message, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;