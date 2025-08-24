import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Search } from "lucide-react";
const PlanosSection = () => {
  const handleContratarClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };
  const planos = [{
    name: "Start 200",
    speed: "200 MB",
    price: "R$ 80,00",
    period: "/mês",
    features: ["Ideal para uso básico e residencial", "Navegação em sites e redes sociais", "Aplicativos de mensagens (WhatsApp, Instagram, etc.)", "Sem limite de dados"],
    isPopular: false
  }, {
    name: "Turbo 300",
    speed: "300 MB",
    price: "R$ 100,00",
    period: "/mês",
    features: ["Tudo do Start 200", "Maior velocidade e estabilidade", "Chamadas de vídeo sem travamentos", "Sem limite de dados"],
    isPopular: false
  }, {
    name: "Ultra 500",
    speed: "500 MB",
    price: "R$ 140,00",
    period: "/mês",
    features: ["Tudo do Turbo 300", "Ideal para home office", "Melhor desempenho em jogos online", "Sem limite de dados"],
    isPopular: true
  }, {
    name: "Power 800",
    speed: "800 MB",
    price: "R$ 170,00",
    period: "/mês",
    features: ["Tudo do Ultra 500", "Transmissão em alta definição", "Ideal para pequenas empresas, estúdios e escritórios", "Upload mais rápido de arquivos e vídeos", "Múltiplos streamings simultâneos", "Sem limite de dados"],
    isPopular: false
  }, {
    name: "Giga Pro",
    speed: "1 GIGA",
    price: "R$ 200,00",
    period: "/mês",
    features: ["Tudo do Power 800", "Suporta uso intenso com muitos usuários conectados", "Preparado para grandes volumes de tráfego, backup em nuvem e servidores locais", "Ideal para empresas, streamers, gamers, monitoramento 24h e uso profissional intenso", "Compatível com CFTV IP e videomonitoramento", "Sem limite de dados"],
    isPopular: false
  }];
  return <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">Nossos Planos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para sua necessidade. Todos com fibra óptica e suporte completo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {planos.map((plano, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow flex flex-col h-full ${plano.isPopular ? 'border-tech-purple shadow-glow bg-card/50' : 'border-border bg-card/30 hover:border-tech-purple/50'}`}>
              {plano.isPopular && <Badge className="absolute top-4 right-4 bg-tech-gradient text-white px-3 py-1">
                  Mais Popular
                </Badge>}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {plano.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${plano.isPopular ? 'text-tech-blue' : 'text-tech-blue'}`}>
                    {plano.speed}
                  </span>
                </div>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className={`text-2xl font-bold ${plano.isPopular ? 'text-tech-purple' : 'text-tech-purple'}`}>
                    {plano.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{plano.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 flex-1 flex flex-col">
                <div className="flex-1 space-y-3">
                  {plano.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-tech-green mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>)}
                </div>

                <Button onClick={handleContratarClick} className={`w-full mt-4 font-semibold text-sm ${plano.isPopular ? 'bg-tech-gradient hover:opacity-90 text-white shadow-glow' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'}`}>
                  <Search className="w-4 h-4 mr-2" />
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto bg-transparent">
            <h3 className="text-2xl mb-4 font-bold text-green-500">Dúvidas sobre qual plano escolher?</h3>
            <p className="mb-6 font-bold text-base text-green-500">
              Fale agora com nosso time e instale ainda hoje!
            </p>
            <Button onClick={handleContratarClick} className="bg-tech-green hover:bg-tech-green/90 text-white font-semibold px-8 py-3">
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default PlanosSection;