import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Pulse Gym | Build Strength. Own Your Power.",
  description:
    "Gym performance dengan program terarah, pelatih bersertifikat, dan komunitas yang mendukung progresmu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
