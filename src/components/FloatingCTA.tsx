import { Button } from "@/components/ui/button";
import { Download, Percent } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in md:hidden">
      <a href="https://pay.cakto.com.br/332aogo_507140" target="_blank" rel="noopener noreferrer">
        <Button variant="floating" size="default" className="shadow-glow">
          <Percent className="w-4 h-4" />
          Baixar com 5% OFF
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;