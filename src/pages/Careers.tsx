import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import robotCorridor from "@/assets/robot-corridor.png";
import { Cpu, Code, Brain, Palette, Briefcase, Lightbulb } from "lucide-react";

const Careers = () => {
  const roles = [
    { 
      icon: Cpu, 
      title: "Robotics Engineer", 
      desc: "Design and optimize autonomous navigation systems, sensor fusion, and hardware integration for our cleaning robots.",
      skills: "ROS, C++, Python, SLAM"
    },
    { 
      icon: Code, 
      title: "Embedded Systems Developer", 
      desc: "Build real-time firmware for motor control, sensor processing, and power management systems.",
      skills: "C/C++, ARM, RTOS, Hardware"
    },
    { 
      icon: Brain, 
      title: "AI Researcher", 
      desc: "Develop computer vision models for dirt detection, obstacle avoidance, and predictive maintenance algorithms.",
      skills: "PyTorch, TensorFlow, CV, ML"
    },
    { 
      icon: Palette, 
      title: "Industrial Designer", 
      desc: "Create ergonomic, aesthetically pleasing robot designs that blend form with function for commercial environments.",
      skills: "CAD, SolidWorks, Prototyping"
    },
    { 
      icon: Briefcase, 
      title: "Sales Executive", 
      desc: "Drive RaaS adoption across enterprise clients, manage partnerships, and close deals with facility management firms.",
      skills: "B2B Sales, Negotiation, CRM"
    },
    { 
      icon: Lightbulb, 
      title: "Product Manager", 
      desc: "Define product roadmap, prioritize features, and bridge engineering with customer needs for our robotics platform.",
      skills: "Product Strategy, Agile, UX"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground">
                Join the Movement — <span className="text-primary">Build the Future</span>
              </h1>
              <p className="text-xl text-primary font-semibold italic">
                "Where AI meets Mechanical Imagination."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At UpDown Robotics, we're not just building cleaning machines — we're pioneering autonomous systems that will reshape urban infrastructure. Join a team of dreamers, engineers, and innovators creating India's robotic future.
              </p>
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,178,255,0.5)] hover:shadow-[0_0_30px_rgba(0,178,255,0.7)] transition-all duration-300"
              >
                View Open Positions
              </Button>
            </div>
            <div className="relative">
              <AspectRatio ratio={1.618}>
                <img 
                  src={robotCorridor} 
                  alt="Engineer with UpDown Robot" 
                  className="w-full h-full object-contain rounded-lg shadow-[0_0_50px_rgba(23,162,184,0.3)]"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)] animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <role.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-glow-pulse transition-all duration-300" />
                <h3 className="text-xl font-bold text-foreground mb-2">{role.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{role.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.split(", ").map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why UpDown?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Innovation First", desc: "Work on cutting-edge robotics and AI" },
                { title: "Impact at Scale", desc: "See your work deployed across India" },
                { title: "Growth Culture", desc: "Learn from the best in the industry" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg border border-primary/20 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Shape the Future?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Send your resume and portfolio to join our team
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,178,255,0.5)] hover:shadow-[0_0_30px_rgba(0,178,255,0.7)] transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
