import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Language mapping for clearer prompts
const languageNames = {
  en: "English",
  id: "Indonesian",
  de: "German",
  ja: "Japanese",
  it: "Italian",
  fr: "French"
};

export async function POST(request: NextRequest) {
  try {
    const { text, sourceLanguage, targetLanguage } = await request.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const sourceLang = languageNames[sourceLanguage as keyof typeof languageNames] || sourceLanguage;
    const targetLang = languageNames[targetLanguage as keyof typeof languageNames] || targetLanguage;

    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. 
Maintain the original meaning, tone, and cultural context. 
Provide only the translation, no additional text or explanations:

${text}`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: 'You are a professional translator with expertise in multiple languages. Provide accurate translations while maintaining the original meaning, tone, and cultural nuances.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 32768,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Groq API error:', error);
      return NextResponse.json(
        { error: 'Translation failed', details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    const translation = data.choices[0].message.content.trim();

    return NextResponse.json({ translation });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
