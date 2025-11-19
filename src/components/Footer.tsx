import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="container mx-auto px-phi-4 py-phi-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-phi-5 mb-phi-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-phi-2 mb-phi-3">
              <img src={logo} alt="UpDown Robotics Logo" className="h-phi-6 w-auto" />
              <h3 className="text-phi-2xl font-bold">
                <span className="text-primary">UpDown</span> Robotics
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-phi-4">
              From Cleaning to Autonomous Living — We're Building India's Robotic Future.
            </p>
            <div className="space-y-phi-2">
              <div className="flex items-center gap-phi-2 text-phi-sm">
                <MapPin className="w-phi-3 h-phi-3 text-primary" />
                <span className="text-muted-foreground">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-phi-2 text-phi-sm">
                <Mail className="w-phi-3 h-phi-3 text-primary" />
                <span className="text-muted-foreground">contact@updownrobotics.com</span>
              </div>
              <div className="flex items-center gap-phi-2 text-phi-sm">
                <Phone className="w-phi-3 h-phi-3 text-primary" />
                <span className="text-muted-foreground">+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-phi-3 text-phi-lg">Solutions</h4>
            <ul className="space-y-phi-2">
              <li><Link to="/pilot-program" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Pilot Program</Link></li>
              <li><Link to="/technology" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/rd-progress" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">R&D Progress</Link></li>
              <li><Link to="/products" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-phi-3 text-phi-lg">Company</h4>
            <ul className="space-y-phi-2">
              <li><Link to="/about" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/investors" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Investors</Link></li>
              <li><Link to="/use-cases" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Use Cases</Link></li>
              <li><Link to="/contact" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-phi-5 border-t border-border space-y-phi-5">
          <div className="max-w-md">
            <h4 className="font-semibold mb-phi-3 text-phi-lg">Join Our Newsletter</h4>
            <p className="text-phi-sm text-muted-foreground mb-phi-3">
              Stay updated on the latest in robotics automation and RaaS innovation.
            </p>
            <div className="flex gap-phi-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border-border focus:border-primary text-phi-base"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-phi-sm">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-phi-3">
            <p className="text-phi-sm text-muted-foreground">
              © 2025 UpDown Robotics. All rights reserved.
            </p>
            <div className="flex gap-phi-4">
              <a href="#" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-phi-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
