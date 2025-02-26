import { FetcherFunction } from '../types';

/**
 * Central registry for managing fetcher functions
 */
export class FetcherRegistry {
  private static fetchers: Map<string, FetcherFunction<any>> = new Map();

  /**
   * Register a new fetcher function for a component
   * @param componentName The name of the component associated with this fetcher
   * @param fetcherFunction The function that fetches data
   */
  static register<T>(componentName: string, fetcherFunction: FetcherFunction<T>): void {
    this.fetchers.set(componentName, fetcherFunction);
    console.log(`Registered fetcher for component: ${componentName}`);
  }

  /**
   * Get a fetcher function for a component
   * @param componentName The name of the component to get the fetcher for
   * @returns The fetcher function or undefined if not found
   */
  static getFetcher<T>(componentName: string): FetcherFunction<T> | undefined {
    return this.fetchers.get(componentName) as FetcherFunction<T> | undefined;
  }

  /**
   * Check if a fetcher exists for a component
   * @param componentName The name of the component to check
   * @returns Whether a fetcher exists for this component
   */
  static hasFetcher(componentName: string): boolean {
    return this.fetchers.has(componentName);
  }

  /**
   * List all registered component names
   * @returns Array of component names
   */
  static getAllRegisteredComponents(): string[] {
    return Array.from(this.fetchers.keys());
  }
}