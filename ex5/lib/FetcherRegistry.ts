export class FetcherRegistry {
  private static fetchers: Record<string, any> = {};

  static register(name: string, fetcher: any) {
    this.fetchers[name] = fetcher;
    console.log(`✅ Fetcher registered: ${name}`); // 🔍 Debug log
  }

  static getFetcher(name: string) {
    console.log(`🔍 Fetching ${name} from registry:`, this.fetchers);
    return this.fetchers[name];
  }
}
