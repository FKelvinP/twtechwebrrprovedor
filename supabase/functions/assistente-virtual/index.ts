import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY não configurada');
    }

    // Prompt para a secretária virtual
    const systemPrompt = `Você é uma secretária virtual especializada em vendas e atendimento da TechWeb Internet. Sua função é:

1. QUALIFICAR LEADS: Colete informações essenciais do cliente
   - Nome completo
   - Telefone/WhatsApp  
   - Localização (endereço aproximado)
   - Necessidades de internet (quantos dispositivos, atividades, orçamento)

2. APRESENTAR PLANOS DISPONÍVEIS:
   - Plano Básico: 100MB por R$ 59,90/mês
   - Plano Família: 300MB por R$ 89,90/mês  
   - Plano Premium: 500MB por R$ 129,90/mês
   - Plano Ultra: 1GB por R$ 189,90/mês

3. DIRECIONAR PARA CONTRATAÇÃO:
   - Após qualificar, sempre direcione para WhatsApp: (11) 99999-9999
   - Explique que a contratação final é feita via WhatsApp

4. OFERECER SUPORTE:
   - Responda dúvidas técnicas básicas
   - Para problemas técnicos, direcione para WhatsApp

IMPORTANTE: Seja sempre cordial, profissional e focada em vendas. Faça perguntas para entender as necessidades do cliente.`;

    // Prepara histórico da conversa
    const messages = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      {
        role: "user",
        parts: [{ text: message }]
      }
    ];

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Erro da API Gemini:', errorData);
      throw new Error(`Erro da API Gemini: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro no assistente virtual:', error);
    return new Response(JSON.stringify({ 
      error: 'Erro interno do servidor',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});