import { Shield, CheckCircle, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center bg-gradient-soft rounded-3xl p-12 shadow-dreamy animate-fade-in-up">
          <div className="w-20 h-20 bg-gradient-dreamy rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Garantia de 30 Dias
          </h2>
          
          <p className="text-lg text-muted-foreground font-montserrat font-light mb-8 max-w-2xl mx-auto">
            Estamos tão confiantes no nosso método que oferecemos garantia total. 
            Se você não ver melhorias em 30 dias, devolvemos 100% do seu investimento.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-mint-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-montserrat font-semibold text-foreground mb-2">
                Sem Riscos
              </h3>
              <p className="text-sm text-muted-foreground">
                Investimento 100% protegido
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-montserrat font-semibold text-foreground mb-2">
                30 Dias
              </h3>
              <p className="text-sm text-muted-foreground">
                Tempo suficiente para testar
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gentle-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-montserrat font-semibold text-foreground mb-2">
                Suporte Total
              </h3>
              <p className="text-sm text-muted-foreground">
                Acompanhamento personalizado
              </p>
            </div>
          </div>
          
          <Button variant="cta" size="xl" className="group">
            <Shield className="w-5 h-5 group-hover:animate-pulse" />
            Quero meu Ebook agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;