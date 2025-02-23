// lib/FetcherRegistry.ts
export class FetcherRegistry {
  private static fetchers: Record<string, any> = {};

  static register(name: string, fetcher: any) {
    this.fetchers[name] = fetcher;
  }

  static getFetcher(name: string) {
    return this.fetchers[name];
  }
}

