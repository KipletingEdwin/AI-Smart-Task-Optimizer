
import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete, onToggleSubtask }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-12">
        No tasks yet. Add one above to get started.
      </p>
    );
  }

  return (
    <div>
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