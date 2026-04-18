"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <main className="pt-24 bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container">
        {/* Header Sektion */}
        <section className="px-8 pt-12 pb-24 max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-secondary mb-4 block">
              Est. 2025 — Lumyra Manufacture
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-on-surface leading-tight">
              Ein{" "}
              <span className="italic underline underline-offset-8 decoration-secondary">
                langsamerer
              </span>{" "}
              Weg zu kreieren.
            </h1>
          </motion.div>
        </section>

        {/* Die Gründer-Story */}
        <section className="bg-surface-container-low py-24 md:py-32">
          <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
                <img
                  alt="Handarbeit Prozess"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                />
              </div>
              {/* Schwebendes Zitat */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 md:-right-8 bg-surface p-6 md:p-8 rounded-xl shadow-xl hidden sm:block max-w-xs border border-surface-container"
              >
                <p className="font-serif italic text-primary text-xl leading-relaxed">
                  "Handarbeit ist meine Art, der Welt etwas leise
                  zurückzuflüstern."
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl font-serif text-on-surface">
                Ein Brief von Clara
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-sans max-w-2xl">
                <p>
                  Lumyra Manufacture begann in einer kleinen Ecke meines
                  Wintergartens, mit einer einzigen Kiste Bienenwachs und einer
                  Handvoll Lavendel aus dem Garten. Es wurde aus dem Wunsch
                  heraus geboren, die Verbindung zur taktilen Welt
                  wiederherzustellen.
                </p>
                <p>
                  Jedes Stück, das du hier findest, wurde von menschlichen
                  Händen berührt. Wir feiern die „perfekten Unvollkommenheiten“
                  – den leichten Schwung einer handgegossenen Kerze, die
                  einzigartige Maserung einer Schale. Das sind die Spuren des
                  Lebens.
                </p>
                <div className="pt-4 border-t border-outline-variant/30">
                  <span className="font-serif text-2xl text-primary italic block">
                    Clara von Haus
                  </span>
                  <span className="text-sm uppercase tracking-widest text-secondary">
                    Gründerin & Artisan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophie & Werte */}
        <section className="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl font-serif mb-4">Werte, die uns leiten</h2>
            <p className="text-secondary tracking-[0.2em] uppercase text-sm font-medium">
              Nachhaltigkeit & Bewusstsein
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Bento Item 1 */}
            <div className="md:col-span-8 bg-surface-container rounded-2xl overflow-hidden flex flex-col md:flex-row group border border-surface-container-high">
              <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">
                  eco
                </span>
                <h3 className="text-2xl font-serif mb-4">
                  Erdverbundene Materialien
                </h3>
                <p className="text-on-surface-variant font-sans">
                  Wir beziehen 90% unserer Botanik von lokalen Züchtern. Unser
                  Wachs ist rein pflanzlich und unsere Verpackungen sind
                  plastikfrei.
                </p>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Materialien"
                />
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="z-10">
                <h3 className="text-2xl font-serif mb-4">Das Atelier</h3>
                <p className="opacity-90 font-sans leading-relaxed">
                  Unser Studio in Berlin wird vollständig mit Ökostrom
                  betrieben, um unseren ökologischen Fußabdruck so klein wie
                  möglich zu halten.
                </p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 pointer-events-none">
                location_on
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
