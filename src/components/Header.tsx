import { Button } from "@/components/ui/button";
import { Moon, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-background/80 shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-dreamy rounded-full flex items-center justify-center">
            <Moon className="w-5 h-5 text-white" />
          </div>
          <span className="font-playfair font-semibold text-xl text-foreground">
            Meu Filho Não Dorme
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="https://pay.cakto.com.br/332aogo_507140" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="sm" className="ml-4">
              <Star className="w-4 h-4" />
              Quero Meu Ebook Agora
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;