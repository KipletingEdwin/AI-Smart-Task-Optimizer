
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/tasks/TaskInput';
import TaskList from '../components/tasks/TaskList';
import { LogOut } from 'lucide-react';

function DashboardPage() {
  const { user, logout } = useAuth();
  const { tasks, loading, creating, error, addTaskFromAI, removeTask, toggleTaskSubtask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Task Optimizer</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <button onClick={logout} className="text-gray-400 hover:text-red-500">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <TaskInput onSubmit={addTaskFromAI} creating={creating} />

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">{error}</div>
        )}

        {loading ? (
          <p className="text-center text-gray-400 mt-12">Loading tasks...</p>
        ) : (
          <TaskList tasks={tasks} onDelete={removeTask} onToggleSubtask={toggleTaskSubtask} />
        )}
      </main>
    </div>
  );
}

export default DashboardPage;