"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  secondImageUrl?: string;
  categoryName: string;
  slug: string;
};

export default function ShopClient({ products }: { products: Product[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Wir lesen IMMER direkt aus der URL. Kein flüchtiges useState mehr!
  const selectedCategories = searchParams.getAll("category");
  const sortMethod = searchParams.get("sort") || "newest";

  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.categoryName).filter(Boolean))
  ) as string[];

  // Diese Funktion berechnet den perfekten Link für jede Checkbox
  const createCategoryUrl = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll("category");
    
    // Alte Kategorien kurz löschen
    params.delete("category");

    if (current.includes(category)) {
      // Wenn schon angewählt, alle anderen wieder hinzufügen (Abwählen-Effekt)
      current.filter((c) => c !== category).forEach((c) => params.append("category", c));
    } else {
      // Wenn neu, alle alten + die neue hinzufügen (Anwählen-Effekt)
      [...current, category].forEach((c) => params.append("category", c));
    }

    return `${pathname}?${params.toString()}`;
  };

  // Für das Dropdown nutzen wir weiterhin den Standard-Weg
  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const displayedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categoryName));
    }

    if (sortMethod === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortMethod === "price_desc") {
      result.sort((a, b) => b.price - a.price);
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
              {uniqueCategories.map((category) => (
                <li key={category}>
                  {/* MAGIE: Der Container ist jetzt ein echter Link, ohne dass die Seite scrollt */}
                  <Link
                    href={createCategoryUrl(category)}
                    scroll={false} 
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      // pointer-events-none ist extrem wichtig, damit der Link den Klick fängt und nicht die dumme Standard-Checkbox!
                      className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20 bg-surface-container pointer-events-none"
                      checked={selectedCategories.includes(category)}
                      readOnly
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
                  </Link>
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
              onChange={(e) => handleSortChange(e.target.value)}
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
                <Link
                  href={`/product/${product.slug}`}
                  key={product._id}
                  className="group relative flex flex-col p-4 -mx-4 rounded-2xl hover:bg-[#565f4c]/5 dark:hover:bg-[#848d78]/10 transition-colors duration-500 cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover"
                      src={
                        product.imageUrl ||
                        "https://via.placeholder.com/400x500?text=No+Image"
                      }
                    />

                    {product.secondImageUrl && (
                      <img
                        alt={`${product.name} Ansicht 2`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        src={product.secondImageUrl}
                      />
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start px-2">
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
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}