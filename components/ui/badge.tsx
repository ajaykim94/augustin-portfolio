
import * as React from "react";
import clsx from "./clsx";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({ className, variant="default", ...props }: Props) {
  const variants = {
    default: "bg-neutral-900 text-white",
    secondary: "bg-neutral-100 text-neutral-900",
    outline: "border border-neutral-300 text-neutral-900",
  } as const;
  return <span className={clsx("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs", variants[variant], className)} {...props} />;
}
