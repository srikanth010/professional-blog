interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
        }`}
      >
        <div className="whitespace-pre-wrap break-words">
          {message.content.split('\n').map((line, index) => (
            <div key={index}>
              {line}
              {index < message.content.split('\n').length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
