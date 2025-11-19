const robotOffice = "/images_opt/assets/robot-office.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Brain, Map, Droplet, Zap } from "lucide-react";

const features = [
	{
		icon: Map,
		title: "Real-time SLAM Navigation",
		description: "Simultaneous localization and mapping for precise movement",
	},
	{
		icon: Brain,
		title: "AI-based Dirt Detection",
		description: "Intelligent recognition of cleaning zones and obstacles",
	},
	{
		icon: Droplet,
		title: "Auto-lift & Floor Recognition",
		description: "Adapts cleaning method to surface type automatically",
	},
	{
		icon: Zap,
		title: "Predictive Maintenance Sensors",
		description: "Self-diagnostic systems prevent downtime",
	},
];

export const Technology = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-background to-secondary/30">
			<div className="container mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="relative order-2 lg:order-1">
						<div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
						<AspectRatio ratio={1.618}>
							<picture>
								<source
									srcSet="/images_opt/assets/robot-office.avif"
									type="image/avif"
								/>
								<source
									srcSet="/images_opt/assets/robot-office.webp"
									type="image/webp"
								/>
								<img
									src="/images_opt/assets/robot-office.jpg"
									alt="UpDown Robot with advanced technology"
									className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
								/>
							</picture>
						</AspectRatio>

						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/30 rounded-full animate-glow-pulse" />
						<div
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary/20 rounded-full animate-glow-pulse"
							style={{ animationDelay: "0.5s" }}
						/>
					</div>

					<div className="space-y-8 order-1 lg:order-2">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold mb-4">
								Artificial Intelligence Meets
								<span className="text-primary"> Real-World Hygiene.</span>
							</h2>
							<p className="text-xl text-muted-foreground">
								Our robots combine cutting-edge AI with robust mechanical
								engineering to deliver spotless results.
							</p>
						</div>

						<div className="grid sm:grid-cols-2 gap-6">
							{features.map((feature, index) => (
								<div
									key={index}
									className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
								>
									<feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
									<h3 className="text-lg font-semibold mb-2">
										{feature.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
