
import TaskCard from "./TaskCard";
import SkeletonTaskCard from "./SkeletonTaskCard";

function TaskList({ tasks, creating, onDelete, onToggleSubtask }) {
  if (tasks.length === 0 && !creating) {
    return (
      <div className="border border-dashed border-line rounded-sm py-16 text-center">
        <p className="text-ink-muted">Nothing planned yet.</p>
        <p className="text-sm text-ink-muted mt-1">
          Type a task above and it'll be broken into steps.
        </p>
      </div>
    );
  }

  return (
    <div>
      {creating && <SkeletonTaskCard />}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleSubtask={onToggleSubtask}
        />
      ))}
    </div>
  );
}

export default TaskList;
