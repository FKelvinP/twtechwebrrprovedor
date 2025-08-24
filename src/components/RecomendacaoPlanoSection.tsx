import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Wifi, Users, Search } from "lucide-react";

interface FormData {
  dispositivos: number;
  atividades: string;
  orcamento?: number;
}

interface PlanoRecomendado {
  name: string;
  speed: string;
  price: string;
  period: string;
  justificativa: string;
  features: string[];
}

const RecomendacaoPlanoSection = () => {
  const [recomendacao, setRecomendacao] = useState<PlanoRecomendado | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  
  const planos = [
    {
      name: "Start 200",
      speed: "200 MB",
      price: "R$ 80,00",
      period: "/mês",
      features: ["Ideal para uso básico e residencial", "Navegação em sites e redes sociais", "Aplicativos de mensagens", "Sem limite de dados"],
      valor: 80,
      capacidade: 1
    },
    {
      name: "Turbo 300",
      speed: "300 MB", 
      price: "R$ 100,00",
      period: "/mês",
      features: ["Maior velocidade e estabilidade", "Chamadas de vídeo sem travamentos", "Streaming básico", "Sem limite de dados"],
      valor: 100,
      capacidade: 2
    },
    {
      name: "Ultra 500",
      speed: "500 MB",
      price: "R$ 140,00",
      period: "/mês", 
      features: ["Ideal para home office", "Melhor desempenho em jogos online", "Streaming em HD", "Sem limite de dados"],
      valor: 140,
      capacidade: 3
    },
    {
      name: "Power 800",
      speed: "800 MB",
      price: "R$ 170,00",
      period: "/mês",
      features: ["Transmissão em alta definição", "Ideal para pequenas empresas", "Upload rápido de arquivos", "Múltiplos streamings simultâneos"],
      valor: 170,
      capacidade: 4
    },
    {
      name: "Giga Pro",
      speed: "1 GIGA",
      price: "R$ 200,00", 
      period: "/mês",
      features: ["Suporta uso intenso", "Grandes volumes de tráfego", "Ideal para empresas e streamers", "CFTV IP e videomonitoramento"],
      valor: 200,
      capacidade: 5
    }
  ];

  const analisarNecessidades = (data: FormData): PlanoRecomendado => {
    let pontuacao = 0;
    let justificativas: string[] = [];
    
    // Análise por número de dispositivos
    if (data.dispositivos <= 2) {
      pontuacao += 1;
      justificativas.push(`Com ${data.dispositivos} dispositivo(s), um plano básico atende bem suas necessidades`);
    } else if (data.dispositivos <= 5) {
      pontuacao += 2;
      justificativas.push(`Para ${data.dispositivos} dispositivos conectados, você precisa de maior largura de banda`);
    } else if (data.dispositivos <= 8) {
      pontuacao += 3;
      justificativas.push(`Com ${data.dispositivos} dispositivos, é essencial ter velocidade suficiente para todos`);
    } else {
      pontuacao += 4;
      justificativas.push(`${data.dispositivos} dispositivos exigem um plano robusto para garantir estabilidade`);
    }
    
    // Análise das atividades
    const atividades = data.atividades.toLowerCase();
    
    if (atividades.includes('4k') || atividades.includes('streaming') || atividades.includes('netflix')) {
      pontuacao += 2;
      justificativas.push('Streaming em alta qualidade demanda maior velocidade');
    }
    
    if (atividades.includes('jogo') || atividades.includes('game') || atividades.includes('gaming')) {
      pontuacao += 2;
      justificativas.push('Jogos online necessitam baixa latência e boa velocidade');
    }
    
    if (atividades.includes('trabalho') || atividades.includes('home office') || atividades.includes('videoconferência')) {
      pontuacao += 1;
      justificativas.push('Trabalho remoto precisa de conexão estável');
    }
    
    if (atividades.includes('empresa') || atividades.includes('escritório') || atividades.includes('negócio')) {
      pontuacao += 3;
      justificativas.push('Uso empresarial requer maior capacidade');
    }
    
    // Análise do orçamento
    if (data.orcamento) {
      const planosNoOrcamento = planos.filter(p => p.valor <= data.orcamento!);
      if (planosNoOrcamento.length > 0) {
        const melhorNoOrcamento = planosNoOrcamento[planosNoOrcamento.length - 1];
        pontuacao = Math.min(pontuacao, melhorNoOrcamento.capacidade);
        justificativas.push(`Considerando seu orçamento de R$ ${data.orcamento}, esta é a melhor opção custo-benefício`);
      }
    }
    
    // Determinar plano baseado na pontuação
    let planoEscolhido = planos[Math.min(pontuacao - 1, planos.length - 1)];
    if (pontuacao === 0) planoEscolhido = planos[0];
    
    // Justificativas específicas por plano
    const gerarJustificativaEspecifica = (plano: typeof planoEscolhido): string => {
      const baseJustificativa = justificativas.join('. ');
      
      switch (plano.name) {
        case "Start 200":
          return `${baseJustificativa}. O plano Start 200MB é perfeito para uso residencial básico, oferecendo velocidade suficiente para navegação, redes sociais e aplicativos de mensagens. Ideal para quem busca economia sem abrir mão da qualidade da fibra óptica.`;
          
        case "Turbo 300":
          return `${baseJustificativa}. O Turbo 300MB oferece 50% mais velocidade que o plano básico, garantindo chamadas de vídeo sem travamentos e streaming básico. É o equilíbrio perfeito entre custo e performance para famílias pequenas.`;
          
        case "Ultra 500":
          return `${baseJustificativa}. O Ultra 500MB é especializado para home office e gaming casual, com velocidade robusta para videoconferências profissionais e streaming em HD simultâneo. Upload otimizado para trabalho remoto eficiente.`;
          
        case "Power 800":
          return `${baseJustificativa}. O Power 800MB suporta múltiplas transmissões em alta definição simultaneamente, ideal para pequenas empresas ou residências com uso intenso. Velocidade de upload superior para envio rápido de arquivos grandes.`;
          
        case "Giga Pro":
          return `${baseJustificativa}. O Giga Pro 1GB é nossa solução premium para uso empresarial e streamers profissionais. Suporta grandes volumes de tráfego, sistemas de monitoramento IP e múltiplos usuários simultâneos sem perda de performance.`;
          
        default:
          return baseJustificativa;
      }
    };
    
    return {
      name: planoEscolhido.name,
      speed: planoEscolhido.speed,
      price: planoEscolhido.price,
      period: planoEscolhido.period,
      features: planoEscolhido.features,
      justificativa: gerarJustificativaEspecifica(planoEscolhido)
    };
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const recomendacaoGerada = analisarNecessidades(data);
    setRecomendacao(recomendacaoGerada);
    setIsLoading(false);
  };

  const handleContratarClick = () => {
    window.open("https://wa.me/5595991691553", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Não sabe qual plano escolher?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deixe nossa inteligência artificial encontrar o plano perfeito para você. 
            Responda algumas perguntas e receba uma recomendação personalizada em segundos.
          </p>
        </div>

        {/* Content */}
        <div className={`max-w-6xl mx-auto ${recomendacao ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'max-w-2xl'}`}>
          {/* Formulário */}
          <Card className="border-border bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-tech-purple" />
                Encontre seu plano ideal
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Preencha os campos abaixo.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Dispositivos */}
                <div className="space-y-2">
                  <Label htmlFor="dispositivos" className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Quantos dispositivos usarão a internet?
                  </Label>
                  <Input
                    id="dispositivos"
                    type="number"
                    min="1"
                    max="50"
                    {...register("dispositivos", { 
                      required: "Este campo é obrigatório",
                      min: { value: 1, message: "Mínimo 1 dispositivo" },
                      valueAsNumber: true
                    })}
                    className="text-center text-lg font-semibold"
                    placeholder="Ex: 5"
                  />
                  {errors.dispositivos && (
                    <p className="text-sm text-destructive">{errors.dispositivos.message}</p>
                  )}
                </div>

                {/* Atividades */}
                <div className="space-y-2">
                  <Label htmlFor="atividades" className="text-sm font-medium flex items-center gap-2">
                    <Wifi className="w-4 h-4" />
                    Quais são suas principais atividades online?
                  </Label>
                  <Textarea
                    id="atividades"
                    rows={4}
                    {...register("atividades", { 
                      required: "Descreva suas principais atividades online",
                      minLength: { value: 10, message: "Descreva com mais detalhes (mínimo 10 caracteres)" }
                    })}
                    placeholder="Ex: Streaming de vídeos em 4K, jogos online, videoconferências e navegação em redes sociais."
                    className="resize-none"
                  />
                  {errors.atividades && (
                    <p className="text-sm text-destructive">{errors.atividades.message}</p>
                  )}
                </div>

                {/* Orçamento */}
                <div className="space-y-2">
                  <Label htmlFor="orcamento" className="text-sm font-medium">
                    Qual seu orçamento mensal (opcional)?
                  </Label>
                  <Input
                    id="orcamento"
                    type="number"
                    min="50"
                    max="500"
                    {...register("orcamento", { valueAsNumber: true })}
                    placeholder="Ex: 120"
                    className="text-center"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-tech-gradient hover:opacity-90 text-white font-semibold py-3 text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analisando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Recomendar Plano
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recomendação */}
          {recomendacao && (
            <Card className="border-tech-purple bg-tech-gradient/10 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-tech-purple" />
                  <span className="text-tech-purple font-semibold">Plano Recomendado</span>
                </div>
                <CardTitle className="text-center text-white text-3xl font-bold">
                  {recomendacao.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-tech-blue">{recomendacao.speed}</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-white">{recomendacao.price}</span>
                  <span className="text-white/80 ml-1">{recomendacao.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Justificativa:</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {recomendacao.justificativa}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Características:</h4>
                  <ul className="space-y-1">
                    {recomendacao.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-white/90 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-tech-green mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={handleContratarClick}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold py-3"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Contratar Agora
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {recomendacao && (
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Quer ver todos os nossos planos disponíveis?
            </p>
            <Button
              variant="outline"
              onClick={() => {
                const planosSection = document.getElementById('planos');
                planosSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-tech-purple text-tech-purple hover:bg-tech-purple/10"
            >
              Ver Todos os Planos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecomendacaoPlanoSection;