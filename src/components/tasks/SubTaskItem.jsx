
import { Check } from 'lucide-react';

function SubtaskItem({ subtask, onToggle }) {
  return (
    <li className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
          subtask.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        {subtask.completed && <Check size={14} className="text-white" />}
      </button>
      <span className={`flex-1 text-sm ${subtask.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {subtask.description}
      </span>
      <span className="text-xs text-gray-400 shrink-0">{subtask.estimated_minutes} min</span>
    </li>
  );
}

export default SubtaskItem;