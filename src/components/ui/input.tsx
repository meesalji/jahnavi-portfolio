import * as React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none focus:ring dark:border-zinc-800 dark:bg-zinc-950 ${props.className || ""}`} />;
}
