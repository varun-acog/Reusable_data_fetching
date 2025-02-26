'use client';

import React, { useEffect, useState } from 'react';
import { FetcherRegistry } from '../lib/FetcherRegistry';
import { WithDataProps } from '../types';

/**
 * Higher Order Component for client-side data fetching
 * 
 * @param WrappedComponent The pure UI component to wrap
 * @param componentName The name of the component (used to find the correct fetcher)
 * @returns A new component with data fetching capabilities
 */
export function withClientFetching<T, P extends WithDataProps<T>>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  // Return a new React functional component
  return function WithClientFetching(props: Omit<P, keyof WithDataProps<T>>) {
    // State for managing data, loading state, and errors
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
      let isMounted = true;

      async function fetchData() {
        try {
          setIsLoading(true);
          
          // Method 1: Direct fetching using the registry
          /*
          const fetcher = FetcherRegistry.getFetcher<T>(componentName);
          if (!fetcher) {
            throw new Error(`No fetcher registered for component: ${componentName}`);
          }
          const result = await fetcher();
          */
          
          // Method 2: Using the unified API endpoint
          const response = await fetch(`/api/data?component=${componentName}`);
          if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
          }
          const result = await response.json();
          
          if (isMounted) {
            setData(result);
            setError(undefined);
          }
        } catch (err) {
          if (isMounted) {
            console.error('Error in client fetching:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
          }
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }
      }

      fetchData();

      // Cleanup function to prevent state updates if component unmounts
      return () => {
        isMounted = false;
      };
    }, []);

    // Pass the fetched data, loading state, and any errors to the wrapped component
    return (
      <WrappedComponent
        {...(props as P)}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}

export default withClientFetching;