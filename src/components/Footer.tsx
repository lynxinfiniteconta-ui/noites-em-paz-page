import { Moon, Heart, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-sky text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-dreamy rounded-full flex items-center justify-center">
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-playfair font-semibold text-lg sm:text-xl">
                Meu Filho Não Dorme
              </span>
            </div>
            <p className="text-gray-300 font-montserrat font-light leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Ajudando famílias a encontrar noites tranquilas através de métodos gentis 
              e cientificamente comprovados para o sono infantil.
            </p>
            <div className="flex items-center gap-2 text-soft-lilac">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-montserrat font-light text-sm sm:text-base">
                Feito com amor para famílias
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-4 sm:mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-gray-300 hover:text-baby-blue transition-colors font-montserrat">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-baby-blue transition-colors font-montserrat">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-baby-blue transition-colors font-montserrat">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#garantia" className="text-gray-300 hover:text-baby-blue transition-colors font-montserrat">
                  Garantia
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-base sm:text-lg mb-4 sm:mb-6">Siga-nos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-baby-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-baby-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-baby-blue transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 font-montserrat font-light">
            © 2025 Hydr4 Lab. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 font-montserrat font-light text-sm mt-2">
            Este produto não substitui orientações médicas profissionais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;