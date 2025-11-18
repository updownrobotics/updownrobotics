import { Button } from "@/components/ui/button";
import robotOffice from "@/assets/robot-office.png";
import { Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-deep-black via-background to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-accent font-semibold text-sm md:text-base">ROBOTS-AS-A-SERVICE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              India's First 5-in-1 <span className="text-primary">Intelligent Cleaning Robot</span> 
              <span className="text-electric-cyan"> — Coming Soon</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              <strong className="text-foreground">Manual version launching soon</strong> • Autonomous AMR version in final-stage development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/pilot-program">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50 transition-all">
                  Join Pilot Program
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                  Get Early Updates
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-slow" />
            <div className="relative">
              <img src={robotOffice} alt="UpDown Intelligent Cleaning Robot" className="relative rounded-2xl shadow-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/30 rounded-full animate-glow-pulse pointer-events-none" />
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-accent font-semibold text-primary">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              UpDown Robotics builds intelligent cleaning systems optimized for India's <strong className="text-primary">apartments, commercial buildings, malls, tech parks, hotels, and hospitals</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
