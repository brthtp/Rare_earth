import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const LuxuryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Properties", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Book Appointment", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-luxury">
              <h1 className="text-2xl font-semibold text-foreground">RARE EARTH</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-luxury font-elegant"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@rareearth.com</span>
              </div>
            </div>
            <Button variant="luxury" size="sm">
              Schedule Viewing
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-luxury"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-luxury font-elegant py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@rareearth.com</span>
                  </div>
                </div>
                <Button variant="luxury" size="sm" className="mt-4 w-full">
                  Schedule Viewing
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LuxuryNavbar;