// src/components/ui/button.tsx
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "icon";
  className?: string;
  asChild?: boolean; // tolerated prop so TS doesn't complain if used
};

export function Button({
  variant = "default",
  size = "md",
  className = "",
  asChild, // not used, but accepted
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-400/40 disabled:opacity-50 gap-2";
  const variants = {
    default:
      "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:border-white dark:hover:bg-zinc-200",
    outline:
      "bg-transparent text-zinc-900 border-zinc-300 hover:bg-zinc-100 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900",
  } as const;
  const sizes = { sm: "h-9 px-3", md: "h-10 px-4", icon: "h-10 w-10" } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
