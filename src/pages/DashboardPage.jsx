
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/tasks/TaskInput';
import TaskList from '../components/tasks/TaskList';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

function DashboardPage() {
  const { user, logout } = useAuth();
  const { tasks, loading, creating, error, addTaskFromAI, removeTask, toggleTaskSubtask } = useTasks();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signup');
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="max-w-xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="font-semibold">Task Optimizer</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-ink-muted">{user?.email}</span>
            <button onClick={handleLogout} className="text-ink-muted hover:text-ember cursor-pointer">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-12">
        <TaskInput onSubmit={addTaskFromAI} creating={creating} />

        {error && (
          <div className="mb-6 text-sm text-ember">{error}</div>
        )}

        {loading ? (
          <p className="text-ink-muted">Loading tasks…</p>
        ) : (
          <TaskList tasks={tasks} creating={creating} onDelete={removeTask} onToggleSubtask={toggleTaskSubtask} />
        )}
      </main>
    </div>
  );
}

export default DashboardPage;