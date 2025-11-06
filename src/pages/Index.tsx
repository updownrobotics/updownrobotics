import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { RDLab } from "@/components/RDLab";
import { RaaSModel } from "@/components/RaaSModel";
import { VisionRoadmap } from "@/components/VisionRoadmap";
import { Investors } from "@/components/Investors";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home"><Hero /></div>
      <div id="technology"><Technology /></div>
      <div id="rdlab"><RDLab /></div>
      <div id="raas"><RaaSModel /></div>
      <div id="vision"><VisionRoadmap /></div>
      <div id="investors"><Investors /></div>
      <Footer />
    </main>
  );
};

export default Index;
