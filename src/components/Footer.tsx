import { Moon, Heart, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-sky text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-dreamy rounded-full flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <span className="font-playfair font-semibold text-xl">
                Meu Filho Não Dorme
              </span>
            </div>
            <p className="text-gray-300 font-montserrat font-light leading-relaxed mb-6 max-w-md">
              Ajudando famílias a encontrar noites tranquilas através de métodos gentis 
              e cientificamente comprovados para o sono infantil.
            </p>
            <div className="flex items-center gap-2 text-soft-lilac">
              <Heart className="w-5 h-5" />
              <span className="font-montserrat font-light">
                Feito com amor para famílias
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Links Úteis</h3>
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
            <h3 className="font-montserrat font-semibold text-lg mb-6">Siga-nos</h3>
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
                <Youtube className="w-5 h-5" />
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