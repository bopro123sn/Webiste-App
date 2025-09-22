
export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export interface GeminiResponse {
  response: string;
  followUpTiles: string[];
}
