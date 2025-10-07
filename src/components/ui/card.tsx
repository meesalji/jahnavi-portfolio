import * as React from "react";

export function Card({ className="", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-3xl border border-zinc-200 bg-white shadow-soft dark:border-zinc-900 dark:bg-zinc-950 ${className}`} {...props} />;
}
export function CardHeader({ className="", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`border-b border-zinc-200 p-5 dark:border-zinc-900 ${className}`} {...props} />;
}
export function CardTitle({ className="", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-lg font-semibold tracking-tight ${className}`} {...props} />;
}
export function CardDescription({ className="", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-sm text-zinc-600 dark:text-zinc-400 ${className}`} {...props} />;
}
export function CardContent({ className="", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-5 ${className}`} {...props} />;
}
