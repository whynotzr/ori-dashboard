import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORI-DASHBOARD — Control Center",
  description: "Panel d'administration temps réel pour Ori-Bot"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
