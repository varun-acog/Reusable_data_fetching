import React from 'react';
import { FetcherRegistry } from '../lib/FetcherRegistry';
import { WithDataProps } from '../types';

/**
 * Higher Order Component for server-side data fetching
 * 
 * @param WrappedComponent The pure UI component to wrap
 * @param componentName The name of the component (used to find the correct fetcher)
 * @returns A new component with server-side data fetching capabilities
 */
export function withServerFetching<T, P extends WithDataProps<T>>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  // Import necessary fetchers to ensure they're registered
  // This is needed for server components since they might run before client-side code
  async function importFetchers() {
    // Import all fetchers dynamically to ensure they're registered
    await Promise.all([
      import('../fetchers/UserDataFetcher'),
      import('../fetchers/ProductDataFetcher')
    ]);
  }

  // The server component
  async function WithServerFetching(props: Omit<P, keyof WithDataProps<T>>) {
    // Make sure fetchers are imported and registered
    await importFetchers();
    
    let data: T[] = [];
    let error: string | undefined = undefined;
    
    try {
      // Get the appropriate fetcher from the registry
      const fetcher = FetcherRegistry.getFetcher<T>(componentName);
      if (!fetcher) {
        throw new Error(`No fetcher registered for component: ${componentName}`);
      }
      
      // Fetch the data
      data = await fetcher();
    } catch (err) {
      console.error('Error in server fetching:', err);
      error = err instanceof Error ? err.message : 'An unknown error occurred';
    }
    
    // Pass the fetched data and any errors to the wrapped component
    return (
      <WrappedComponent
        {...(props as P)}
        data={data}
        error={error}
      />
    );
  }
  
  return WithServerFetching;
}

export default withServerFetching;