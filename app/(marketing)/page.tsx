import { Hero } from "@/components/Landing/Hero";
import { Language } from "@/components/Landing/Language";
import { Statistics } from "@/components/Landing/Statictics";
import { HeroLanding } from "@/components/Landing/HeroLanding";
export default function Home() {
  return (
    <div className="relative">
      <Hero/>
      <Language/> 
      <Statistics/>
      <HeroLanding/>
    </div>
  );
}
