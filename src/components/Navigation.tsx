import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Technology", path: "/#technology" },
  { name: "R&D Lab", path: "/#rdlab" },
  { name: "RaaS Model", path: "/#raas" },
  { name: "Vision & Roadmap", path: "/#vision" },
  { name: "Investors", path: "/#investors" },
  { name: "About Us", path: "/about" },
  { name: "Partners", path: "/partners" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === path.slice(1);
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,178,255,0.3)]" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="UpDown Robotics Logo" 
              className="h-16 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]" 
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative group",
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300",
                    isActive(item.path) 
                      ? "opacity-100 scale-x-100 shadow-[0_0_10px_rgba(0,178,255,0.8)]" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md border-l border-primary/20">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg relative",
                      isActive(item.path) 
                        ? "text-primary bg-primary/10 shadow-[0_0_10px_rgba(0,178,255,0.3)]" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
