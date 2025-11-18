import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Rocket, Target, TrendingUp, Zap } from "lucide-react";
import robotDelivery from "@/assets/robot-delivery.png";
import robotApartment from "@/assets/robot-apartment.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const timeline = [
  {
    period: "2026 Q1",
    title: "Manual Robot Launch",
    description: "Commercial release of 5-in-1 smart cleaning robot",
    status: "upcoming"
  },
  {
    period: "2026 Q2",
    title: "Autonomy Integration",
    description: "Integrate validated SLAM navigation into production units",
    status: "upcoming"
  },
  {
    period: "2026 Q3",
    title: "Pilot Rollout",
    description: "Deploy autonomous robots in early adopter facilities",
    status: "upcoming"
  },
  {
    period: "2026 Q4",
    title: "Full Prototype",
    description: "Complete autonomous system with multi-floor capability",
    status: "future"
  },
  {
    period: "2027",
    title: "Commercial Deployment",
    description: "Full-scale autonomous robot production and sales",
    status: "future"
  },
  {
    period: "2030",
    title: "Autonomous Platform",
    description: "Complete building operations management system",
    status: "future"
  }
];

const Vision = () => {
  const visionCardsReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Building India's <span className="gradient-heading">Autonomous Cleaning Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intelligent cleaning robots to fully autonomous building operations—
              our vision extends beyond today's challenges
            </p>
          </div>

          {/* Vision Cards */}
          <div ref={visionCardsReveal.ref} className={`grid lg:grid-cols-2 gap-12 mb-24 transition-all duration-700 ${visionCardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8">
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become India's leading autonomous robotics company, transforming how 
                buildings are maintained. We envision a future where intelligent robots 
                handle repetitive tasks, allowing humans to focus on what matters most.
              </p>
              <img 
                src={robotApartment} 
                alt="Future Vision" 
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8">
              <Target className="w-12 h-12 text-electric-cyan mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Delivery Add-On Evolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond cleaning, we're developing modular add-ons for last-mile delivery, 
                security patrols, and facility inspections—making our robots the Swiss Army 
                knife of building operations.
              </p>
              <img 
                src={robotDelivery} 
                alt="Delivery Evolution" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Timeline */}
          <div ref={timelineReveal.ref} className={`mb-24 transition-all duration-700 ${timelineReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-heading font-bold text-center mb-16">
              Our <span className="text-primary">Roadmap</span>
            </h2>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-electric-cyan to-primary" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                      item.status === 'upcoming' 
                        ? 'bg-primary border-primary/30' 
                        : 'bg-muted border-muted-foreground/30'
                    }`} />

                    <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-accent font-semibold text-primary">
                          {item.period}
                        </span>
                        {item.status === 'upcoming' && (
                          <TrendingUp className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-primary/10 via-card to-electric-cyan/10 border border-primary/30 rounded-2xl">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold mb-4">
              Join the Automation Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of India's robotics future. Whether you're a potential customer, 
              investor, or partner—let's build tomorrow together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/pilot-program">
                <Button size="lg" className="bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50">
                  Join Pilot Program
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Vision;