import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "News & Media", href: "#news" },
    ],
    services: [
      { name: "Buy Properties", href: "#buy" },
      { name: "Sell Properties", href: "#sell" },
      { name: "Property Management", href: "#management" },
      { name: "Investment Advisory", href: "#advisory" },
    ],
    locations: [
      { name: "New York", href: "#ny" },
      { name: "Los Angeles", href: "#la" },
      { name: "Miami", href: "#miami" },
      { name: "London", href: "#london" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-luxury font-bold text-xl">P</span>
              </div>
              <div className="font-luxury">
                <h1 className="text-xl font-semibold text-card-foreground">Prestigious</h1>
                <p className="text-xs text-muted-foreground -mt-1">Properties</p>
              </div>
            </div>
            <p className="text-muted-foreground font-elegant mb-6 leading-relaxed">
              Redefining luxury real estate for discerning high net worth individuals. 
              Experience unparalleled elegance and sophistication in every property we present.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-elegant text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span className="font-elegant text-sm">contact@prestigious.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-elegant text-sm">123 Park Avenue, New York</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-luxury font-semibold text-card-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury font-elegant text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-luxury font-semibold text-card-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury font-elegant text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h3 className="font-luxury font-semibold text-card-foreground mb-4">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury font-elegant text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-luxury font-semibold text-card-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury font-elegant text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-luxury font-semibold text-card-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground font-elegant text-sm">
                Get exclusive access to new listings and market insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 border border-border/50 rounded-l-md bg-background text-foreground focus:border-accent focus:outline-none font-elegant"
              />
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 rounded-r-md font-elegant font-medium transition-luxury">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-muted-foreground font-elegant text-sm">
              © {currentYear} Prestigious Properties. All rights reserved. | Licensed Real Estate Broker
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-luxury"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;