import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, Phone } from "lucide-react";
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };
  const handleEmailClick = () => {
    window.open("mailto:provedortechweb@gmail.com", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://instagram.com/techwebrr", "_blank");
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/5c653544-8852-4079-bad1-b25f5c653204.png" alt="TechWeb Logo" className="w-20 h-20 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-[#ff0d00]/[0.67]">TechWeb</h3>
                <p className="font-bold text-sm text-[#f95f05]/55">Provedor Internet Fibra Óptica</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button onClick={handleWhatsAppClick} className="bg-tech-green hover:bg-tech-green/90 text-white" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button onClick={handleInstagramClick} className="bg-tech-purple hover:bg-tech-purple/90 text-white" size="sm">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("inicio")} className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("planos")} className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("beneficios")} className="text-muted-foreground hover:text-primary transition-colors">
                  Benefícios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato Rápido</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tech-green" />
                <span className="text-muted-foreground text-sm">(95) 99169-1553</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tech-orange" />
                <span className="text-muted-foreground text-sm break-all">provedortechweb@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-0.5">
                  <div className="w-2 h-2 bg-tech-purple rounded-full mt-1"></div>
                </div>
                <span className="text-muted-foreground text-sm">
                  R. Belo Horizonte, 225A - Nova Cidade<br />
                  Boa Vista/RR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">TechWeb - Provedor Internet Fibra Óptica. Todos os direitos reservados.</div>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => scrollToSection("inicio")} className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("planos")} className="text-muted-foreground hover:text-primary transition-colors">
                Planos
              </button>
              <button onClick={() => scrollToSection("beneficios")} className="text-muted-foreground hover:text-primary transition-colors">
                Benefícios
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;