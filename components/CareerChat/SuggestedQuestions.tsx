const SUGGESTED_QUESTIONS = [
  "What are Srikanth's AI/ML skills?",
  "What makes him a good engineering hire?",
  "Describe his leadership experience",
  "What systems has he architected at scale?",
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
          className="text-left px-3 py-2 rounded-full text-sm font-medium transition border disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
          style={{
            background: "rgba(139, 92, 246, 0.1)",
            color: "var(--accent)",
            borderColor: "rgba(139, 92, 246, 0.3)",
          }}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
