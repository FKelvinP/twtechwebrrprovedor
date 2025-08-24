import { Button } from "@/components/ui/button";
import { MessageCircle, Zap } from "lucide-react";
const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };
  const scrollToPlanos = () => {
    const element = document.getElementById("planos");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-tech-gradient opacity-10"></div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-tech-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-tech-blue/20 rounded-full blur-xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 mt-20">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-tech-gradient bg-clip-text text-zinc-50 font-bold block">
            Internet Fibra Óptica
          </span>
          <span className="text-zinc-50 font-bold block">de Qualidade!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl mb-8 max-w-3xl mx-auto font-bold md:text-xl text-zinc-50">
          Sem cortes. Sem enrolação. Só velocidade!
        </p>

        {/* Quote */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-zinc-50">
            "Conectamos você com o mundo sem burocracia e com suporte humano!"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToPlanos} className="bg-tech-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg shadow-glow">
            <Zap className="w-5 h-5 mr-2" />
            Ver Planos
          </Button>
          <Button onClick={handleWhatsAppClick} className="bg-tech-green hover:bg-tech-green/90 text-white font-semibold px-8 py-6 text-lg">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>

        {/* Features badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 backdrop-blur-sm border border-border rounded-lg p-4 bg-[#2bd614]/[0.08]">
            <div className="w-3 h-3 bg-tech-green rounded-full"></div>
            <span className="text-sm font-extrabold text-yellow-50 text-center">Sem Taxa de Instalação</span>
          </div>
          <div className="flex items-center justify-center space-x-3 backdrop-blur-sm border border-border rounded-lg p-4 bg-[#6514d6]/[0.08]">
            <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
            <span className="text-sm font-extrabold">Conexão Estável</span>
          </div>
          <div className="flex items-center justify-center space-x-3 backdrop-blur-sm border border-border rounded-lg p-4 bg-[#eb6f22]/[0.12]">
            <div className="w-3 h-3 bg-tech-orange rounded-full"></div>
            <span className="text-sm font-extrabold">Suporte Humano</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;