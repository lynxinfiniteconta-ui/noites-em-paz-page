import { Card, CardContent } from "@/components/ui/card";
import { Moon, Heart, Clock, BookOpen, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Moon,
    title: "Rotina de Sono Eficaz",
    description: "Técnicas testadas para estabelecer uma rotina consistente que funciona"
  },
  {
    icon: Heart,
    title: "Métodos Gentis",
    description: "Abordagens suaves que respeitam o ritmo natural do seu bebê"
  },
  {
    icon: Clock,
    title: "Resultados em 7 Dias",
    description: "Veja melhorias significativas na primeira semana de aplicação"
  },
  {
    icon: BookOpen,
    title: "Guia Passo a Passo",
    description: "Instruções claras e detalhadas para cada idade e situação"
  },
  {
    icon: Shield,
    title: "Cientificamente Comprovado",
    description: "Baseado em pesquisas e recomendações de especialistas em sono"
  },
  {
    icon: Users,
    title: "Suporte à Família",
    description: "Estratégias que envolvem toda a família no processo"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforme as Noites da Sua Família
          </h2>
          <p className="text-lg text-muted-foreground font-montserrat font-light max-w-2xl mx-auto">
            Descubra como o ebook pode revolucionar o sono do seu bebê e trazer paz para toda a família
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-dreamy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-gentle-pulse">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-montserrat font-light leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;