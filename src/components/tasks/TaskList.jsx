

import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete, onToggleSubtask }) {
  if (tasks.length === 0) {
    return (
      <div className="border border-dashed border-[var(--color-line)] rounded-sm py-16 text-center">
        <p className="text-[var(--color-ink-muted)]">Nothing planned yet.</p>
        <p className="text-sm text-[var(--color-ink-muted)] mt-1">
          Type a task above and it'll be broken into steps.
        </p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} onToggleSubtask={onToggleSubtask} />
      ))}
    </div>
  );
}

export default TaskList;