
import { Trash2 } from 'lucide-react';
import SubtaskItem from './SubTaskItem';
// import SubtaskItem from './SubtaskItem';

function TaskCard({ task, onDelete, onToggleSubtask }) {
  const totalMinutes = task.subtasks.reduce((sum, st) => sum + (st.estimated_minutes || 0), 0);
  const completedCount = task.subtasks.filter((st) => st.completed).length;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{task.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              {task.category}
            </span>
            <span className="text-xs text-gray-400">
              {completedCount}/{task.subtasks.length} done · {totalMinutes} min total
            </span>
          </div>
        </div>
        <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      <ul>
        {task.subtasks.map((subtask) => (
          <SubtaskItem
            key={subtask.id}
            subtask={subtask}
            onToggle={() => onToggleSubtask(task.id, subtask.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskCard;