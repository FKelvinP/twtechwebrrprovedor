import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { X, MessageCircle, Send, Phone } from 'lucide-react';
import { whatsapp360, TECHWEB_WHATSAPP, MESSAGE_TEMPLATES } from '@/lib/whatsapp360';
import { useToast } from '@/hooks/use-toast';
import assistenteAvatar from '/lovable-uploads/d74c8057-5cab-4b94-99dd-22a03105a474.png';

interface FlowOption {
  label: string;
  next: string;
}

interface FlowInput {
  type: 'text' | 'phone';
  onSubmit: string;
}

interface Flow {
  id: string;
  message: string;
  options?: FlowOption[];
  input?: FlowInput;
}

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

const assistantFlows: Flow[] = [
  {
    id: "inicio",
    message: "Olá! Eu sou o Kelv, assistente virtual da TechWeb Internet. Como posso ajudar hoje?",
    options: [
      { label: "Ver planos de internet", next: "planos" },
      { label: "Suporte técnico", next: "suporte" },
      { label: "Falar com atendente", next: "atendente" }
    ]
  },
  {
    id: "planos",
    message: "Qual plano de internet você tem interesse?",
    options: [
      { label: "Plano Básico - 100MB - R$ 59,90", next: "plano_basico" },
      { label: "Plano Família - 300MB - R$ 89,90", next: "plano_familia" },
      { label: "Plano Premium - 500MB - R$ 129,90", next: "plano_premium" },
      { label: "Plano Ultra - 1GB - R$ 189,90", next: "plano_ultra" },
      { label: "Voltar", next: "inicio" }
    ]
  },
  {
    id: "plano_basico",
    message: "Excelente escolha! O Plano Básico de 100MB por R$ 59,90/mês é ideal para uso básico. Deseja contratar?",
    options: [
      { label: "Sim, quero contratar", next: "contratar_basico" },
      { label: "Ver outros planos", next: "planos" },
      { label: "Voltar ao início", next: "inicio" }
    ]
  },
  {
    id: "plano_familia",
    message: "Ótima opção! O Plano Família de 300MB por R$ 89,90/mês é perfeito para toda família. Deseja contratar?",
    options: [
      { label: "Sim, quero contratar", next: "contratar_familia" },
      { label: "Ver outros planos", next: "planos" },
      { label: "Voltar ao início", next: "inicio" }
    ]
  },
  {
    id: "plano_premium",
    message: "Excelente escolha! O Plano Premium de 500MB por R$ 129,90/mês oferece alta velocidade. Deseja contratar?",
    options: [
      { label: "Sim, quero contratar", next: "contratar_premium" },
      { label: "Ver outros planos", next: "planos" },
      { label: "Voltar ao início", next: "inicio" }
    ]
  },
  {
    id: "plano_ultra",
    message: "Perfeito! O Plano Ultra de 1GB por R$ 189,90/mês é nossa opção mais completa. Deseja contratar?",
    options: [
      { label: "Sim, quero contratar", next: "contratar_ultra" },
      { label: "Ver outros planos", next: "planos" },
      { label: "Voltar ao início", next: "inicio" }
    ]
  },
  {
    id: "contratar_basico",
    message: "Perfeito! Para finalizar a contratação do Plano Básico, informe seu telefone para contato via WhatsApp:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_basico"
    }
  },
  {
    id: "contratar_familia",
    message: "Perfeito! Para finalizar a contratação do Plano Família, informe seu telefone para contato via WhatsApp:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_familia"
    }
  },
  {
    id: "contratar_premium",
    message: "Perfeito! Para finalizar a contratação do Plano Premium, informe seu telefone para contato via WhatsApp:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_premium"
    }
  },
  {
    id: "contratar_ultra",
    message: "Perfeito! Para finalizar a contratação do Plano Ultra, informe seu telefone para contato via WhatsApp:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_ultra"
    }
  },
  {
    id: "suporte",
    message: "Que tipo de suporte você precisa?",
    options: [
      { label: "Internet lenta", next: "suporte_lenta" },
      { label: "Sem conexão", next: "suporte_conexao" },
      { label: "Problemas técnicos", next: "suporte_tecnico" },
      { label: "Voltar", next: "inicio" }
    ]
  },
  {
    id: "suporte_lenta",
    message: "Para problemas de velocidade, recomendo: 1) Reiniciar o roteador 2) Verificar cabos 3) Testar velocidade. Se persistir, nosso técnico pode ajudar via WhatsApp.",
    options: [
      { label: "Falar com técnico", next: "contato_tecnico" },
      { label: "Voltar", next: "suporte" }
    ]
  },
  {
    id: "suporte_conexao",
    message: "Para problemas de conexão: 1) Verifique se todos os cabos estão conectados 2) Reinicie o roteador 3) Aguarde 2 minutos. Ainda sem conexão?",
    options: [
      { label: "Falar com técnico", next: "contato_tecnico" },
      { label: "Problema resolvido", next: "inicio" }
    ]
  },
  {
    id: "suporte_tecnico",
    message: "Descreva o problema técnico que está enfrentando:",
    input: {
      type: "text",
      onSubmit: "registrar_suporte"
    }
  },
  {
    id: "contato_tecnico",
    message: "Vou direcioná-lo para nosso suporte técnico via WhatsApp. Informe seu telefone:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_suporte"
    }
  },
  {
    id: "atendente",
    message: "Vou conectá-lo com nosso atendimento via WhatsApp. Informe seu telefone:",
    input: {
      type: "phone",
      onSubmit: "enviar_whatsapp_atendente"
    }
  }
];

