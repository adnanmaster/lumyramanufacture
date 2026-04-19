import { client } from "@/sanity/lib/client";
import ShopClient from "@/components/ShopClient";
import { Suspense } from "react"; // NEU: Suspense importieren

const getProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  price,
  "imageUrl": images[0].asset->url, 
  "secondImageUrl": images[1].asset->url,
  "categoryName": categories[0]->title, 
  "slug": slug.current
}`;

export default async function Shop() {
  const products = await client.fetch(getProductsQuery);

  return (
    <>
      {/* NEU: Suspense sagt Next.js, dass es hier auf dynamische URL-Parameter warten soll */}
      <Suspense fallback={<div className="pt-32 text-center text-[#565f4c]">Lade Shop...</div>}>
        <ShopClient products={products} />
      </Suspense>
    </>
  );
}