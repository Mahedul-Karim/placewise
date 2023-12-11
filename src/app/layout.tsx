import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Placewise-Book tours",
  description: "A tour booking website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-poppins bg-grey text-neutral overflow-x-hidden`}>{children}</body>
    </html>
  );
}
