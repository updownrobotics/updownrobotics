import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import robotOffice from "@/assets/robot-office.png";
import { Lightbulb, Wrench, Rocket, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const About = () => {
  const heroReveal = useScrollReveal();
  const missionReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();
  const foundersReveal = useScrollReveal();
  
  const timeline = [
    { icon: Lightbulb, title: "Idea", year: "2023", desc: "Vision to automate urban hygiene" },
    { icon: Wrench, title: "Prototype", year: "2024", desc: "First AI-powered cleaning robot" },
    { icon: Rocket, title: "Pilot", year: "2025", desc: "Testing in real-world facilities" },
    { icon: Trophy, title: "RaaS Launch", year: "2026", desc: "Commercial deployment begins" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section ref={heroReveal.ref} className={`container mx-auto px-4 mb-20 transition-all duration-700 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground">
                About <span className="text-primary">UpDown Robotics</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in India. Built for the world. UpDown Robotics is redefining urban hygiene through AI autonomy.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where intelligent machines handle tedious cleaning tasks, allowing humans to focus on what truly matters. Our AI-powered robots combine cutting-edge navigation, real-time decision-making, and autonomous operation to deliver spotless environments with zero human intervention.
              </p>
            </div>
            <div className="relative">
              <img 
                src={robotOffice} 
                alt="UpDown Robot in Workshop" 
                className="w-full rounded-lg shadow-[0_0_50px_rgba(0,178,255,0.3)]"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionReveal.ref} className={`container mx-auto px-4 mb-20 transition-all duration-700 ${missionReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="text-2xl text-primary font-semibold">Clean Smarter. Live Better.</p>
            <p className="text-lg text-muted-foreground">
              We're on a mission to transform facility management through autonomous robotics, making clean, hygienic spaces accessible and affordable for everyone.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineReveal.ref} className={`container mx-auto px-4 mb-20 transition-all duration-700 ${timelineReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)]">
                  <item.icon className="w-12 h-12 text-primary mb-4 animate-glow-pulse" />
                  <div className="text-sm text-primary font-bold mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
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
