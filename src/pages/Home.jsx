
import { LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { TaskComposer } from '../components/tasks/TaskComposer'
import { AnimatePresence } from 'framer-motion';
import { TaskCard } from '../components/tasks/TaskCard';

export const Home = () => {

    const[loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [fetching, setFetching] = useState(true);

    const generate = async (input) => {
        console.log("Generate")
    }

     

  return (
    <div className='min-h-screen bg-[#FAFAF8]'>
        <header className='mx-auto flex max-w-3xl items-center justify-between px-6 pt-10'>
            <span className='text-sm font-medium tracking-[0.2rem] text-neutral-900'>CLARITY</span> 
            <button>
                <LogOut className='h-4 w-4'/>
            </button>
        </header>
        <main className='mx-auto max-w-3xl px-6 pb-24 pt-14'>
            <h1 className='font-heading text-4xl leading-tight tracking-tight text-neutral-900 sm:text-5xl'>
                Say what you need to do.
                <span className='block text-neutral-400'>We'll map out the steps.</span>
            </h1>
            <div className='mt-10'>
                <TaskComposer onGenerate={generate} loading={loading}/>
            </div>

            <div className='mt-12 space-y-5'>
                {
                    fetching ? (
                        <p className="text-sm text-neutral-400">Loading your plans…</p>
                    ) : tasks.length === 0 ? (
                        <p className="text-sm text-neutral-400">No tasks yet — describe something above to get started.</p>
                    ) : (
                        <AnimatePresence> 
                            {
                                tasks.map((task) => (
                                    <TaskCard 
                                    key={task.id}
                                    task={task}
                                    ></TaskCard>
                                ))
                            }
                         </AnimatePresence>
                    )
                }
            </div>
        </main>
    </div>
  )
}



    // <div className="min-h-screen bg-[#FAFAF8]">

    //   <main className="mx-auto max-w-3xl px-6 pb-24 pt-14">

    //     <div className="mt-10">
    //       <TaskComposer onGenerate={generate} loading={loading} />
    //     </div>

    //     <div className="mt-12 space-y-5">
    //       {fetching ? (
    //         <p className="text-sm text-neutral-400">Loading your plans…</p>
    //       ) : tasks.length === 0 ? (
    //         <p className="text-sm text-neutral-400">No tasks yet — describe something above to get started.</p>
    //       ) : (
    //         <AnimatePresence>
    //           {tasks.map((task) => (
    //             <TaskCard
    //               key={task.id}
    //               task={task}
    //               onToggleSub={(i) => toggleSub(task, i)}
    //               onDelete={() => remove(task)}
    //             />
    //           ))}
    //         </AnimatePresence>
    //       )}
    //     </div>
    //   </main>
    // </div>
