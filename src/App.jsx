import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, title: "Comfy Headphones", price: 1999, rating: 4.5, image: "https://picsum.photos/seed/headphones/600/450", tags: ["Bestseller"] },
  { id: 2, title: "Smart Watch",       price: 3499, rating: 4.2, image: "https://picsum.photos/seed/watch/600/450",      tags: ["New","Sale"] },
  { id: 3, title: "Gaming Mouse",      price: 1299, rating: 4.7, image: "https://picsum.photos/seed/mouse/600/450",      tags: ["RGB"] },
  { id: 4, title: "Cute Backpack",     price: 1599, rating: 4.3, image: "https://picsum.photos/seed/backpack/600/450",   tags: ["Trendy"] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">🛍️ Styled Product List</h1>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </main>
    </div>
  );
}
