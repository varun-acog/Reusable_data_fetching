// import { BaseFetcher } from './BaseFetcher';
// import { Product } from '../types';

// /**
//  * Specialized fetcher for product data
//  */
// export class ProductDataFetcher extends BaseFetcher<Product> {
//   constructor() {
//     super('ProductList'); // Register with component name
//   }

//   /**
//    * Implementation of data fetching for products
//    */
//   async fetchData(): Promise<Product[]> {
//     try {
//       const response = await fetch('/products.json');
//       if (!response.ok) {
//         throw new Error(`Failed to fetch products: ${response.statusText}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   }
// }

// // Create and export a singleton instance
// export const productDataFetcher = new ProductDataFetcher();

import { BaseFetcher } from './BaseFetcher';
import { Product } from '../types';

/**
 * Specialized fetcher for product data
 */
export class ProductDataFetcher extends BaseFetcher<Product> {
  constructor() {
    super('ProductList'); // Register with component name
  }

  /**
   * Implementation of data fetching for products
   */
  async fetchData(): Promise<Product[]> {
    try {
      // Use absolute URL for server-side fetching
      const baseUrl = typeof window === 'undefined'
        ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')
        : '';
      
      const response = await fetch(`${baseUrl}/products.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
}

// Create and export a singleton instance
export const productDataFetcher = new ProductDataFetcher();
