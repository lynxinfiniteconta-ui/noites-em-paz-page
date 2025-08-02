import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Download } from "lucide-react";
import heroImage from "@/assets/hero-baby-sleep.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft px-4 pt-16 pb-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left space-y-4 lg:space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <Badge className="bg-gentle-rose text-foreground px-3 py-1.5 rounded-full font-montserrat text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
              5% OFF por tempo limitado
            </Badge>
          </div>
          
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Noites Tranquilas
            <span className="block text-baby-blue">Começam Aqui</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-montserrat font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Descubra técnicas gentis e comprovadas para criar uma rotina de sono que 
            funciona para seu bebê e toda a família. Finalmente, noites de descanso verdadeiro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <a href="https://pay.cakto.com.br/332aogo_507140" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="group w-full sm:w-auto">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                Quero meu Ebook agora
              </Button>
            </a>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gentle-rose" />
              <span className="font-montserrat text-xs sm:text-sm">Mais de 10.000 famílias ajudadas</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-2 sm:pt-4">
            <div className="text-center">
              <div className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-baby-blue">97%</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-montserrat">Taxa de sucesso</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-border"></div>
            <div className="text-center">
              <div className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-soft-lilac">7 dias</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-montserrat">Para ver resultados</div>
            </div>
            <div className="w-px h-8 sm:h-10 bg-border"></div>
            <div className="text-center">
              <div className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-mint-green">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-montserrat">Garantia</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Bebê dormindo tranquilamente" 
              className="w-full h-auto rounded-3xl shadow-dreamy"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-moon-glow rounded-full animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-soft-lilac rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 -left-8 w-8 h-8 bg-mint-green rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;