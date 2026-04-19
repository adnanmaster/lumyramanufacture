"use client";

import { useState, useMemo } from "react";

// Wir definieren kurz, wie ein Produkt aussieht
type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  slug: string;
};

export default function ShopClient({ products }: { products: Product[] }) {
  // 1. Unsere States für die ausgewählten Filter und die Sortierung
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortMethod, setSortMethod] = useState<string>("newest");

  // 2. Wir suchen alle einzigartigen Kategorien aus deinen Produkten zusammen
  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.categoryName).filter(Boolean))
  ) as string[];

  // 3. Funktion, um eine Checkbox an- oder abzuwählen
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) // Wenn schon drin, dann rauswerfen
        : [...prev, category] // Wenn nicht drin, dann hinzufügen
    );
  };

  // 4. Hier wird gefiltert und sortiert!
  const displayedProducts = useMemo(() => {
    let result = [...products];

    // Filtern nach Kategorie (Wenn keine ausgewählt ist, zeige alle)
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categoryName));
    }

    // Sortieren nach Preis
    if (sortMethod === "price_asc") {
      result.sort((a, b) => a.price - b.price); // Günstigste zuerst
    } else if (sortMethod === "price_desc") {
      result.sort((a, b) => b.price - a.price); // Teuerste zuerst
    }

    return result;
  }, [products, selectedCategories, sortMethod]);

  return (
    <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-headline tracking-tight text-on-surface mb-4">
          Shop
        </h1>
        <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
          A curated collection of objects for slow living. Each piece is
          handcrafted in our studio, reflecting the organic imperfections of the
          natural world.
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-12">
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
          <div>
            <h3 className="font-headline text-lg mb-6 text-on-surface">
              Categories
            </h3>
            <ul className="space-y-4">
              {/* Dynamische Checkboxen basierend auf deinen Sanity Daten */}
              {uniqueCategories.map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container cursor-pointer"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span
                      className={`text-sm font-body transition-colors ${
                        selectedCategories.includes(category)
                          ? "text-primary font-medium"
                          : "text-on-surface-variant group-hover:text-primary"
                      }`}
                    >
                      {category}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg mb-6 text-on-surface">
              Sort By
            </h3>
            <select
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
              className="w-full bg-surface-container border-none rounded-lg py-3 px-4 text-sm font-body focus:ring-1 focus:ring-primary/30 cursor-pointer"
            >
              <option value="newest">New Arrivals</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* PRODUKT-GRID */}
        <section className="flex-grow">
          {displayedProducts.length === 0 ? (
            <div className="text-center py-20 text-on-surface-variant">
              Keine Produkte in dieser Kategorie gefunden.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {displayedProducts.map((product) => (
                <div key={product._id} className="group relative flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={
                        product.imageUrl ||
                        "https://via.placeholder.com/400x500?text=No+Image"
                      }
                    />
                    <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                      <button className="w-full py-3 bg-surface/90 backdrop-blur-sm text-on-surface text-sm font-label rounded-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1 font-label">
                        {product.categoryName || "Product"}
                      </p>
                      <h3 className="text-lg font-headline text-on-surface">
                        {product.name}
                      </h3>
                    </div>
                    <span className="text-on-surface-variant font-body">
                      {product.price} €
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}