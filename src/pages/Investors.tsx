import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Code2, Layers, Globe } from "lucide-react";
import robotMall from "@/assets/robot-mall.png";

const highlights = [
  {
    icon: Globe,
    title: "Market Opportunity",
    description: "India's $3B+ facility management sector is ripe for automation. SEA expansion planned for 2028."
  },
  {
    icon: Target,
    title: "Deep-Tech Differentiation",
    description: "Proprietary SLAM navigation, multi-sensor fusion, and cleaning architecture built in-house."
  },
  {
    icon: Code2,
    title: "Engineering Foundation",
    description: "Strong R&D team with validated autonomous navigation and integrated cleaning systems."
  },
  {
    icon: Layers,
    title: "RaaS + SaaS Scalability",
    description: "Recurring revenue through Robot-as-a-Service and analytics platform subscriptions."
  }
];

const Investors = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Interested in Investing in India's <span className="text-primary">Robotics Future?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UpDown Robotics is building India's first intelligent indoor cleaning AMR platform. 
              We are open to strategic investors and technology partners.
            </p>
          </div>

          {/* Image */}
          <div className="mb-20 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={robotMall} 
              alt="UpDown Robotics Technology" 
              className="relative rounded-2xl shadow-2xl mx-auto"
            />
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Investment Thesis */}
          <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl mb-12">
            <TrendingUp className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-6">Why Now?</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India's facility management sector is undergoing rapid transformation. Labor costs 
                are rising, quality consistency is a challenge, and large commercial properties are 
                seeking automated solutions.
              </p>
              <p>
                UpDown Robotics is positioned at the intersection of this market need and technological 
                readiness. Our team has validated the core autonomous navigation platform and is in 
                final-stage integration of cleaning systems.
              </p>
              <p>
                With 100+ target commercial complexes and high-rise residential buildings across metro 
                cities, we're building a scalable RaaS business model with recurring revenue and strong 
                unit economics.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-2xl">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Let's Discuss the Opportunity
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're seeking strategic investors who understand deep-tech, robotics, and the 
              Indian facility management market. Let's explore how we can work together.
            </p>
            <a href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50">
                Request Investor Discussion
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Investors;