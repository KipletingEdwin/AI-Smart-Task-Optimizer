
import { Check } from 'lucide-react';

function SubtaskItem({ subtask, isLast, onToggle }) {
  return (
    <li className="relative flex gap-4 pb-6 last:pb-0">
      {!isLast && (
        <span className="absolute left-2.25 top-6 bottom-0 w-px bg-line" />
      )}
      <button
        onClick={onToggle}
        className={`relative z-10 shrink-0 w-4.75 h-4.75 rounded-full border-2 flex items-center justify-center transition-colors ${
          subtask.completed
            ? 'bg-moss border-moss'
            : 'border-line bg-paper hover:border-ember'
        }`}
      >
        {subtask.completed && <Check size={12} className="text-white" strokeWidth={3} />}
      </button>

      <div className="flex-1 flex items-baseline justify-between gap-3 -mt-0.5">
        <span
          className={
            subtask.completed
              ? 'text-ink-muted line-through decoration-line'
              : 'text-ink'
          }
        >
          {subtask.description}
        </span>
        <span className="font-mono text-xs text-ink-muted shrink-0 tabular-nums">
          {subtask.estimated_minutes}m
        </span>
      </div>
    </li>
  );
}

export default SubtaskItem;