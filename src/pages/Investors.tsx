import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Code2, Layers, Globe } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const robotMall = "/images_opt/assets/robot-mall.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

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
  const imageReveal = useScrollReveal();
  const highlightsReveal = useScrollReveal();
  const thesisReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <motion.div 
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="text-center mb-16 animate-fade-in px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Interested in Investing in India's <span className="gradient-heading">Robotics Future?</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              UpDown Robotics is building India's first intelligent indoor cleaning AMR platform. 
              We are open to strategic investors and technology partners.
            </p>
          </motion.div>

          {/* Image */}
          <div 
            className={`mb-20 relative transition-all duration-700 ${imageReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <AspectRatio ratio={1.618}>
              <img 
                src={robotMall} 
                alt="UpDown Robotics Technology" 
                className="rounded-2xl shadow-2xl mx-auto w-full h-full object-cover"
              />
            </AspectRatio>
          </div>

          {/* Highlights */}
          <div ref={highlightsReveal.ref} className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-700 ${highlightsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          <div ref={thesisReveal.ref} className={`p-8 bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl mb-12 transition-all duration-700 ${thesisReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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