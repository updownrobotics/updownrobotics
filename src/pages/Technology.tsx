import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Brain, Map, Droplet, Zap, Gauge, Cpu, Radio } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import robotOffice from "@/assets/robot-office.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

const technologies = [
  {
    icon: Map,
    title: "AI & SLAM",
    description: "Simultaneous Localization and Mapping enables real-time environment understanding and autonomous navigation"
  },
  {
    icon: Cpu,
    title: "Sensor Fusion",
    description: "Multi-sensor integration combining LiDAR, cameras, and IMU for comprehensive environmental awareness"
  },
  {
    icon: Brain,
    title: "Navigation Intelligence",
    description: "Advanced path planning and obstacle avoidance powered by machine learning algorithms"
  },
  {
    icon: Droplet,
    title: "Cleaning Architecture",
    description: "5-stage integrated system: sweeping, scrubbing, mopping, drying, and disinfection"
  },
  {
    icon: Gauge,
    title: "Multi-Floor Logic",
    description: "Intelligent elevator integration and floor-mapping for seamless multi-level operations"
  },
  {
    icon: Radio,
    title: "Autonomous Docking",
    description: "Self-charging system with precision docking and automatic water tank management"
  }
];

const Technology = () => {
  const heroImageReveal = useScrollReveal();
  const techGridReveal = useScrollReveal();
  const specsReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="text-center mb-16 animate-fade-in px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              The Technology Behind <span className="gradient-heading">Intelligent Cleaning</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge robotics, AI, and mechanical engineering converge to create 
              India's most advanced cleaning solution
            </p>
          </motion.div>

          {/* Hero Image Section */}
          <div 
            className={`mb-24 relative transition-all duration-700 ${heroImageReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="max-w-4xl mx-auto">
              <AspectRatio ratio={1.618}>
                <img 
                  src={robotOffice} 
                  alt="UpDown Robot Technology" 
                  className="relative rounded-2xl shadow-2xl w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/30 rounded-full animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-primary/20 rounded-full animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Technology Grid */}
          <div ref={techGridReveal.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${techGridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-3">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>

                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-electric-cyan transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div ref={specsReveal.ref} className={`mt-24 grid lg:grid-cols-2 gap-12 transition-all duration-700 ${specsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Navigation <span className="text-primary">Precision</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Real-time Mapping:</strong> Updates environmental maps at 10Hz</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Obstacle Detection:</strong> 360° awareness with multi-sensor fusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Path Optimization:</strong> Dynamic route planning for efficiency</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Cleaning <span className="text-electric-cyan">Performance</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-electric-cyan mt-1 flex-shrink-0" />
                  <span><strong>5-Stage Process:</strong> Comprehensive cleaning in one pass</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-electric-cyan mt-1 flex-shrink-0" />
                  <span><strong>Water Management:</strong> Intelligent flow control and tank monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-electric-cyan mt-1 flex-shrink-0" />
                  <span><strong>Surface Adaptation:</strong> Auto-adjusts to tile, marble, and wood</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Technology;