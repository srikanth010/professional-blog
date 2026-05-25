const SUGGESTED_QUESTIONS = [
  "What are Srikanth's AI/ML skills?",
  "Tell me about his trading system projects",
  "Why is he a good fit for Anthropic?",
  "What leadership experience does he have?",
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

export default function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      {SUGGESTED_QUESTIONS.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          disabled={disabled}
          className="text-left px-3 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium transition border border-blue-200 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
