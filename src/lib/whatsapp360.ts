// Configuração para integração com 360Dialog WhatsApp API
export interface WhatsAppMessage {
  to: string;
  text: {
    body: string;
  };
  type: 'text';
}

export interface WhatsAppTemplateMessage {
  to: string;
  type: 'template';
  template: {
    name: string;
    language: {
      code: string;
    };
    components?: Array<{
      type: string;
      parameters: Array<{
        type: string;
        text: string;
      }>;
    }>;
  };
}

class WhatsApp360Dialog {
  private apiUrl: string;
  private apiKey: string;

  constructor() {
    // TODO: Configurar com suas credenciais da 360Dialog
    this.apiUrl = 'https://waba.360dialog.io/v1/messages';
    this.apiKey = process.env.WHATSAPP_360_API_KEY || 'YOUR_API_KEY_HERE';
  }

  async sendMessage(message: WhatsAppMessage): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'D360-API-KEY': this.apiKey,
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar mensagem via WhatsApp:', error);
      throw error;
    }
  }

  async sendTemplate(templateMessage: WhatsAppTemplateMessage): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'D360-API-KEY': this.apiKey,
        },
        body: JSON.stringify(templateMessage),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao enviar template via WhatsApp:', error);
      throw error;
    }
  }

  // Método para criar link direto do WhatsApp
  createWhatsAppLink(phoneNumber: string, message?: string): string {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  }

  // Método para redirecionar automaticamente para WhatsApp
  redirectToWhatsApp(phoneNumber: string, message?: string): void {
    const link = this.createWhatsAppLink(phoneNumber, message);
    window.open(link, '_blank');
  }
}

export const whatsapp360 = new WhatsApp360Dialog();

// Configurações padrão para a TechWeb
export const TECHWEB_WHATSAPP = {
  phone: '5595991691553', // Número real da TechWeb
  defaultMessage: 'Olá! Vim do site da TechWeb Internet e gostaria de mais informações sobre os planos de internet.',
};

// Templates de mensagens pré-definidas
export const MESSAGE_TEMPLATES = {
  planInfo: (planName: string, price: string) => 
    `Olá! Tenho interesse no ${planName} por ${price}. Podem me enviar mais detalhes?`,
  
  contact: () => 
    'Olá! Gostaria de falar com o atendimento da TechWeb Internet.',
  
  support: (problem: string) => 
    `Olá! Estou com um problema técnico: ${problem}. Podem me ajudar?`,
};