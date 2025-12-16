import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryo Kitano",
  description: "UWaterloo Honours Mathematics — security-leaning builder.",
  metadataBase: new URL("https://www.ryokitano.ca"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
