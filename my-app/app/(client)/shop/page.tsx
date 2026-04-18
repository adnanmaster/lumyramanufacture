import { client } from "@/sanity/lib/client";
import ShopClient from "@/components/ShopClient"; // Pfad anpassen, falls nötig!

// Die GROQ Query
const getProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  price,
  "imageUrl": images[0].asset->url, 
  "categoryName": categories[0]->title, 
  "slug": slug.current
}`;

export default async function Shop() {
  // Daten aus Sanity abrufen
  const products = await client.fetch(getProductsQuery);

  return (
    <>
      {/* Wir übergeben die Daten an unsere neue interaktive Komponente */}
      <ShopClient products={products} />
    </>
  );
}