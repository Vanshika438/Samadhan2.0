import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 199.99,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Feature-rich smart watch with health tracking.',
      price: 299.99,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'Powerful laptop for work and entertainment.',
      price: 999.99,
      image: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 4,
      name: 'Tablet',
      description: 'Versatile tablet for productivity and media.',
      price: 499.99,
      image: 'https://via.placeholder.com/300x200?text=Tablet'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Product List</h1>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
