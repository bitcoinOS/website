import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProdSolution from "@/components/ProdSolution";
import Highlight from '@/components/Highlight';
import TechSolution from "@/components/TechSolution";
import Advantages from "@/components/Advantages";
import Roadmap from '@/components/Roadmap';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <PainPoints />
      <Highlight />
      <ProdSolution />
      <TechSolution />
      <Advantages />
      <Roadmap />
      <Footer />
    </div>
  )
}