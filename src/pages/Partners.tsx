import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Users, Handshake, Star } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "Apollo Services", category: "Facility Management" },
    { name: "TechPark Properties", category: "Real Estate" },
    { name: "CleanSmart India", category: "Hygiene Solutions" },
    { name: "Metro Facilities Corp", category: "Commercial Spaces" },
    { name: "Healthcare Maintenance", category: "Hospital Services" },
    { name: "Urban Living Group", category: "Residential Complexes" },
  ];

  const benefits = [
    { icon: Building2, title: "Enterprise Solutions", desc: "Custom fleet deployments for large facilities" },
    { icon: Users, title: "Co-Development", desc: "Collaborate on next-gen robotics features" },
    { icon: Handshake, title: "Revenue Sharing", desc: "Mutually beneficial partnership models" },
    { icon: Star, title: "Priority Support", desc: "Dedicated technical and sales assistance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground">
              Partners & <span className="text-primary">Collaborations</span>
            </h1>
            <p className="text-2xl text-primary font-semibold">
              Collaborating to Clean Smarter
            </p>
            <p className="text-lg text-muted-foreground">
              Join India's leading facility management companies and real estate groups in revolutionizing urban hygiene through autonomous robotics.
            </p>
          </div>
        </section>

        {/* Partner Grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border text-center hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)] animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-primary">{partner.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Partnership Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4 animate-glow-pulse" />
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg border border-primary/20 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's build the future of autonomous cleaning together
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,178,255,0.5)] hover:shadow-[0_0_30px_rgba(0,178,255,0.7)] transition-all duration-300"
            >
              Partner With Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
