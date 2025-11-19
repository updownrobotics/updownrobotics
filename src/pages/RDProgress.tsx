import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Map, Brain, Droplet, Gauge, CheckCircle2, Code2, Cpu } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import robotCorridor from "@/assets/robot-corridor.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const navigationFeatures = [
  { icon: Map, title: "SLAM Mapping", status: "Validated" },
  { icon: Brain, title: "Obstacle Detection", status: "Validated" },
  { icon: Gauge, title: "Path Planning", status: "Validated" },
  { icon: CheckCircle2, title: "AMR-level Precision", status: "Validated" }
];

const cleaningModules = [
  { name: "Sweeping Module", progress: 85 },
  { name: "Dual Scrubbing Plates", progress: 90 },
  { name: "Dynamic Water Control", progress: 80 },
  { name: "Rapid Drying System", progress: 75 },
  { name: "UV Disinfection Research", progress: 60 }
];

const engineeringStack = [
  { icon: Code2, title: "CAD Development", description: "Advanced mechanical design and prototyping" },
  { icon: Cpu, title: "Multi-Sensor Fusion", description: "LiDAR, cameras, and IMU integration" },
  { icon: Brain, title: "Real-time Autonomy Stack", description: "ROS-based navigation and control" },
  { icon: Gauge, title: "Early Field Tests", description: "Real-world validation in pilot sites" }
];

const RDProgress = () => {
  const navPlatformReveal = useScrollReveal();
  const cleaningModulesReveal = useScrollReveal();
  const engineeringReveal = useScrollReveal();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full mb-6">
              <span className="text-electric-cyan font-accent font-semibold">ENGINEERING IN MOTION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              UpDown Robotics <span className="gradient-heading">R&D Progress</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building India's first intelligent cleaning AMR from the ground up. 
              Here's where we are in our engineering journey.
            </p>
          </div>

          {/* Navigation Platform */}
          <div ref={navPlatformReveal.ref} className={`mb-24 transition-all duration-700 ${navPlatformReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Navigation Platform <span className="text-primary">(Validated)</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Our autonomous navigation system has been validated through extensive testing. 
                  The robot can now localize itself, map environments, and navigate with 
                  AMR-level precision.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {navigationFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card border border-primary/30 rounded-xl"
                    >
                      <feature.icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-heading font-bold mb-1">{feature.title}</h3>
                      <span className="text-sm text-primary font-accent">{feature.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <AspectRatio ratio={1.618}>
                  <img 
                    src={robotCorridor} 
                    alt="Navigation Testing" 
                    className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Cleaning Module R&D */}
          <div ref={cleaningModulesReveal.ref} className={`mb-24 transition-all duration-700 ${cleaningModulesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Cleaning Module <span className="text-electric-cyan">R&D</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {cleaningModules.map((module, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-heading font-bold">{module.name}</h3>
                    <span className="text-primary font-accent font-semibold">{module.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-electric-cyan transition-all duration-500"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Stack */}
          <div ref={engineeringReveal.ref} className={`transition-all duration-700 ${engineeringReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Engineering & <span className="text-primary">Software Stack</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringStack.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="mt-24 p-8 bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Current Development Phase
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're in the final stages of integrating all systems. Hardware and software 
              are coming together, with extensive field testing underway.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-accent font-semibold text-primary">Final Integration Phase</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RDProgress;