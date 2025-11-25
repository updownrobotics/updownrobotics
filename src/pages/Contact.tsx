// src/pages/Contact.tsx
import { useState, FormEvent, ChangeEvent } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

// minimum characters for message
const MIN_MESSAGE_LEN = 10;

const Contact = () => {
  // Apps Script endpoint (deployed web app) and shared secret
  const APPS_SCRIPT_URL =
    "https://script.google.com/a/macros/updownrobotics.com/s/AKfycbwnKHwDApzYLZr0tZ-sVnDLNbuhya-ODW14fMsmV3xr89eL5iItXrtx-avf8AXMDmNCVA/exec";
  const APPS_SECRET = "X9f7sGQk2bLwPz1vR8uY";

  const formReveal = useScrollReveal();
  const contactInfoReveal = useScrollReveal();
  const heroText = useParallaxMotion({ speed: 0.382 });

  const contactTypes = [
    {
      icon: MessageSquare,
      title: "Sales",
      desc: "Explore RaaS pricing and deployment",
      email: "sales@updownrobotics.com",
    },
    {
      icon: Mail,
      title: "Investors",
      desc: "Partnership and funding inquiries",
      email: "invest@updownrobotics.com",
    },
    {
      icon: Phone,
      title: "Media",
      desc: "Press releases and media kits",
      email: "media@updownrobotics.com",
    },
  ];

  // State for form fields and feedback
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleChange =
    (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const trimmedMsg = form.message.trim();
    if (!trimmedMsg) {
      newErrors.message = "Message is required";
    } else {
      const len = trimmedMsg.length;
      if (len < MIN_MESSAGE_LEN) {
        newErrors.message = `Please enter at least ${MIN_MESSAGE_LEN} characters (${len}/${MIN_MESSAGE_LEN}).`;
      }
    }

    setErrors(newErrors);

    const firstErrorField = Object.keys(newErrors)[0] as
      | keyof ContactFormData
      | undefined;

    if (firstErrorField && typeof document !== "undefined") {
      const el =
        document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="contact-${firstErrorField}"]`
        );
      el?.focus();
    }

    return !firstErrorField;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    setStatus("loading");
    try {
      const body = new URLSearchParams({
        secret: APPS_SECRET,
        source: "contact",
        ...form,
      }).toString();
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
        setErrors({});
        setSubmitted(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <motion.div
            ref={heroText.ref}
            style={{ y: heroText.y }}
            className="max-w-3xl mx-auto space-y-6 animate-fade-in px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Contact & <span className="gradient-heading">Support</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Get in touch with our team to learn more about UpDown Robotics and
              how we can help automate your facility maintenance.
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div
              ref={formReveal.ref}
              className={`transition-all duration-700 ${
                formReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-card p-8 rounded-lg border border-border shadow-[0_0_30px_rgba(0,178,255,0.1)]">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Send us a Message
                </h2>

                {submitted && hasErrors && (
                  <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
                    Please fix the highlighted fields before sending your
                    message.
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      name="contact-name"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Your full name"
                      className={`bg-background border-border focus:border-primary transition-colors ${
                        submitted && errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {submitted && errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      name="contact-email"
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="you@company.com"
                      className={`bg-background border-border focus:border-primary transition-colors ${
                        submitted && errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {submitted && errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Company
                    </label>
                    <Input
                      name="contact-company"
                      value={form.company}
                      onChange={handleChange("company")}
                      placeholder="Your company name"
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="contact-message"
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className={`bg-background border-border focus:border-primary transition-colors resize-none ${
                        submitted && errors.message
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }`}
                    />
                    {submitted && errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,178,255,0.5)] hover:shadow-[0_0_30px_rgba(0,178,255,0.7)] transition-all duration-300"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <div className="text-green-600 font-semibold text-center">
                      Message sent successfully!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-red-600 font-semibold text-center">
                      Failed to send. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
            {/* Contact Info */}
            <div
              ref={contactInfoReveal.ref}
              className={`space-y-6 transition-all duration-700 ${
                contactInfoReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Headquarters */}
              <div className="bg-card p-8 rounded-lg border border-border shadow-[0_0_30px_rgba(0,178,255,0.1)] animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 animate-glow-pulse" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Headquarters
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      UpDown Robotics Private Limited
                      <br />
                      T-Hub, IIIT-H Campus
                      <br />
                      Gachibowli, Hyderabad
                      <br />
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
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {type.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {type.desc}
                        </p>
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