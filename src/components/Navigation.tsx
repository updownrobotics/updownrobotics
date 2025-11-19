import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Technology", path: "/technology" },
  { name: "R&D Progress", path: "/rd-progress" },
  { name: "Vision & Roadmap", path: "/vision" },
  { name: "Pilot Program", path: "/pilot-program" },
  { name: "Investors", path: "/investors" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === path.slice(1);
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const targetId = path.slice(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', path);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled || !isHomePage
          ? "bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <img 
              src={logo} 
              alt="UpDown Robotics Logo" 
              className="h-10 md:h-12 w-auto animate-float animate-glow-pulse group-hover:scale-110 transition-transform duration-phi" 
            />
            <div className="flex flex-col leading-none">
              <span className={cn(
                "text-xs md:text-sm lg:text-base font-heading font-bold whitespace-nowrap transition-colors duration-200",
                scrolled || !isHomePage ? "text-foreground" : "text-white"
              )}>
                UpDown
              </span>
              <span className={cn(
                "text-xs md:text-sm lg:text-base font-heading font-bold whitespace-nowrap transition-colors duration-200",
                scrolled || !isHomePage ? "text-foreground" : "text-white"
              )}>
                Robotics
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu: ≥1440px with 32px spacing, 1024-1439px with tighter spacing */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-4 lg:gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isPilotProgram = item.name === "Pilot Program";
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={cn(
                    "relative group whitespace-nowrap transition-all duration-150",
                    "text-[11px] lg:text-xs xl:text-sm font-medium",
                    "px-2 lg:px-3 py-2",
                    isPilotProgram && "bg-primary text-white rounded-md px-4 hover:bg-primary/90",
                    !isPilotProgram && (isActive(item.path) 
                      ? "text-primary" 
                      : scrolled || !isHomePage ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
                    )
                  )}
                >
                  {item.name}
                  {!isPilotProgram && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-[15%] w-[70%] h-0.5 bg-primary transition-all duration-150",
                        isActive(item.path) 
                          ? "opacity-100 scale-x-100" 
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Tablet & Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "transition-colors duration-200",
                  scrolled || !isHomePage ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[320px] bg-white border-l border-gray-200"
            >
              <div className="flex flex-col space-y-2 mt-8">
                {/* Pilot Program and Contact at top */}
                {["Pilot Program", "Contact"].map((name) => {
                  const item = navItems.find(i => i.name === name);
                  if (!item) return null;
                  const isPilotProgram = name === "Pilot Program";
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => {
                        handleNavClick(e, item.path);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "px-4 py-3 text-base font-medium transition-all duration-150 rounded-lg min-h-[44px] flex items-center",
                        isPilotProgram 
                          ? "bg-primary text-white hover:bg-primary/90"
                          : isActive(item.path)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* Separator */}
                <div className="h-px bg-gray-200 my-2" />
                
                {/* Rest of menu items */}
                {navItems.filter(item => item.name !== "Pilot Program" && item.name !== "Contact").map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => {
                      handleNavClick(e, item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-all duration-150 rounded-lg min-h-[44px] flex items-center",
                      isActive(item.path) 
                        ? "text-primary bg-primary/10" 
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
