import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, Home, Hospital, Hotel, ShoppingBag, Plane, Briefcase, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const useCases = [
  {
    icon: Home,
    title: "Apartment Corridors",
    description: "Perfect for high-rise residential buildings and gated communities",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: Cpu,
    title: "IT Parks",
    description: "Maintain pristine floors in tech campuses and business parks",
    gradient: "from-electric-cyan/20 to-transparent"
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Professional cleaning for office floors and common areas",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: Briefcase,
    title: "Tech Campuses",
    description: "Large-scale operations for sprawling technology centers",
    gradient: "from-electric-cyan/20 to-transparent"
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Hygienic, consistent cleaning for healthcare facilities",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Maintain guest corridors and common spaces effortlessly",
    gradient: "from-electric-cyan/20 to-transparent"
  },
  {
    icon: ShoppingBag,
    title: "Malls",
    description: "Handle high-traffic retail spaces with ease",
    gradient: "from-primary/20 to-transparent"
  },
  {
    icon: Plane,
    title: "Airports",
    description: "24/7 cleaning operations for terminals and concourses",
    gradient: "from-electric-cyan/20 to-transparent"
  }
];

const UseCases = () => {
  const gridReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Built for <span className="gradient-heading">Every Space</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intelligent cleaning robots adapt to diverse environments across 
              India's commercial and residential infrastructure
            </p>
          </div>

          <div ref={gridReveal.ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full blur-2xl" />
              </div>
            ))}
          </div>

          <div ref={ctaReveal.ref} className={`mt-20 text-center transition-all duration-700 ${ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Not sure if we're right for your space?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Our team will work with you to assess your facility and customize 
                a solution that fits your specific needs.
              </p>
              <a href="/contact">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold">
                  Schedule a Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UseCases;