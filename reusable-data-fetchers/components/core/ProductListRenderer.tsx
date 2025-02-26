import React from 'react';
import { Product, WithDataProps } from '../../types';

const ProductListRenderer: React.FC<WithDataProps<Product>> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-gray-800 dark:text-gray-100">Loading products...</div>;
  }

  if (error) {
    return <div className="text-red-600 dark:text-red-400">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-gray-800 dark:text-gray-100">No products found.</div>;
  }

  return (
    <div className="product-list p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Products</h2>
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <th className="border border-gray-300 dark:border-gray-700 p-3">ID</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Name</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Price</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Category</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="border border-gray-300 dark:border-gray-700 p-3">{product.id}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{product.name}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">${product.price.toFixed(2)}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{product.category}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListRenderer;
