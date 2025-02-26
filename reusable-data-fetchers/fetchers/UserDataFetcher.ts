// import { BaseFetcher } from './BaseFetcher';
// import { User } from '../types';

// /**
//  * Specialized fetcher for user data
//  */
// export class UserDataFetcher extends BaseFetcher<User> {
//   constructor() {
//     super('UserList'); // Register with component name
//   }

//   /**
//    * Implementation of data fetching for users
//    */
//   async fetchData(): Promise<User[]> {
//     try {
//       const response = await fetch('/users.json');
//       if (!response.ok) {
//         throw new Error(`Failed to fetch users: ${response.statusText}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       return [];
//     }
//   }
// }

// // Create and export a singleton instance
// export const userDataFetcher = new UserDataFetcher();

import { BaseFetcher } from './BaseFetcher';
import { User } from '../types';

/**
 * Specialized fetcher for user data
 */
export class UserDataFetcher extends BaseFetcher<User> {
  constructor() {
    super('UserList'); // Register with component name
  }

  /**
   * Implementation of data fetching for users
   */
  async fetchData(): Promise<User[]> {
    try {
      // Use absolute URL for server-side fetching
      const baseUrl = typeof window === 'undefined'
        ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')
        : '';
      
      const response = await fetch(`${baseUrl}/users.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
}

// Create and export a singleton instance
export const userDataFetcher = new UserDataFetcher();