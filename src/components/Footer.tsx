import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="UpDown Robotics Logo" className="h-16 w-auto" />
              <h3 className="text-2xl font-bold">
                <span className="text-primary">UpDown</span> Robotics
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              From Cleaning to Autonomous Living — We're Building India's Robotic Future.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contact@updownrobotics.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">RaaS Model</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">R&D Lab</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pilot Program</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border space-y-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated on the latest in robotics automation and RaaS innovation.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-card border-border focus:border-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 UpDown Robotics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
