import { Cpu, FlaskConical, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";

const labs = [
  {
    icon: Cpu,
    title: "Hardware Design Lab",
    description: "3D CAD prototyping and mechanical engineering innovation"
  },
  {
    icon: FlaskConical,
    title: "AI Simulation Arena",
    description: "Virtual testing environments for navigation algorithms"
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous quality assurance and coverage analysis"
  }
];

export const RDLab = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-graphite-light to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, transparent 1px, transparent 40px)`,
          opacity: 0.1
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where Machines Learn to <span className="text-primary">Clean.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our R&D lab is the birthplace of innovation, where robotics meets artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {labs.map((lab, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <lab.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{lab.title}</h3>
                <p className="text-muted-foreground">{lab.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            Partner in Research
            <span className="ml-2 text-primary group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
