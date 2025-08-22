
import * as React from "react";
import clsx from "./clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md";
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
};

export function Button({ variant="default", size="md", asChild=false, href, className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-black text-white hover:bg-neutral-800 focus:ring-neutral-400",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-300",
    outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300",
  };
  const sizes = { sm: "text-sm px-3 py-1.5", md: "text-sm px-4 py-2" };
  const cls = clsx(base, variants[variant], sizes[size], className);
  if (asChild && href) {
    const external = href.startsWith("http");
    return <a className={cls} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}</a>;
  }
  return <button className={cls} {...props}>{children}</button>;
}
