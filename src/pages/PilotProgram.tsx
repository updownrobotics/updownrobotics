// src/pages/PilotProgram.tsx
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, TrendingDown, BarChart3, Award, Zap } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallaxMotion } from "@/hooks/use-parallax-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

type FormData = {
	name: string;
	organization: string;
	city: string;
	phone: string;
	email: string;
	floors: string;
	timeline: string;
	message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const PilotProgram = () => {
	const APPS_SCRIPT_URL =
		"https://script.google.com/a/macros/updownrobotics.com/s/AKfycbwnKHwDApzYLZr0tZ-sVnDLNbuhya-ODW14fMsmV3xr89eL5iItXrtx-avf8AXMDmNCVA/exec";
	const APPS_SECRET = "X9f7sGQk2bLwPz1vR8uY";

	const benefitsReveal = useScrollReveal();
	const formReveal = useScrollReveal();
	const heroText = useParallaxMotion({ speed: 0.382 });

	const [formData, setFormData] = useState<FormData>({
		name: "",
		organization: "",
		city: "",
		phone: "",
		email: "",
		floors: "",
		timeline: "",
		message: ""
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [submitted, setSubmitted] = useState(false);
	const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

	const handleChange =
		(field: keyof FormData) =>
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const value = e.target.value;
			setFormData((prev) => ({ ...prev, [field]: value }));
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		};

	const validate = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.organization.trim()) newErrors.organization = "Apartment/Company is required";
		if (!formData.city.trim()) newErrors.city = "City is required";

		const phoneDigits = formData.phone.replace(/\D/g, "");
		if (!phoneDigits) newErrors.phone = "Phone is required";
		else if (phoneDigits.length < 10) newErrors.phone = "Enter a valid phone number";

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Enter a valid email address";
		}

		if (!formData.floors.trim()) newErrors.floors = "Please describe floors covered";
		if (!formData.timeline.trim()) newErrors.timeline = "Preferred timeline is required";

		setErrors(newErrors);

		const firstErrorField = Object.keys(newErrors)[0] as keyof FormData | undefined;
		if (firstErrorField && typeof document !== "undefined") {
			const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
				`[name="${firstErrorField}"]`
			);
			el?.focus();
		}

		return !firstErrorField;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);

		if (!validate()) return;

		setStatus("loading");
		try {
			const body = new URLSearchParams({
				secret: APPS_SECRET,
				source: "pilot-program",
				...formData
			}).toString();

			const res = await fetch(APPS_SCRIPT_URL, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body
			});

			if (res.ok) {
				setStatus("success");
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
							<span className="text-primary font-accent font-semibold text-xs sm:text-sm whitespace-nowrap">
								LIMITED SPOTS AVAILABLE
							</span>
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
							Join Our <span className="gradient-heading">Early Pilot Program</span>
						</h1>

						<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
							Experience our intelligent cleaning robot in your building. Be among the first to
							revolutionize facility management.
						</p>
					</motion.div>

					{/* Benefits */}
					<div
						ref={benefitsReveal.ref}
						className={`mb-20 transition-all duration-700 ${
							benefitsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
					>
						<h2 className="text-3xl font-heading font-bold text-center mb-12">Why Join the Pilot?</h2>

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

					<div
						ref={formReveal.ref}
						className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
							formReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						}`}
					>
						{/* Suitable For */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-heading font-bold mb-6">Suitable for</h2>

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
								<h3 className="text-xl font-heading font-bold mb-3">What to Expect</h3>
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
							<h2 className="text-2xl font-heading font-bold mb-4">Pilot Application Form</h2>

							{submitted && hasErrors && (
								<div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
									Please fix the highlighted fields before submitting.
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-4" noValidate>
								<div>
									<label className="block text-sm font-semibold mb-2">Name *</label>
									<Input
										name="name"
										value={formData.name}
										onChange={handleChange("name")}
										placeholder="Your full name"
										className={cn(
											submitted && errors.name && "border-red-500 focus-visible:ring-red-500"
										)}
									/>
									{submitted && errors.name && (
										<p className="mt-1 text-xs text-red-500">{errors.name}</p>
									)}
								</div>

								<div>
									<label className="block text-sm font-semibold mb-2">Apartment/Company *</label>
									<Input
										name="organization"
										value={formData.organization}
										onChange={handleChange("organization")}
										placeholder="Organization name"
										className={cn(
											submitted &&
												errors.organization &&
												"border-red-500 focus-visible:ring-red-500"
										)}
									/>
									{submitted && errors.organization && (
										<p className="mt-1 text-xs text-red-500">{errors.organization}</p>
									)}
								</div>

								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-semibold mb-2">City *</label>
										<Input
											name="city"
											value={formData.city}
											onChange={handleChange("city")}
											placeholder="Your city"
											className={cn(
												submitted && errors.city && "border-red-500 focus-visible:ring-red-500"
											)}
										/>
										{submitted && errors.city && (
											<p className="mt-1 text-xs text-red-500">{errors.city}</p>
										)}
									</div>

										<div>
										<label className="block text-sm font-semibold mb-2">Phone *</label>
										<Input
											name="phone"
											type="tel"
											value={formData.phone}
											onChange={handleChange("phone")}
											placeholder="+91 XXXXX XXXXX"
											className={cn(
												submitted &&
													errors.phone &&
													"border-red-500 focus-visible:ring-red-500"
											)}
										/>
										{submitted && errors.phone && (
											<p className="mt-1 text-xs text-red-500">{errors.phone}</p>
										)}
									</div>
								</div>

								<div>
									<label className="block text-sm font-semibold mb-2">Email *</label>
									<Input
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange("email")}
										placeholder="your@email.com"
										className={cn(
											submitted &&
												errors.email &&
												"border-red-500 focus-visible:ring-red-500"
										)}
									/>
									{submitted && errors.email && (
										<p className="mt-1 text-xs text-red-500">{errors.email}</p>
									)}
								</div>

								<div>
									<label className="block text-sm font-semibold mb-2">Floors Covered *</label>
									<Input
										name="floors"
										value={formData.floors}
										onChange={handleChange("floors")}
										placeholder="e.g., 5 floors, 10,000 sq ft"
										className={cn(
											submitted &&
												errors.floors &&
												"border-red-500 focus-visible:ring-red-500"
										)}
									/>
									{submitted && errors.floors && (
										<p className="mt-1 text-xs text-red-500">{errors.floors}</p>
									)}
								</div>

								<div>
									<label className="block text-sm font-semibold mb-2">Preferred Timeline *</label>
									<Input
										name="timeline"
										value={formData.timeline}
										onChange={handleChange("timeline")}
										placeholder="e.g., Q1 2026"
										className={cn(
											submitted &&
												errors.timeline &&
												"border-red-500 focus-visible:ring-red-500"
										)}
									/>
									{submitted && errors.timeline && (
										<p className="mt-1 text-xs text-red-500">{errors.timeline}</p>
									)}
								</div>

								<div>
									<label className="block text-sm font-semibold mb-2">Additional Information</label>
									<Textarea
										name="message"
										value={formData.message}
										onChange={handleChange("message")}
										placeholder="Tell us more about your requirements..."
										rows={4}
									/>
								</div>

								<Button
									type="submit"
									size="lg"
									className="w-full bg-gradient-to-r from-primary to-teal-light hover:shadow-lg hover:shadow-primary/50"
									disabled={status === "loading"}
								>
									{status === "loading" ? "Submitting..." : "Submit Application"}
								</Button>

								{status === "success" && (
									<div className="text-green-600 font-semibold text-center mt-2">
										Application submitted successfully!
									</div>
								)}
								{status === "error" && (
									<div className="text-red-600 font-semibold text-center mt-2">
										Failed to submit. Please try again.
									</div>
								)}
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