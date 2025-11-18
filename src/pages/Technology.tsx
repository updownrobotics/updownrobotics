import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Brain, Map, Droplet, Zap, Gauge, Cpu, Radio } from "lucide-react";
import robotOffice from "@/assets/robot-office.png";

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
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              The Technology Behind <span className="text-primary">Intelligent Cleaning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge robotics, AI, and mechanical engineering converge to create 
              India's most advanced cleaning solution
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-24 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={robotOffice} 
              alt="UpDown Robot Technology" 
              className="relative rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/30 rounded-full animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-primary/20 rounded-full animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="mt-24 grid lg:grid-cols-2 gap-12">
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