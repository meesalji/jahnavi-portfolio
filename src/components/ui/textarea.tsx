import * as React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`w-full rounded-xl border border-zinc-300 bg-white p-3 text-sm outline-none focus:ring dark:border-zinc-800 dark:bg-zinc-950 ${props.className || ""}`} />;
}
