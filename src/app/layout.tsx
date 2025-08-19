import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dentistry at SuburbanSquare - Michael L. Wollock, D.M.D.",
  description: "Professional dental care at SuburbanSquare. Schedule your appointment online or call (610) 649-0313.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
