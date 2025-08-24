import { MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToSectionAndCloseMenu = (sectionId: string) => {
    // Fecha o menu imediatamente
    setIsMenuOpen(false);

    // Aguarda um pouco para o menu fechar antes de fazer o scroll
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);
  };
  return <header className="relative bg-card/50 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between text-[#ae0927]/[0.86]">
        {/* Logo */}
        <div className="flex items-center space-x-2 lg:space-x-3 flex-1 min-w-0">
          <img src="/lovable-uploads/7fe381d9-6c03-4881-ad78-164735302f32.png" alt="TechWeb Logo" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight text-[#7b1709]/[0.92]">
              TECHWEB
            </h1>
            <p className="sm:text-sm leading-tight truncate text-[#6b1500]/90 text-lg lg:text-xl font-bold">
              Provedor Internet Fibra Óptica
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <button onClick={() => scrollToSection("inicio")} className="transition-colors font-bold text-tech-blue hover:text-tech-purple text-lg xl:text-xl px-2 py-1 rounded">
            Início
          </button>
          <button onClick={() => scrollToSection("planos")} className="transition-colors font-bold text-tech-purple hover:text-tech-blue text-lg xl:text-xl px-2 py-1 rounded">
            Planos
          </button>
          <button onClick={() => scrollToSection("beneficios")} className="transition-colors font-bold text-tech-blue hover:text-tech-purple text-lg xl:text-xl px-2 py-1 rounded">
            Benefícios
          </button>
          <button onClick={() => scrollToSection("contato")} className="transition-colors font-bold text-tech-orange hover:text-tech-purple text-lg xl:text-xl px-2 py-1 rounded">
            Contato
          </button>
        </nav>

        {/* Mobile Menu and WhatsApp */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col space-y-4 mt-8">
                <button onClick={() => scrollToSectionAndCloseMenu("inicio")} className="transition-colors font-bold text-tech-blue hover:bg-muted text-left text-xl py-3 px-2 rounded">
                  Início
                </button>
                <button onClick={() => scrollToSectionAndCloseMenu("planos")} className="transition-colors font-bold text-tech-purple hover:bg-muted text-left text-xl py-3 px-2 rounded">
                  Planos
                </button>
                <button onClick={() => scrollToSectionAndCloseMenu("beneficios")} className="transition-colors font-bold text-tech-blue hover:bg-muted text-left text-xl py-3 px-2 rounded">
                  Benefícios
                </button>
                <button onClick={() => scrollToSectionAndCloseMenu("contato")} className="transition-colors font-bold text-tech-orange hover:bg-muted text-left text-xl py-3 px-2 rounded">
                  Contato
                </button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* WhatsApp Button */}
          <Button onClick={handleWhatsAppClick} className="bg-tech-green hover:bg-tech-green/90 text-white font-semibold px-3 sm:px-4 lg:px-6 py-2 shrink-0 flex items-center justify-center min-w-[44px]" size="sm">
            <MessageCircle className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline text-xs lg:text-sm whitespace-nowrap">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;