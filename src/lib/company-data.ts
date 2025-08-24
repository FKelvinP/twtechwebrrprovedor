// Dados estruturados do site da TechWeb Internet
export const COMPANY_INFO = {
  name: "TechWeb Internet",
  phone: "5595991691553",
  email: "provedortechweb@gmail.com",
  instagram: "@techwebrr",
  address: {
    street: "R. Belo Horizonte, 225A",
    neighborhood: "Nova Cidade (Próximo à Praça)",
    city: "Boa Vista - RR"
  },
  hours: {
    weekdays: "Segunda a Sábado: 7h às 21h",
    sunday: "Domingo: 8h às 17h",
    whatsapp: "WhatsApp: 24h/dia",
    emergency: "Emergências técnicas: WhatsApp 24h"
  }
};

export const PLANS = [
  {
    name: "Start 200",
    speed: "200 MB",
    price: "R$ 80,00",
    period: "/mês",
    features: [
      "Ideal para uso básico e residencial",
      "Navegação em sites e redes sociais", 
      "Aplicativos de mensagens (WhatsApp, Instagram, etc.)",
      "Sem limite de dados"
    ],
    isPopular: false,
    recommended: "Ideal para 1-2 pessoas, uso básico"
  },
  {
    name: "Turbo 300", 
    speed: "300 MB",
    price: "R$ 100,00",
    period: "/mês",
    features: [
      "Tudo do Start 200",
      "Maior velocidade e estabilidade",
      "Chamadas de vídeo sem travamentos", 
      "Sem limite de dados"
    ],
    isPopular: false,
    recommended: "Ideal para 2-3 pessoas, vídeo chamadas"
  },
  {
    name: "Ultra 500",
    speed: "500 MB", 
    price: "R$ 140,00",
    period: "/mês",
    features: [
      "Tudo do Turbo 300",
      "Ideal para home office",
      "Melhor desempenho em jogos online",
      "Sem limite de dados"
    ],
    isPopular: true,
    recommended: "Ideal para 3-4 pessoas, home office e jogos"
  },
  {
    name: "Power 800",
    speed: "800 MB",
    price: "R$ 170,00", 
    period: "/mês",
    features: [
      "Tudo do Ultra 500",
      "Transmissão em alta definição",
      "Ideal para pequenas empresas, estúdios e escritórios",
      "Upload mais rápido de arquivos e vídeos",
      "Múltiplos streamings simultâneos",
      "Sem limite de dados"
    ],
    isPopular: false,
    recommended: "Ideal para pequenas empresas e uso intenso"
  },
  {
    name: "Giga Pro",
    speed: "1 GIGA",
    price: "R$ 200,00",
    period: "/mês", 
    features: [
      "Tudo do Power 800",
      "Suporta uso intenso com muitos usuários conectados",
      "Preparado para grandes volumes de tráfego, backup em nuvem e servidores locais",
      "Ideal para empresas, streamers, gamers, monitoramento 24h e uso profissional intenso",
      "Compatível com CFTV IP e videomonitoramento",
      "Sem limite de dados"
    ],
    isPopular: false,
    recommended: "Ideal para empresas e uso profissional intenso"
  }
];

export const BENEFITS = [
  {
    title: "Instalação Rápida",
    description: "Instalação profissional sem taxas ocultas. Técnicos qualificados e equipamentos de qualidade."
  },
  {
    title: "Qualidade Garantida", 
    description: "Fibra óptica de alta qualidade com estabilidade comprovada. Conexão confiável 24/7."
  },
  {
    title: "Atendimento Humano",
    description: "Suporte técnico com pessoas reais. Sem robôs, sem espera, só soluções rápidas."
  },
  {
    title: "Suporte Rápido",
    description: "Atendimento via WhatsApp com resposta imediata. Resolução de problemas em tempo real."
  },
  {
    title: "Sem Burocracia",
    description: "Processo simples e descomplicado. Contratação rápida direto pelo WhatsApp."
  },
  {
    title: "Compromisso com Você",
    description: "Nosso compromisso é sua satisfação. Internet de qualidade com preço justo."
  },
  {
    title: "Sem Contrato de Fidelidade",
    description: "Liberdade total! Cancele quando quiser, sem multas ou burocracia."
  },
  {
    title: "Sem Multa de Quebra de Contrato",
    description: "Transparência total. Sem surpresas ou taxas escondidas na rescisão."
  }
];

export const COVERAGE_AREAS = [
  "Nova Cidade",
  "Operário", 
  "Bela Vista",
  "Raiar do Sol",
  "São Bento (Brigadeiro)",
  "Dr° Airton Rocha",
  "Vila Primavera", 
  "Flores",
  "Prof. Araceli Souto Maior",
  "Distrito Industrial",
  "Pérola (todos)"
];

export const TECHNICAL_SPECS = {
  technology: "Fibra óptica dedicada",
  uptime: "99.9% de uptime garantido", 
  stability: "Sem oscilações de velocidade",
  support: "Suporte técnico 24h via WhatsApp",
  installation: "Instalação profissional sem taxas ocultas"
};