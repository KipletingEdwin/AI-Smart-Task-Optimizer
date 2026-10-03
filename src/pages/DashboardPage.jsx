
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/tasks/TaskInput';
import TaskList from '../components/tasks/TaskList';
import { LogOut, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen px-20">
      <header className="border-b border-line">
        <div className=" mx-auto py-5 flex items-center justify-between">
          <button className='flex items-center justify-center gap-1'><Sparkles className='w-4 h-4'/>Task Optimizer</button>
          <div className="flex items-center gap-4 text-sm">
            <span>{user?.email}</span>
            <button onClick={handleLogout} className="hover:text-ember cursor-pointer flex items-center gap-1 border px-2 py-1 rounded-xl ">
              Logout
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto py-12">
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