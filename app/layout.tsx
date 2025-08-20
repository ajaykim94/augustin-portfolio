
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Augustin Kim — Data Science Portfolio",
  description: "Projects in marketing analytics, churn, RFM, and sports analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
