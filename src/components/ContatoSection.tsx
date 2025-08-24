import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";
const ContatoSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };
  const handleEmailClick = () => {
    window.open("mailto:provedortechweb@gmail.com", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://instagram.com/techwebrr", "_blank");
  };
  const handleMapsClick = () => {
    window.open("https://maps.google.com/?q=R. Belo Horizonte, 225A, Nova Cidade, Boa Vista - RR", "_blank");
  };
  return <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent">Entre em Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para conectar você com a melhor internet da região!
          </p>
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-tech-gradient-cta border-none overflow-hidden">
            <CardContent className="p-8 text-center bg-[#000a00]/[0.63]">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                💬 Fale Agora com Nosso Time!
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Instalação ainda hoje! Atendimento humano e suporte rápido via WhatsApp.
              </p>
              <div className="flex justify-center">
                <Button onClick={handleWhatsAppClick} className="bg-tech-green hover:bg-tech-green/90 text-white font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg w-full max-w-xs flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* WhatsApp */}
          <Card className="bg-card/30 backdrop-blur-sm border border-border hover:border-tech-green/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-tech-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-tech-blue font-semibold mb-2">(95) 99169-1553</p>
              <p className="text-muted-foreground text-sm mb-4">
                Atendimento rápido e humanizado
              </p>
              <Button onClick={handleWhatsAppClick} className="bg-tech-green hover:bg-tech-green/90 text-white w-full">
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Gmail */}
          <Card className="bg-card/30 backdrop-blur-sm border border-border hover:border-tech-orange/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-tech-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gmail</h3>
              <p className="text-tech-blue font-semibold mb-2 text-sm break-all">
                provedortechweb@gmail.com
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Suporte técnico e comercial
              </p>
              <Button onClick={handleEmailClick} className="w-full text-zinc-50 bg-[#dd600c]/35">
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="bg-card/30 backdrop-blur-sm border border-border hover:border-tech-purple/50 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-tech-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-tech-blue font-semibold mb-2">@techwebrr</p>
              <p className="text-muted-foreground text-sm mb-4">
                Novidades e promoções
              </p>
              <Button onClick={handleInstagramClick} className="bg-tech-purple hover:bg-tech-purple/90 text-white w-full">
                Seguir no Instagram
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Address and Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Address */}
          <Card className="bg-card/30 backdrop-blur-sm border border-border">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-tech-orange/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-tech-orange" />
                </div>
                <h3 className="text-2xl font-bold">Nosso Endereço</h3>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-foreground font-medium">R. Belo Horizonte, 225A</p>
                <p className="text-foreground">Nova Cidade (Próximo à Praça)</p>
                <p className="text-muted-foreground">Boa Vista - RR</p>
              </div>

              <Button onClick={handleMapsClick} variant="outline" className="w-full border-tech-orange text-tech-orange hover:bg-tech-orange hover:text-white">
                Ver no Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="bg-card/30 backdrop-blur-sm border border-border">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-tech-purple" />
                </div>
                <h3 className="text-2xl font-bold">Horário de Atendimento</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Segunda a Sábado:</span>
                  <span className="text-tech-blue font-semibold">7h às 21h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Domingo:</span>
                  <span className="text-tech-blue font-semibold">8h às 17h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">WhatsApp:</span>
                  <span className="text-tech-green font-semibold">24h/dia</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-bold text-[#11e16c]/[0.59]">
                    Emergências técnicas: WhatsApp 24h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContatoSection;