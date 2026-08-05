
import React from 'react'

export const TaskComposer = () => {
  return (
    <div className='rounded-3xl border border-b-neutral-200 bg-white p-6 shadow-[0_1px_40px_-20px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_1px_60px_-24px_rgba(0,0,0,0.4)]'>
      TaskComposer
    </div>
  )
}



// import React, { useState } from "react";
// import { Sparkles, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// export default function TaskComposer({ onGenerate, loading }) {
//   const [text, setText] = useState("");

//   const submit = async () => {
//     if (!text.trim() || loading) return;
//     await onGenerate(text.trim());
//     setText("");
//   };

//   return (
//     <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_40px_-20px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_1px_60px_-24px_rgba(0,0,0,0.4)]">
//       <Textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit(); }}
//         placeholder="I need to prepare for my Rails interview on Friday…"
//         className="min-h-[96px] resize-none border-0 p-0 text-lg leading-relaxed shadow-none focus-visible:ring-0"
//       />
//       <div className="mt-4 flex items-center justify-between">
//         <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">⌘ + Enter</span>
//         <Button onClick={submit} disabled={loading || !text.trim()} className="rounded-full px-6">
//           {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
//           {loading ? "Thinking" : "Break it down"}
//         </Button>
//       </div>
//     </div>
//   );
// }