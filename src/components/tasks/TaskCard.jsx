
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
    <div>TaskCard</div>
  )
}



