const robotDelivery = "/images_opt/assets/robot-delivery.webp";
const robotCorridor = "/images_opt/assets/robot-corridor.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const timeline = [
  { year: "2025", milestone: "Prototype & Pilot Testing" },
  { year: "2026", milestone: "Commercial RaaS Launch" },
  { year: "2027", milestone: "Multi-Floor Fleet AI Control" },
  { year: "2028", milestone: "Cleaning + Delivery Hybrid Robot" },
  { year: "2030", milestone: "Fully Autonomous Building Ecosystem" }
];

export const VisionRoadmap = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Automation Beyond <span className="text-primary">Cleaning.</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-phi-4">
            <AspectRatio ratio={1.618}>
              <img 
                src={robotCorridor} 
                alt="Vision of autonomous robots" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </AspectRatio>
            
            <div className="space-y-phi-2">
              <h3 className="text-phi-2xl font-bold">Our Vision</h3>
              <p className="text-phi-lg text-muted-foreground leading-relaxed">
                We envision autonomous cleaning fleets replacing manual labor — maintaining 
                spotless environments while enabling humans to focus on higher-value work.
              </p>
            </div>
          </div>
          
          <div className="space-y-phi-4">
            <AspectRatio ratio={1.618}>
              <img 
                src={robotDelivery} 
                alt="Future delivery capabilities" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </AspectRatio>
            
            <div className="space-y-phi-2">
              <h3 className="text-phi-2xl font-bold">Delivery Add-On Evolution</h3>
              <p className="text-phi-lg text-muted-foreground leading-relaxed">
                Our next evolution turns each robot into a delivery unit capable of transporting 
                items floor-to-floor using smart trays and secure compartments.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Development <span className="text-primary">Roadmap</span></h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                      <p className="text-3xl font-bold text-primary mb-2">{item.year}</p>
                      <p className="text-lg">{item.milestone}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-pulse-slow">
                Join the Automation Revolution
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
