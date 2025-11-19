const robotMall = "/images_opt/assets/robot-mall.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Monitor, Battery, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Calendar,
    title: "Subscription Plans",
    description: "Flexible monthly and yearly robot rental options"
  },
  {
    icon: Monitor,
    title: "24×7 Monitoring Dashboard",
    description: "Real-time fleet management and performance analytics"
  },
  {
    icon: Battery,
    title: "Auto-Docking + Self-Charging",
    description: "Zero human intervention for power management"
  },
  {
    icon: Cloud,
    title: "Remote Diagnostics via Cloud AI",
    description: "Predictive maintenance and instant troubleshooting"
  }
];

export const RaaSModel = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <p className="text-sm text-primary font-medium">Revolutionary Business Model</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cleaning as a Service.
            <br />
            <span className="text-primary">Intelligence on Demand.</span>
          </h2>
        </div>
        
        <div className="mb-phi-6">
          <AspectRatio ratio={1.618}>
            <img 
              src={robotMall} 
              alt="UpDown Robot fleet in operation" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </AspectRatio>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="text-lg px-8">
            Book a Pilot Program
          </Button>
        </div>
      </div>
    </section>
  );
};
