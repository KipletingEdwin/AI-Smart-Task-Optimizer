// DashboardPage.jsx
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/tasks/TaskInput';
import TaskList from '../components/tasks/TaskList';
import { LogOut } from 'lucide-react';

function DashboardPage() {
  const { user, logout } = useAuth();
  const { tasks, loading, creating, error, addTaskFromAI, removeTask, toggleTaskSubtask } = useTasks();

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--color-line)]">
        <div className="max-w-xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="font-semibold">Task Optimizer</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-[var(--color-ink-muted)]">{user?.email}</span>
            <button onClick={logout} className="text-[var(--color-ink-muted)] hover:text-[var(--color-ember)]">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-12">
        <TaskInput onSubmit={addTaskFromAI} creating={creating} />

        {error && (
          <div className="mb-6 text-sm text-[var(--color-ember)]">{error}</div>
        )}

        {loading ? (
          <p className="text-[var(--color-ink-muted)]">Loading tasks…</p>
        ) : (
          <TaskList tasks={tasks} onDelete={removeTask} onToggleSubtask={toggleTaskSubtask} />
        )}
      </main>
    </div>
  );
}

export default DashboardPage;