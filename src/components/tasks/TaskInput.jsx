
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

function TaskInput({ onSubmit, creating }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. I need to prepare for my Rails interview on Friday"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={creating}
      />
      <button
        type="submit"
        disabled={creating || !title.trim()}
        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Sparkles size={18} />
        {creating ? 'Thinking...' : 'Break it down'}
      </button>
    </form>
  );
}

export default TaskInput;