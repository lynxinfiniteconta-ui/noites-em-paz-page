import { Check, Baby, Moon, Clock, Heart } from "lucide-react";

const learningItems = [
  {
    icon: Baby,
    text: "Como entender os sinais de sono do seu bebê"
  },
  {
    icon: Moon,
    text: "Técnicas suaves para adormecer sem choro"
  },
  {
    icon: Clock,
    text: "Criar rotinas personalizadas por idade"
  },
  {
    icon: Heart,
    text: "Lidar com despertares noturnos de forma gentil"
  },
  {
    icon: Check,
    text: "Estabelecer horários consistentes de sono"
  },
  {
    icon: Check,
    text: "Criar ambiente ideal para o descanso"
  },
  {
    icon: Check,
    text: "Resolver problemas comuns do sono infantil"
  },
  {
    icon: Check,
    text: "Manter a calma durante o processo"
  }
];

const LearningSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-lg text-muted-foreground font-montserrat font-light">
              Um guia completo com tudo o que você precisa para transformar as noites da sua família
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-dreamy transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-gradient-dreamy rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-montserrat font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LearningSection;