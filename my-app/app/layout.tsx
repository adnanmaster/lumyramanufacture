import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css"; // Pfad angepasst auf selbe Ebene
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Lumyra Manufacture",
  description: "Handgefertigte Unikate für dein Slow Living Ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="de"
        className={cn(
          "light",
          notoSerif.variable,
          plusJakartaSans.variable,
          "font-sans",
          geist.variable,
        )}
      >
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}