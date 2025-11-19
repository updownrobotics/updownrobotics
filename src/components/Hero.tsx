import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import robotOffice from "@/assets/robot-office.png";
import { Zap } from "lucide-react";
import { useParallaxMotion, useSimpleParallax } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

export const Hero = () => {
  const background = useSimpleParallax(0.382);
  const image = useParallaxMotion({ speed: 0.618 });
  const text = useSimpleParallax(0.236);
  const card = useParallaxMotion({ speed: 0.5 });
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-phi-4 pt-phi-7 pb-phi-8 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <motion.div 
        ref={background.ref}
        style={{ y: background.y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary)/0.15),transparent_50%)]" />
      </motion.div>
      
      <div className="container mx-auto relative z-10 max-w-phi-content">
        <div className="space-y-phi-5">
          <motion.div 
            ref={text.ref}
            style={{ y: text.y }}
            className="text-center space-y-phi-4 animate-fade-in"
          >
            <div className="inline-block px-phi-3 py-phi-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-accent font-semibold text-phi-sm md:text-phi-base">ROBOTS-AS-A-SERVICE</span>
            </div>
            
            <h1 className="text-phi-5xl md:text-phi-6xl lg:text-phi-7xl font-heading font-bold leading-tight">
              India's First 5-in-1 <span className="gradient-heading">Intelligent Cleaning Robot</span> 
              <span className="text-electric-cyan"> — Coming Soon</span>
            </h1>
            
            <p className="text-phi-lg md:text-phi-xl text-muted-foreground max-w-phi-content mx-auto">
              <strong className="text-foreground">Manual version launching soon</strong> • Autonomous AMR version in final-stage development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-phi-3 justify-center">
              <a href="/pilot-program">
                <Button size="lg" className="text-phi-lg px-phi-5 bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50 transition-all">
                  Join Pilot Program
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="text-phi-lg px-phi-5 border-primary/50 hover:bg-primary/10">
                  Get Early Updates
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            ref={image.ref}
            style={{ y: image.y, scale: image.scale, animationDelay: '0.2s' }}
            className="relative animate-fade-in max-w-phi-content mx-auto"
          >
            <AspectRatio ratio={1.618}>
              <img 
                src={robotOffice} 
                alt="UpDown Intelligent Cleaning Robot" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary/20" 
              />
              <div className="absolute top-phi-3 right-phi-3 flex items-center gap-phi-2 px-phi-3 py-phi-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full">
                <div className="w-phi-2 h-phi-2 bg-primary rounded-full animate-pulse" />
                <span className="text-phi-sm font-accent font-semibold text-primary">ACTIVE</span>
              </div>
            </AspectRatio>
          </motion.div>
        </div>

        <motion.div 
          ref={card.ref}
          style={{ y: card.y, scale: card.scale, opacity: card.opacity, animationDelay: '0.4s' }}
          className="mt-phi-8 mb-phi-6 text-center max-w-phi-content mx-auto animate-fade-in relative z-20"
        >
          <div className="p-phi-5 bg-background border border-border rounded-2xl shadow-lg shadow-primary/30">
            <Zap className="w-phi-5 h-phi-5 text-primary mx-auto mb-phi-3" />
            <p className="text-phi-lg md:text-phi-xl text-foreground leading-relaxed">
              UpDown Robotics builds intelligent cleaning systems optimized for India's <strong className="text-primary">apartments, commercial buildings, malls, tech parks, hotels, and hospitals</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
