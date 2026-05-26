interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function renderMarkdownLike(text: string) {
  return text.split('\n').map((line, lineIndex) => {
    const isBullet = line.trim().startsWith('- ');
    const bulletContent = isBullet ? line.trim().slice(2) : line;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let match;

    while ((match = boldRegex.exec(bulletContent)) !== null) {
      if (match.index > lastIndex) {
        parts.push(bulletContent.slice(lastIndex, match.index));
      }
      parts.push(
        <strong key={`bold-${match.index}`}>{match[1]}</strong>
      );
      lastIndex = boldRegex.lastIndex;
    }

    if (lastIndex < bulletContent.length) {
      parts.push(bulletContent.slice(lastIndex));
    }

    return (
      <div key={lineIndex} className={isBullet ? 'ml-4 list-disc' : ''}>
        {isBullet && <span className="mr-2">•</span>}
        {parts.length > 0 ? parts : bulletContent}
        {lineIndex < text.split('\n').length - 1 && <div />}
      </div>
    );
  });
}

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm leading-relaxed ${
          isUser ? "rounded-br-none" : "rounded-bl-none border"
        }`}
        style={{
          background: isUser ? "var(--accent)" : "var(--card)",
          color: isUser ? "white" : "var(--foreground)",
          borderColor: isUser ? undefined : "var(--card-border)",
        }}
      >
        <div className="break-words">
          {isUser ? (
            message.content
          ) : (
            renderMarkdownLike(message.content)
          )}
        </div>
      </div>
    </div>
  );
}
