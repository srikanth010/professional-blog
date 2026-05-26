'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, X, Sparkles, MessageCircle } from 'lucide-react';
import MessageBubble from './MessageBubble';
import SuggestedQuestions from './SuggestedQuestions';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  response: string;
  tools_used: string[];
  iterations: number;
  response_time_ms: number;
}

interface CareerChatProps {
  /** Embed directly in a section (no floating button) */
  inline?: boolean;
}

const quickPrompts = ['Work', 'About me', 'Skills', 'Contact'];

export default function CareerChat({ inline }: CareerChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiUrl = process.env.NEXT_PUBLIC_CAREER_API_URL || 'http://localhost:8000';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (messageText: string = input) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = messageText.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/career/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const data: ChatResponse = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get response. Please try again.';
      setMessages((prev) => [...prev, { role: 'assistant', content: `Error: ${errorMessage}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const glassStyle = {
    background:
      'linear-gradient(145deg, rgba(14,14,16,0.92), rgba(26,26,30,0.78)), radial-gradient(circle at top left, rgba(255,255,255,0.13), transparent 34%)',
    borderColor: 'rgba(255,255,255,0.12)',
    boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
  };

  const chatBody = (
    <>
      <div className="relative flex-1 overflow-y-auto px-4 py-5 sm:px-5 space-y-4">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:32px_32px]" />

        {messages.length === 0 ? (
          <div className="relative h-full min-h-[285px] flex flex-col justify-between gap-8">
            <div className="space-y-6 pt-3">
              <div className="space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/55">
                  <Sparkles size={12} /> AI Portfolio Guide
                </p>
                <h2 className="max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl">
                  Ask me anything about Srikanth...
                </h2>
                <p className="max-w-sm text-sm leading-6 text-white/55">
                  Explore background, engineering work, AI projects, AEM experience, and skills in a conversational way.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isLoading}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75 transition hover:border-white/25 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur">
              <SuggestedQuestions onSelect={handleSendMessage} disabled={isLoading} />
            </div>
          </div>
        ) : (
          <div className="relative space-y-4">
            {messages.map((msg, i) => (
              <MessageBubble key={`${msg.role}-${i}`} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-white/70" />
                    <span className="text-sm text-white/55">Thinking…</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="border-t border-white/10 p-3 sm:p-4">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] p-1.5 backdrop-blur">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isLoading) handleSendMessage();
            }}
            placeholder="Ask a question…"
            disabled={isLoading}
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/35 disabled:opacity-50"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !input.trim()}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </>
  );

  if (inline) {
    return (
      <section className="relative w-full overflow-hidden rounded-[2rem] border text-white" style={glassStyle}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-8 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

        <div className="relative flex flex-col" style={{ minHeight: '520px' }}>
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">      
            <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45 sm:inline-flex">
              Portfolio AI
            </span>
          </header>

          {chatBody}
        </div>
      </section>
    );
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex h-[560px] max-w-md flex-col overflow-hidden rounded-[2rem] border text-white sm:inset-x-auto sm:right-6 sm:mx-0" style={glassStyle}>
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-xs font-semibold">
                SK
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-[-0.02em]">Ask About Srikanth</h3>
                <p className="text-xs text-white/45">AI-powered career Q&amp;A</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setMessages([]);
              }}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </header>

          {chatBody}
        </div>
      )}
    </>
  );
}
