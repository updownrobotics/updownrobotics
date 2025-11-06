import { Button } from "@/components/ui/button";
import robotApartment from "@/assets/robot-apartment.png";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15),transparent_70%)]" />
      
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
              <Button size="lg" className="group text-lg">
                Explore RaaS Model
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                See It in Action
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
            <img 
              src={robotApartment} 
              alt="UpDown Robot in apartment corridor" 
              className="relative rounded-2xl shadow-2xl animate-float"
            />
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
