import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, TrendingDown, BarChart3, Award, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

const benefits = [
  { icon: TrendingDown, title: "Lower Cleaning Cost", description: "Reduce operational expenses significantly" },
  { icon: CheckCircle, title: "Consistent Quality", description: "Spotless results every single time" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Real-time insights into cleaning operations" },
  { icon: Award, title: "Early Adopter Benefits", description: "Special pricing and priority support" },
  { icon: Zap, title: "Priority Onboarding", description: "Fast-track implementation process" }
];

const suitableFor = [
  "Apartment Complexes",
  "Shopping Malls",
  "Hospitals & Clinics",
  "Corporate Offices",
  "Facility Management Companies"
];

const PilotProgram = () => {
  const benefitsReveal = useScrollReveal();
  const formReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });
  
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    city: "",
    phone: "",
    email: "",
    floors: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll contact you soon.");
    setFormData({
      name: "",
      organization: "",
      city: "",
      phone: "",
      email: "",
      floors: "",
      timeline: "",
      message: ""
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-black to-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <motion.div 
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="text-center mb-16 animate-fade-in px-4"
          >
            <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-accent font-semibold text-xs sm:text-sm whitespace-nowrap">LIMITED SPOTS AVAILABLE</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Join Our <span className="gradient-heading">Early Pilot Program</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our intelligent cleaning robot in your building. 
              Be among the first to revolutionize facility management.
            </p>
          </motion.div>

          {/* Benefits */}
          <div ref={benefitsReveal.ref} className={`mb-20 transition-all duration-700 ${benefitsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Why Join the Pilot?
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={formReveal.ref} className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${formReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Suitable For */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Suitable for
                </h2>
                
                <div className="space-y-4">
                  {suitableFor.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>30-day pilot program at special pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dedicated support and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Performance analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Feedback sessions with our engineering team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Pilot Application Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Apartment/Company *</label>
                  <Input
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Organization name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <Input
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Floors Covered *</label>
                  <Input
                    required
                    value={formData.floors}
                    onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                    placeholder="e.g., 5 floors, 10,000 sq ft"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Timeline *</label>
                  <Input
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., Q1 2026"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Information</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PilotProgram;