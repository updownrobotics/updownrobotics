import { TrendingUp, DollarSign, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Building2,
    value: "$3B",
    label: "India's Facility Management Market",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "70%",
    label: "Cost Reduction vs Manual Labor",
    color: "text-primary"
  },
  {
    icon: DollarSign,
    value: "<18",
    label: "Months to ROI",
    color: "text-primary"
  }
];

export const Investors = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-graphite-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Invest in the Future of <span className="text-primary">RaaS.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us in revolutionizing India's $3 billion facility management automation sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8 bg-card rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-300">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  India's facility management sector is undergoing rapid automation. With 100+ target 
                  commercial complexes and high-rise residential buildings, UpDown Robotics is positioned 
                  to capture significant market share through our innovative RaaS model.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="/contact">
                  <Button size="lg" className="text-lg bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-accent shadow-lg shadow-accent/30 animate-pulse-slow">
                    Invest in the Future of RaaS
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="text-lg border-accent hover:bg-accent/10 hover:text-accent">
                  Download Pitch Deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
