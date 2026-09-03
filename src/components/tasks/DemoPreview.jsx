
import { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const DEMO_TITLE = 'Prepare for my Rails interview on Friday';
const DEMO_SUBTASKS = [
  { id: 1, description: 'Review ActiveRecord associations', estimated_minutes: 30 },
  { id: 2, description: 'Practice Sidekiq background jobs', estimated_minutes: 45 },
  { id: 3, description: 'Rebuild a REST API from scratch', estimated_minutes: 60 },
  { id: 4, description: 'Review common system design questions', estimated_minutes: 40 },
  { id: 5, description: 'Prepare 3 questions to ask the interviewer', estimated_minutes: 15 },
];

function DemoPreview() {
  const [typed, setTyped] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      i++;
      setTyped(DEMO_TITLE.slice(0, i));
      if (i === DEMO_TITLE.length) {
        clearInterval(typing);
        setTimeout(() => setRevealed(true), 400);
      }
    }, 35);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="border border-line rounded-sm p-6 bg-white/60">
      <div className="flex items-center gap-3 border-b-2 border-ink pb-3 mb-6">
        <span className="flex-1 text-lg">
          {typed}
          <span className="inline-block w-0.5 h-5 bg-ink ml-0.5 animate-pulse align-middle" />
        </span>
        <span className="flex items-center gap-2 text-ember font-medium text-sm shrink-0">
          Break it down <ArrowRight size={16} />
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6 text-xs">
        <span className="text-ember font-medium">Learning</span>
        <span className="text-line">·</span>
        <span className="font-mono text-ink-muted">3h 10m total</span>
      </div>

      <ul>
        {DEMO_SUBTASKS.map((subtask, index) => (
          <li
            key={subtask.id}
            className="relative flex gap-4 pb-6 last:pb-0 opacity-0"
            style={
              revealed
                ? { animation: `fadeInUp 0.4s ease forwards`, animationDelay: `${index * 0.12}s` }
                : {}
            }
          >
            {index !== DEMO_SUBTASKS.length - 1 && (
              <span className="absolute left-2.25 top-6 bottom-0 w-px bg-line" />
            )}
            <span className="relative z-10 shrink-0 w-4.75 h-4.75 rounded-full border-2 border-line bg-white flex items-center justify-center" />
            <div className="flex-1 flex items-baseline justify-between gap-3 -mt-0.5">
              <span>{subtask.description}</span>
              <span className="font-mono text-xs text-ink-muted shrink-0">
                {subtask.estimated_minutes}m
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoPreview;