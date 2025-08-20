
import * as React from "react";
import clsx from "./clsx";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("rounded-2xl border bg-white shadow-sm", className)} {...props}>{children}</div>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("p-6", className)} {...props}>{children}</div>;
}
