import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';

async function getProducts(): Promise<Product[]> {
  // Fetch data from the new API route
  // Adding a cache-busting option
  const res = await fetch('http://localhost:8000/api/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const allProducts = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
