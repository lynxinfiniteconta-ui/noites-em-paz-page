import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import momTestimonial from "@/assets/testimonial-mom1.jpg";
import dadTestimonial from "@/assets/testimonial-dad1.jpg";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Mãe da Sofia, 8 meses",
    image: momTestimonial,
    content: "Depois de meses sem dormir direito, encontrei este ebook e mudou nossa vida completamente. Sofia agora dorme a noite toda e nossa família está muito mais feliz!",
    rating: 5
  },
  {
    name: "Ricardo Santos",
    role: "Pai do Miguel, 1 ano",
    image: dadTestimonial,
    content: "As técnicas são realmente gentis e eficazes. Em uma semana já vimos diferença. Agora Miguel tem uma rotina consistente e todos dormimos melhor.",
    rating: 5
  },
  {
    name: "Ana Paula Costa",
    role: "Mãe dos gêmeos Lucas e Lara, 6 meses",
    content: "Pensei que seria impossível com gêmeos, mas o método funcionou perfeitamente. As dicas são práticas e fáceis de seguir, mesmo com duas crianças.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Famílias que Transformaram suas Noites
          </h2>
          <p className="text-lg text-muted-foreground font-montserrat font-light max-w-2xl mx-auto">
            Veja o que outros pais estão dizendo sobre suas experiências com nosso método
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-dreamy transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-gentle-rose" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-soft-lilac mb-4" />
                
                <p className="text-muted-foreground font-montserrat font-light leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-montserrat font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-warm-beige rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-baby-blue rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-soft-lilac rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-mint-green rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gentle-rose rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                +10K
              </div>
            </div>
            <span className="font-montserrat font-medium text-foreground ml-2">
              Mais de 10.000 famílias já transformaram suas noites
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;