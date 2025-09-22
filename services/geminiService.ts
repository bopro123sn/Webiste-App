import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { ChatMessage, GeminiResponse } from '../types';
import { GEMINI_MODEL } from '../constants';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    response: {
      type: Type.STRING,
      description: "A helpful and informative response to the user's query, based on the conversation history."
    },
    followUpTiles: {
      type: Type.ARRAY,
      description: "An array of 3-4 concise and engaging follow-up questions or topics the user might be interested in.",
      items: {
        type: Type.STRING
      }
    }
  },
  required: ['response', 'followUpTiles']
};

export const getBotResponse = async (userMessage: string, history: ChatMessage[]): Promise<GeminiResponse> => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // We only need history for context, the primary prompt is the new user message
    const contents = [
      ...chatHistory,
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ];

    const result: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
        topP: 0.95,
        // FIX: `systemInstruction` must be a part of the `config` object.
        systemInstruction: "You are a friendly and helpful chatbot. Provide a clear answer to the user's question and then suggest 3 to 4 relevant, interesting follow-up topics or questions as tiles to continue the conversation. Your response must be in the specified JSON format."
      },
    });

    const jsonString = result.text.trim();
    const parsedResponse: GeminiResponse = JSON.parse(jsonString);

    if (!parsedResponse.response || !Array.isArray(parsedResponse.followUpTiles)) {
      throw new Error("Invalid response format from Gemini API.");
    }
    
    return parsedResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a structured error response
    return {
        response: "I'm sorry, I encountered an error while processing your request. Please try again.",
        followUpTiles: [
            "What happened?",
            "Let's try a different topic",
            "Who created you?",
        ]
    };
  }
};
