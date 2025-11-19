import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import robotOffice from "@/assets/robot-office.png";
import { Lightbulb, Wrench, Rocket, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

const About = () => {
  const heroReveal = useScrollReveal();
  const missionReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();
  const foundersReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  const heroImage = useParallaxMotion({ speed: 0.618 });
  
  const timeline = [
    { icon: Lightbulb, title: "Idea", year: "2023", desc: "Vision to automate urban hygiene" },
    { icon: Wrench, title: "Prototype", year: "2024", desc: "First AI-powered cleaning robot" },
    { icon: Rocket, title: "Pilot", year: "2025", desc: "Testing in real-world facilities" },
    { icon: Trophy, title: "RaaS Launch", year: "2026", desc: "Commercial deployment begins" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-phi-7 pb-phi-6">
        {/* Hero Section */}
        <section ref={heroReveal.ref} className={`container mx-auto px-phi-4 mb-phi-6 max-w-phi-content transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-phi-5 items-center">
            <motion.div 
              ref={heroText.ref}
              style={{ y: heroText.y }}
              className="space-y-phi-4 animate-fade-in"
            >
              <h1 className="text-phi-5xl font-bold text-foreground">
                About <span className="gradient-heading">UpDown Robotics</span>
              </h1>
              <p className="text-phi-xl text-muted-foreground leading-relaxed">
                Founded in India. Built for the world. UpDown Robotics is redefining urban hygiene through AI autonomy.
              </p>
              <p className="text-phi-lg text-muted-foreground">
                We envision a future where intelligent machines handle tedious cleaning tasks, allowing humans to focus on what truly matters. Our AI-powered robots combine cutting-edge navigation, real-time decision-making, and autonomous operation to deliver spotless environments with zero human intervention.
              </p>
            </motion.div>
            <motion.div 
              ref={heroImage.ref}
              style={{ y: heroImage.y, scale: heroImage.scale }}
              className="relative"
            >
              <AspectRatio ratio={1.618}>
                <img 
                  src={robotOffice} 
                  alt="UpDown Robot in Workshop" 
                  className="w-full h-full object-cover rounded-lg shadow-[0_0_50px_rgba(23,162,184,0.3)]"
                />
              </AspectRatio>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionReveal.ref} className={`container mx-auto px-phi-4 mb-phi-6 max-w-phi-content transition-all duration-700 ${missionReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-phi-content mx-auto space-y-phi-3">
            <h2 className="text-phi-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-phi-2xl text-primary font-semibold">Clean Smarter. Live Better.</p>
            <p className="text-phi-lg text-muted-foreground">
              We're on a mission to transform facility management through autonomous robotics, making clean, hygienic spaces accessible and affordable for everyone.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineReveal.ref} className={`container mx-auto px-phi-4 mb-phi-6 max-w-phi-content transition-all duration-700 ${timelineReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-phi-3xl font-bold text-center mb-phi-5 text-foreground">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-phi-4">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card p-phi-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)]">
                  <item.icon className="w-phi-5 h-phi-5 text-primary mb-phi-3 animate-glow-pulse" />
                  <div className="text-phi-sm text-primary font-bold mb-phi-2">{item.year}</div>
                  <h3 className="text-phi-xl font-bold text-foreground mb-phi-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section ref={foundersReveal.ref} className={`container mx-auto px-4 transition-all duration-700 ${foundersReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Founder & CEO", role: "Visionary Leader", bio: "10+ years in robotics and automation" },
              { name: "CTO", role: "AI & Hardware Expert", bio: "Former IIT researcher in autonomous systems" },
              { name: "COO", role: "Operations & Strategy", bio: "Scaling tech startups across India" },
            ].map((founder, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-4xl text-primary">👤</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{founder.role}</p>
                <p className="text-muted-foreground text-sm">{founder.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
