import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Brain, Shield, Gauge, AlertCircle } from "lucide-react";
import robotOffice from "@/assets/robot-office.png";
import robotMall from "@/assets/robot-mall.png";

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
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Next-Generation <span className="text-primary">Cleaning Robots</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two revolutionary products designed for India's commercial and residential spaces
            </p>
          </div>

          {/* Version 1 - Manual Robot */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary font-accent font-semibold">LAUNCHING SOON</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  5-in-1 Smart Cleaning Robot
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Our fully powered manual cleaning robot brings industrial-grade cleaning power 
                  to apartments, offices, and commercial spaces. Five integrated cleaning stages 
                  deliver spotless results with unmatched efficiency.
                </p>

                <div className="space-y-4">
                  {version1Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50 transition-all">
                    Pre-Register for Launch
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <img 
                  src={robotOffice} 
                  alt="5-in-1 Smart Cleaning Robot" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Version 2 - Autonomous Robot */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={robotMall} 
                  alt="Autonomous Cleaning Robot" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full">
                  <span className="text-electric-cyan font-accent font-semibold">FINAL-STAGE R&D</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold">
                  Autonomous Cleaning Robot
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Our AMR-based autonomous robot represents the future of facility management. 
                  Built on validated navigation technology, it operates independently across 
                  multiple floors with zero human intervention.
                </p>

                <div className="space-y-4">
                  {version2Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-6 h-6 text-electric-cyan mt-1 flex-shrink-0" />
                      <p className="text-foreground">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10"
                  >
                    Apply for Early Access Pilot
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 p-6 bg-card/50 border border-border rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              All product visuals are R&D concepts and not final hardware.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;