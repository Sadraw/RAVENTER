import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "RAVENTER — Drum & Bass from Deventer",
  description:
    "Raventer — a Drum & Bass project from Deventer, Netherlands. News, shows, livestreams and announcements.",
  themeColor: "#070707",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}