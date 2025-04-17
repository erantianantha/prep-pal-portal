
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/30 py-16 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-gray-800">{title}</span>
          <span className="block mt-2 text-primary">{subtitle}</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
          Get access to comprehensive study materials, exam schedules, and previous cutoffs all in one place.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="rounded-md shadow" asChild>
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
