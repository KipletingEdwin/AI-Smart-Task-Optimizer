

import { X } from 'lucide-react';
import SubtaskItem from './SubTaskItem';


function TaskCard({ task, onDelete, onToggleSubtask }) {
  const totalMinutes = task.subtasks.reduce((sum, st) => sum + (st.estimated_minutes || 0), 0);
  const completedCount = task.subtasks.filter((st) => st.completed).length;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeLabel = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

  return (
    <div className="border border-line rounded-sm p-6 mb-6">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-lg font-semibold leading-snug pr-4">{task.title}</h3>
        <button
          onClick={() => onDelete(task.id)}
          className="text-ink-muted hover:text-ember shrink-0 mt-1"
        >
          <X size={16} className='cursor-pointer'/>
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6 text-xs">
        <span className="text-ember font-medium">{task.category}</span>
        <span className="text-line">·</span>
        <span className="font-mono text-ink-muted tabular-nums">
          {completedCount}/{task.subtasks.length} done
        </span>
        <span className="text-line">·</span>
        <span className="font-mono text-ink-muted tabular-nums">{timeLabel} total</span>
      </div>

      <ul>
        {task.subtasks.map((subtask, index) => (
          <SubtaskItem
            key={subtask.id}
            subtask={subtask}
            isLast={index === task.subtasks.length - 1}
            onToggle={() => onToggleSubtask(task.id, subtask.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskCard;