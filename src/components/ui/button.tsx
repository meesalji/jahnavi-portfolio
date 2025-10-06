import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "icon";
  className?: string;
};
export function Button({ asChild, variant="default", size="md", className="", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl border text-sm transition focus:outline-none focus:ring disabled:opacity-50";
  const variants = {
    default: "bg-zinc-900 text-white border-zinc-900 hover:opacity-90 dark:bg-white dark:text-zinc-900 dark:border-white",
    outline: "bg-transparent text-zinc-900 border-zinc-300 hover:bg-zinc-100 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900",
  } as const;
  const sizes = {
    sm: "h-9 px-3",
    md: "h-10 px-4",
    icon: "h-10 w-10",
  } as const;
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
