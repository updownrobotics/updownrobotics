import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

const Contact = () => {
  const formReveal = useScrollReveal();
  const contactInfoReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  
  const contactTypes = [
    { icon: MessageSquare, title: "Sales", desc: "Explore RaaS pricing and deployment", email: "sales@updownrobotics.com" },
    { icon: Mail, title: "Investors", desc: "Partnership and funding inquiries", email: "invest@updownrobotics.com" },
    { icon: Phone, title: "Media", desc: "Press releases and media kits", email: "media@updownrobotics.com" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <motion.div 
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="max-w-3xl mx-auto space-y-6 animate-fade-in"
          >
            <h1 className="text-5xl font-bold text-foreground">
              Contact & <span className="gradient-heading">Support</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to learn more about UpDown Robotics and how we can help automate your facility maintenance.
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div ref={formReveal.ref} className={`transition-all duration-700 ${formReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-card p-8 rounded-lg border border-border shadow-[0_0_30px_rgba(0,178,255,0.1)]">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input 
                      placeholder="Your full name" 
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="you@company.com" 
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Company</label>
                    <Input 
                      placeholder="Your company name" 
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={6}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,178,255,0.5)] hover:shadow-[0_0_30px_rgba(0,178,255,0.7)] transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div ref={contactInfoReveal.ref} className={`space-y-6 transition-all duration-700 ${contactInfoReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Headquarters */}
              <div className="bg-card p-8 rounded-lg border border-border shadow-[0_0_30px_rgba(0,178,255,0.1)] animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 animate-glow-pulse" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Headquarters</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      UpDown Robotics Private Limited<br />
                      T-Hub, IIIT-H Campus<br />
                      Gachibowli, Hyderabad<br />
                      Telangana 500032, India
                    </p>
                  </div>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                  <MapPin className="w-12 h-12 text-primary animate-glow-pulse" />
                </div>
              </div>

              {/* Contact Types */}
              <div className="space-y-4">
                {contactTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <type.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{type.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{type.desc}</p>
                        <a 
                          href={`mailto:${type.email}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {type.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-20 animate-fade-in">
          <p className="text-2xl font-bold text-primary">
            Smarter Movement. Cleaner Future.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
