import React from 'react';

interface MessageProps {
  sender: 'user' | 'bot';
  text: string;
}

const Message: React.FC<MessageProps> = ({ sender, text }) => {
  const isUser = sender === 'user';

  const userIcon = (
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
      U
    </div>
  );

  const botIcon = (
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    </div>
  );

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
      {!isUser && botIcon}
      <div className={`max-w-md lg:max-w-xl px-4 py-3 rounded-2xl shadow ${isUser ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
      {isUser && userIcon}
    </div>
  );
};

export default Message;