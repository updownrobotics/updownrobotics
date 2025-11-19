import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle, Zap, Brain, Shield, Gauge, AlertCircle } from "lucide-react";
import robotOffice from "@/assets/robot-office.png";
import robotMall from "@/assets/robot-mall.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

const version1Features = [
  { icon: Zap, text: "5-stage cleaning: sweep, scrub, mop, dry, disinfect" },
  { icon: CheckCircle, text: "Fully powered manual operation" },
  { icon: Gauge, text: "High-efficiency motor system" },
  { icon: Shield, text: "Built for Indian environments" }
];

const version2Features = [
  { icon: Brain, text: "SLAM-based autonomous navigation" },
  { icon: CheckCircle, text: "Obstacle detection & avoidance" },
  { icon: Zap, text: "Autonomous docking & charging" },
  { icon: Shield, text: "Multi-floor intelligence" }
];

const Products = () => {
  const version1Reveal = useScrollReveal();
  const version2Reveal = useScrollReveal();
  const disclaimerReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Navigation />
      
      <section className="pt-phi-8 pb-phi-6 px-phi-4">
        <div className="container mx-auto max-w-phi-content">
          <motion.div 
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="text-center mb-phi-6 animate-fade-in px-phi-2"
          >
            <h1 className="text-phi-3xl sm:text-phi-4xl md:text-phi-5xl lg:text-phi-7xl font-heading font-bold mb-phi-4">
              Next-Generation <span className="gradient-heading">Cleaning Robots</span>
            </h1>
            <p className="text-phi-base sm:text-phi-lg md:text-phi-xl text-muted-foreground max-w-phi-content mx-auto">
              Two revolutionary products designed for India's commercial and residential spaces
            </p>
          </motion.div>

          {/* Version 1 - Manual Robot */}
          <div ref={version1Reveal.ref} className={`mb-phi-8 transition-all duration-700 ${version1Reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-phi-5 items-center">
              <div className="order-2 lg:order-1 space-y-phi-4">
                <div className="inline-block px-phi-3 py-phi-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary font-accent font-semibold text-phi-sm">LAUNCHING SOON</span>
                </div>
                
                <h2 className="text-phi-2xl sm:text-phi-3xl md:text-phi-4xl lg:text-phi-5xl font-heading font-bold">
                  5-in-1 Smart Cleaning Robot
                </h2>
                
                <p className="text-phi-base sm:text-phi-lg text-muted-foreground">
                  Our fully powered manual cleaning robot brings industrial-grade cleaning power 
                  to apartments, offices, and commercial spaces. Five integrated cleaning stages 
                  deliver spotless results with unmatched efficiency.
                </p>

                <div className="space-y-phi-3">
                  {version1Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-phi-2">
                      <feature.icon className="w-phi-4 h-phi-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground text-phi-base">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-phi-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50 transition-all text-phi-base px-phi-5">
                    Pre-Register for Launch
                  </Button>
                </div>
              </div>

              <div 
                className="order-1 lg:order-2 relative"
              >
                <AspectRatio ratio={1.618}>
                  <img 
                    src={robotOffice} 
                    alt="5-in-1 Smart Cleaning Robot" 
                    className="rounded-2xl shadow-2xl w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Version 2 - Autonomous Robot */}
          <div ref={version2Reveal.ref} className={`transition-all duration-700 ${version2Reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-phi-5 items-center">
              <div 
                className="relative"
              >
                <AspectRatio ratio={1.618}>
                  <img 
                    src={robotMall} 
                    alt="Autonomous Cleaning Robot" 
                    className="rounded-2xl shadow-2xl w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>

              <div className="space-y-phi-4">
                <div className="inline-block px-phi-3 py-phi-2 bg-accent/10 border border-accent/30 rounded-full">
                  <span className="text-accent font-accent font-semibold text-phi-sm">FINAL-STAGE R&D</span>
                </div>
                
                <h2 className="text-phi-4xl md:text-phi-5xl font-heading font-bold">
                  Autonomous Cleaning Robot
                </h2>
                
                <p className="text-phi-lg text-muted-foreground">
                  Our cutting-edge autonomous robot leverages validated AMR technology with 
                  advanced SLAM navigation, obstacle detection, and multi-floor intelligence. 
                  The future of hands-free cleaning.
                </p>

                <div className="space-y-phi-3">
                  {version2Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-phi-2">
                      <feature.icon className="w-phi-4 h-phi-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground text-phi-base">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-phi-4">
                  <Button size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10 hover:text-accent transition-all text-phi-base px-phi-5">
                    Apply for Early Access Pilot
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div ref={disclaimerReveal.ref} className={`mt-phi-7 transition-all duration-700 ${disclaimerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-phi-2 p-phi-4 bg-muted/20 border border-border rounded-lg">
              <AlertCircle className="w-phi-4 h-phi-4 text-muted-foreground flex-shrink-0" />
              <p className="text-phi-sm text-muted-foreground italic text-center">
                All product visuals are R&D concepts and not final hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;