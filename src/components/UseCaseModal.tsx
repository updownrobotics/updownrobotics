import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UseCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const useCaseDetails: Record<string, { features: string[]; benefits: string[]; ideal: string }> = {
  "Apartment Corridors": {
    features: [
      "Automated daily cleaning schedules",
      "Quiet operation for residential environments",
      "Elevator integration for multi-floor coverage",
      "Compact design for narrow hallways"
    ],
    benefits: [
      "Reduces manual cleaning costs by 60%",
      "24/7 maintenance availability",
      "Consistent hygiene standards",
      "Happy residents and reduced complaints"
    ],
    ideal: "Perfect for high-rise residential buildings with 100+ units and gated communities"
  },
  "IT Parks": {
    features: [
      "Large area coverage up to 50,000 sq ft",
      "Real-time fleet monitoring dashboard",
      "Scheduled cleaning during off-peak hours",
      "Smart obstacle avoidance for cubicles"
    ],
    benefits: [
      "Professional workplace appearance",
      "Reduced FM operational costs",
      "Data-driven cleaning analytics",
      "Zero disruption to employees"
    ],
    ideal: "Designed for tech parks, SEZs, and business parks with multiple buildings"
  },
  "Corporate Offices": {
    features: [
      "Customizable cleaning zones and schedules",
      "Conference room pre-meeting cleaning",
      "UV disinfection for high-touch areas",
      "Silent night-time operation"
    ],
    benefits: [
      "Enhanced professional environment",
      "Improved employee health and productivity",
      "Lower facility management expenses",
      "Consistent quality across all floors"
    ],
    ideal: "Suitable for corporate headquarters, banking offices, and professional services firms"
  },
  "Tech Campuses": {
    features: [
      "Multi-building route optimization",
      "Weather-resistant outdoor cleaning",
      "Integration with campus security systems",
      "Centralized fleet management"
    ],
    benefits: [
      "Scalable across large campuses",
      "Reduced manual labor requirements",
      "Brand enhancement through innovation",
      "Comprehensive facility data insights"
    ],
    ideal: "Built for sprawling technology centers and university campuses with extensive grounds"
  },
  "Hospitals": {
    features: [
      "Medical-grade disinfection protocols",
      "HEPA filtration and UV sanitization",
      "Priority emergency area cleaning",
      "Infection control compliance tracking"
    ],
    benefits: [
      "Reduced hospital-acquired infections",
      "Meets stringent hygiene regulations",
      "Staff can focus on patient care",
      "Audit-ready cleaning logs"
    ],
    ideal: "Engineered for healthcare facilities requiring hospital-grade cleanliness"
  },
  "Hotels": {
    features: [
      "Guest corridor silent cleaning",
      "Lobby and reception area maintenance",
      "Conference hall pre-event preparation",
      "Aesthetic appeal preservation"
    ],
    benefits: [
      "Enhanced guest satisfaction scores",
      "Premium brand image maintenance",
      "Reduced housekeeping overhead",
      "Consistent 5-star standards"
    ],
    ideal: "Perfect for 4-star and 5-star hotels, resorts, and hospitality chains"
  },
  "Malls": {
    features: [
      "High-traffic area continuous cleaning",
      "Food court spill response",
      "After-hours deep cleaning cycles",
      "Retail zone customization"
    ],
    benefits: [
      "Superior shopping experience",
      "Increased footfall retention",
      "Lower cleaning staff requirements",
      "Real-time cleanliness monitoring"
    ],
    ideal: "Designed for retail malls, shopping centers, and entertainment complexes"
  },
  "Airports": {
    features: [
      "24×7 terminal cleaning operations",
      "Multi-zone simultaneous coverage",
      "Baggage claim and gate area focus",
      "Security checkpoint integration"
    ],
    benefits: [
      "World-class passenger experience",
      "Compliance with aviation standards",
      "Massive operational cost savings",
      "Never-stop cleaning capability"
    ],
    ideal: "Built for domestic and international airports handling millions of passengers"
  }
};

export const UseCaseModal = ({ isOpen, onClose, title, icon: Icon }: UseCaseModalProps) => {
  const details = useCaseDetails[title] || { features: [], benefits: [], ideal: "" };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/30">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-3xl font-heading font-bold">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-lg text-muted-foreground italic">
            {details.ideal}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Key Features</h3>
            <ul className="space-y-2">
              {details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-electric-cyan">Benefits</h3>
            <ul className="space-y-2">
              {details.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-electric-cyan mt-1">✓</span>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Want to deploy UpDown robots in your {title.toLowerCase()}?{" "}
              <a href="/pilot-program" className="text-primary hover:underline font-semibold">
                Apply for our pilot program →
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
