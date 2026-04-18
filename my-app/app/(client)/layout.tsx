import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24"> 
        {/* pt-24 gibt etwas Abstand nach oben, damit der fixed Header den Content nicht verdeckt */}
        {children}
      </main>
      <Footer />
    </>
  );
}