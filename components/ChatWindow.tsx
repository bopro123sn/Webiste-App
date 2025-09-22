
import React from 'react';
import { ChatMessage } from '../types';
import Message from './Message';

interface ChatWindowProps {
  chatHistory: ChatMessage[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatHistory }) => {
  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      {chatHistory.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
