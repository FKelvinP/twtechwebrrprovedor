import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Clock, Award, Heart, CheckCircle, Banknote } from "lucide-react";
const BeneficiosSection = () => {
  const beneficios = [{
    icon: <Zap className="w-12 h-12 text-tech-blue" />,
    title: "Instalação Rápida",
    description: "Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade."
  }, {
    icon: <Shield className="w-12 h-12 text-tech-purple" />,
    title: "Qualidade Garantida",
    description: "Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7."
  }, {
    icon: <Users className="w-12 h-12 text-tech-orange" />,
    title: "Atendimento Humano",
    description: "Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas."
  }, {
    icon: <Clock className="w-12 h-12 text-tech-blue" />,
    title: "Suporte Rápido",
    description: "Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real."
  }, {
    icon: <Award className="w-12 h-12 text-tech-purple" />,
    title: "Sem Burocracia",
    description: "Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp."
  }, {
    icon: <Heart className="w-12 h-12 text-tech-orange" />,
    title: "Compromisso com Você",
    description: "Nosso compromisso é sua satisfação. Internet de qualidade com preço justo."
  }, {
    icon: <CheckCircle className="w-12 h-12 text-tech-green" />,
    title: "Sem Contrato de Fidelidade",
    description: "Liberdade total! Cancele quando quiser, sem multas ou burocracia."
  }, {
    icon: <Banknote className="w-12 h-12 text-tech-purple" />,
    title: "Sem Multa de Quebra de Contrato",
    description: "Transparência total. Sem surpresas ou taxas escondidas na rescisão."
  }];
  return <section id="beneficios" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Que Escolher<br />
            <span className="bg-tech-gradient bg-clip-text text-zinc-50">a Tech Web?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-bold text-zinc-50">
            Mais do que internet rápida, oferecemos uma experiência completa de conectividade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {beneficios.map((beneficio, index) => <Card key={index} className="bg-card/30 backdrop-blur-sm border border-border hover:border-tech-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-card group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {beneficio.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Stability Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Card - Stability */}
            <Card className="bg-card/30 backdrop-blur-sm border border-border p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-tech-blue mb-4">
                  Chega de Instabilidade!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Conheça nossos planos com conexão estável e suporte de verdade.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-tech-blue/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                  </div>
                  <span className="text-foreground">Fibra óptica dedicada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-tech-purple" />
                  <span className="text-foreground">99.9% de uptime garantido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-tech-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-tech-orange rounded-full"></div>
                  </div>
                  <span className="text-foreground">Sem oscilações de velocidade</span>
                </div>
              </div>
            </Card>

            {/* Right Card - Coverage */}
            <Card className="bg-card/30 backdrop-blur-sm border border-border p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-tech-blue mb-4">
                  Áreas Atendidas
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Nova Cidade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Operário</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Bela Vista</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Raiar do Sol</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">São Bento (Brigadeiro)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Dr° Airton Rocha</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Vila Primavera</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Flores</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Prof. Araceli Souto Maior</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Distrito Industrial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-tech-green" />
                    <span className="text-sm text-foreground">Pérola (todos)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default BeneficiosSection;