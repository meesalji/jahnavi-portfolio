import * as React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "secondary" | "outline";
};

export function Badge({ variant = "secondary", className = "", ...props }: Props) {
  const base = "inline-flex items-center rounded-full text-xs px-2.5 py-1";
  const variants = {
    secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
    outline: "border border-zinc-300 text-zinc-700 dark:border-zinc-800 dark:text-zinc-200",
  } as const;

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
