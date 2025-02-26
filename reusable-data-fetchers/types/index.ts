// Types for our data models
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
  }
  
  // Generic type for component props that include data
  export interface WithDataProps<T> {
    data: T[];
    isLoading?: boolean;
    error?: string;
  }
  
  // Type for fetcher functions
  export type FetcherFunction<T> = () => Promise<T[]>;