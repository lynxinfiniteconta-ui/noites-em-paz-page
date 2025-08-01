import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "A partir de que idade posso usar as técnicas do ebook?",
    answer: "O ebook contém técnicas adequadas para bebês desde o nascimento até 6 anos, com seções específicas para cada faixa etária. Cada método é adaptado para o desenvolvimento da criança."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria das famílias relatam melhorias significativas nos primeiros 7 dias. No entanto, cada bebê é único, e alguns podem levar até 2-3 semanas para estabelecer completamente a nova rotina."
  },
  {
    question: "As técnicas envolvem deixar o bebê chorar?",
    answer: "Não! Nosso método é baseado em técnicas gentis que respeitam as necessidades emocionais do bebê. Focamos em criar segurança e conforto durante todo o processo."
  },
  {
    question: "O que fazer se meu bebê tem necessidades especiais?",
    answer: "O ebook inclui adaptações para diferentes necessidades e situações especiais. Sempre recomendamos consultar o pediatra antes de iniciar qualquer nova rotina."
  },
  {
    question: "Posso usar o método se amamendo durante a madrugada?",
    answer: "Sim! O ebook aborda especificamente como integrar a amamentação noturna com uma rotina de sono saudável, mantendo o vínculo e a nutrição adequada."
  },
  {
    question: "E se eu tiver mais de um filho?",
    answer: "Incluímos estratégias específicas para famílias com múltiplas crianças, incluindo irmãos de idades diferentes e até mesmo gêmeos."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-16 h-16 bg-gradient-dreamy rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground font-montserrat font-light">
            Esclarecemos as principais questões sobre nosso método
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-0 bg-card rounded-2xl shadow-soft hover:shadow-dreamy transition-all duration-300 px-6"
            >
              <AccordionTrigger className="text-left font-montserrat font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-montserrat font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;