
import { Trash2 } from 'lucide-react';
import React from 'react'

  const priorityStyles = {
    low: "bg-neutral-100 text-neutral-600",
    medium: "bg-amber-100 text-amber-700",
    high: "bg-rose-100 text-rose-700",
  };

export const TaskCard = ({task, onToggleSub, onDelete}) => {

  const subtasks = task.subtasks || [];
  const doneCount = subtasks.filter((s) => s.done).length;
  const progress = subtasks.length ? (doneCount / subtasks.length) * 100 : 0;

  


  return (
    <div className='flex items-start justify-between gap-4'>
      <div>
        <p>{task.category || "General"}</p>
        <h3>{task.title}</h3>
      </div>
      <button>
        <Trash2 />
      </button>
      
    </div>
  )
}




      // <div className="flex items-start justify-between gap-4">
      //   <div>
      //     <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">{task.category || "General"}</p>
      //     <h3 className="mt-1 font-heading text-xl leading-snug text-neutral-900">{task.title}</h3>
      //   </div>
      //   <button onClick={onDelete} className="text-neutral-300 transition-colors hover:text-rose-500">
      //     <Trash2 className="h-4 w-4" />
      //   </button>
      // </div>