export const AssistenteVirtual: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentFlow, setCurrentFlow] = useState<string>('inicio');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialFlow = assistantFlows.find(f => f.id === 'inicio');
      if (initialFlow) {
        addBotMessage(initialFlow.message);
      }
    }
  }, [isOpen]);

  const addBotMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (nextFlowId: string, optionLabel: string) => {
    addUserMessage(optionLabel);
    setCurrentFlow(nextFlowId);
    
    const nextFlow = assistantFlows.find(f => f.id === nextFlowId);
    if (nextFlow) {
      setTimeout(() => {
        addBotMessage(nextFlow.message);
      }, 500);
    }
  };

  const handleInputSubmit = async (action: string) => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    setIsLoading(true);

    try {
      const cleanPhone = inputValue.replace(/\D/g, '');
      
      switch (action) {
        case 'enviar_whatsapp_basico':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.planInfo('Plano Básico 100MB', 'R$ 59,90'));
          addBotMessage('Perfeito! Enviei suas informações para nosso WhatsApp. Nossa equipe entrará em contato em breve para finalizar a contratação do Plano Básico.');
          break;
        case 'enviar_whatsapp_familia':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.planInfo('Plano Família 300MB', 'R$ 89,90'));
          addBotMessage('Perfeito! Enviei suas informações para nosso WhatsApp. Nossa equipe entrará em contato em breve para finalizar a contratação do Plano Família.');
          break;
        case 'enviar_whatsapp_premium':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.planInfo('Plano Premium 500MB', 'R$ 129,90'));
          addBotMessage('Perfeito! Enviei suas informações para nosso WhatsApp. Nossa equipe entrará em contato em breve para finalizar a contratação do Plano Premium.');
          break;
        case 'enviar_whatsapp_ultra':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.planInfo('Plano Ultra 1GB', 'R$ 189,90'));
          addBotMessage('Perfeito! Enviei suas informações para nosso WhatsApp. Nossa equipe entrará em contato em breve para finalizar a contratação do Plano Ultra.');
          break;
        case 'enviar_whatsapp_suporte':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.support('Solicitação de suporte técnico'));
          addBotMessage('Perfeito! Direcionei você para nosso suporte técnico via WhatsApp. Nossa equipe entrará em contato em breve.');
          break;
        case 'enviar_whatsapp_atendente':
          await sendWhatsAppMessage(cleanPhone, MESSAGE_TEMPLATES.contact());
          addBotMessage('Perfeito! Direcionei você para nosso atendimento via WhatsApp. Nossa equipe entrará em contato em breve.');
          break;
        case 'registrar_suporte':
          addBotMessage(`Registrei seu problema: "${inputValue}". Nossa equipe técnica analisará e retornará em breve. Deseja falar diretamente via WhatsApp?`);
          break;
      }
    } catch (error) {
      console.error('Erro ao processar ação:', error);
      addBotMessage('Houve um erro ao processar sua solicitação. Tente novamente ou entre em contato diretamente pelo WhatsApp.');
    }

    setInputValue('');
    setIsLoading(false);
  };

  const sendWhatsAppMessage = async (phone: string, message: string) => {
    try {
      // Redireciona para WhatsApp com a mensagem
      whatsapp360.redirectToWhatsApp(TECHWEB_WHATSAPP.phone, 
        `${message} - Cliente: ${phone}`);
      
      toast({
        title: "Redirecionando para WhatsApp",
        description: "Você será direcionado para nosso WhatsApp para continuar o atendimento.",
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem WhatsApp:', error);
      toast({
        title: "Erro",
        description: "Erro ao conectar com WhatsApp. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const getCurrentFlow = () => {
    return assistantFlows.find(f => f.id === currentFlow);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentFlow('inicio');
    const initialFlow = assistantFlows.find(f => f.id === 'inicio');
    if (initialFlow) {
      setTimeout(() => addBotMessage(initialFlow.message), 300);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg p-1"
        >
          <Avatar className="w-12 h-12">
            <AvatarImage src={assistenteAvatar} alt="Kelv - Assistente Virtual" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    );
  }

  const flow = getCurrentFlow();

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 h-96">
      <Card className="h-full flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={assistenteAvatar} alt="Kelv - Assistente Virtual" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm">Kelv - TechWeb</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={resetChat}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              Reiniciar
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardContent className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {flow?.options && (
              <div className="space-y-2">
                {flow.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3 text-sm"
                    onClick={() => handleOptionClick(option.next, option.label)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            )}

            {flow?.input && (
              <div className="flex gap-2">
                <Input
                  type={flow.input.type === 'phone' ? 'tel' : 'text'}
                  placeholder={flow.input.type === 'phone' ? 'Digite seu telefone...' : 'Digite sua mensagem...'}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleInputSubmit(flow.input!.onSubmit);
                    }
                  }}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  size="sm"
                  onClick={() => handleInputSubmit(flow.input!.onSubmit)}
                  disabled={isLoading || !inputValue.trim()}
                >
                  {flow.input.type === 'phone' ? <Phone className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};