'use client';

import React from 'react';
import withClientFetching from '../../hoc/withClientFetching';
import { Product, WithDataProps } from '../../types';

const ThirdPartyTable = ({ data, columns }: { data: any[], columns: any[] }) => {
  return (
    <div className="third-party-table p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Third Party Table Component</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded">
        <thead>
          <tr className="bg-gray-800 dark:bg-gray-700 text-white">
            {columns.map((column, index) => (
              <th 
                key={index} 
                className="py-3 px-4 border-b border-gray-600 text-left font-semibold"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-900 dark:bg-gray-800' : 'bg-gray-800 dark:bg-gray-900'}>
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex} 
                  className="py-3 px-4 border-b border-gray-700 text-left text-white"
                >
                  {typeof column.accessor === 'function' 
                    ? column.accessor(row) 
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MaterialProductTable: React.FC<WithDataProps<Product>> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-gray-800 dark:text-gray-100">Loading products...</div>;
  }

  if (error) {
    return <div className="text-red-600 dark:text-red-400">Error: {error}</div>;
  }

  const columns = [
    { accessor: 'id', header: 'ID' },
    { accessor: 'name', header: 'Product Name' },
    { accessor: (row: Product) => `$${row.price.toFixed(2)}`, header: 'Price' },
    { accessor: 'category', header: 'Category' },
    { accessor: 'stock', header: 'In Stock' }
  ];

  return <ThirdPartyTable data={data} columns={columns} />;
};

export default withClientFetching<Product, WithDataProps<Product>>(
  MaterialProductTable, 
  'ProductList'
);
