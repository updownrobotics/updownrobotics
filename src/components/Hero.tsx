import { Button } from "@/components/ui/button";
import robotOffice from "@/assets/robot-office.png";
import { Zap } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

export const Hero = () => {
  const bgOffset = useParallax(0.3);
  const contentOffset = useParallax(0.15);
  const imageOffset = useParallax(0.5);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32 bg-gradient-to-b from-deep-black via-background to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transform: `translateY(${bgOffset}px)` }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.15),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto relative z-10" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className="space-y-12">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-accent font-semibold text-sm md:text-base">ROBOTS-AS-A-SERVICE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              India's First 5-in-1 <span className="gradient-heading">Intelligent Cleaning Robot</span> 
              <span className="text-electric-cyan"> — Coming Soon</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              <strong className="text-foreground">Manual version launching soon</strong> • Autonomous AMR version in final-stage development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          <div className="relative animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img src={robotOffice} alt="UpDown Intelligent Cleaning Robot" className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/20" />
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-accent font-semibold text-primary">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 mb-16 text-center max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 bg-card border border-border rounded-2xl shadow-lg shadow-primary/30">
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
