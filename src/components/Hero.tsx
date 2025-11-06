import { Button } from "@/components/ui/button";
import robotApartment from "@/assets/robot-apartment.png";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--accent)/0.15),transparent_70%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal to-transparent animate-circuit-line" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal to-transparent animate-circuit-line" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-teal to-transparent animate-circuit-line" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full border border-primary/20">
              <p className="text-sm text-primary font-medium">Robots-as-a-Service</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Smarter Movement.
              <br />
              <span className="text-primary">Cleaner Future.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              AI-powered autonomous cleaning robots built for apartments, offices, malls, and hospitals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#raas">
                <Button size="lg" className="group text-lg animate-pulse-slow">
                  Explore RaaS Model
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#technology">
                <Button size="lg" variant="outline" className="text-lg">
                  See It in Action
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,hsl(var(--primary)/0.1)_50%,transparent_100%)] animate-pulse-slow" />
            <img 
              src={robotApartment} 
              alt="UpDown Robot in apartment corridor" 
              className="relative rounded-2xl shadow-2xl shadow-primary/20 animate-float"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-2xl rounded-full" />
            <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <p className="text-sm font-medium">Autonomous Navigation Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
