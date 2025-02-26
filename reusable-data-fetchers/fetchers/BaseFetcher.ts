import { FetcherRegistry } from '../lib/FetcherRegistry';

/**
 * Generic base class for data fetching
 * T represents the type of data being fetched
 */
export abstract class BaseFetcher<T> {
  protected componentName: string;

  constructor(componentName: string) {
    this.componentName = componentName;
    this.register();
  }

  /**
   * Abstract method that must be implemented by child classes
   * Defines the specific data fetching logic
   */
  abstract fetchData(): Promise<T[]>;

  /**
   * Registers this fetcher with the central registry
   */
  private register(): void {
    FetcherRegistry.register(this.componentName, this.fetchData.bind(this));
  }
}