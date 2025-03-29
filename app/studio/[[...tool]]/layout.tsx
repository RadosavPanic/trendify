import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trendify Studio",
  description: "Content Management System for Trendify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
