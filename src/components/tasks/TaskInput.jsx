import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function TaskInput({ onSubmit, creating }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      {/* <div className='px-10' >  */}
      <label className="block text-sm mb-2 px-10">
        What do you need to get done?
      </label>
      <div className="flex items-center gap-3 border-b-2 border-ink pb-3 focus-within:border-ember transition-colors px-10">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Prepare for my Rails interview on Friday"
          className="flex-1 bg-transparent text-lg focus:outline-none"
          disabled={creating}
        />
        <button
          type="submit"
          disabled={creating || !title.trim()}
          className="flex items-center gap-2 font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3 transition-all"
        >
          {creating ? 'Breaking it down' : 'Break it down'}
          <ArrowRight size={18} />
        </button>
      </div>
      {/* </div> */}
    </form>
  );
}

export default TaskInput;