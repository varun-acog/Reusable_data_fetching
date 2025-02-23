import { ProductDataFetcher } from "../fetchers/ProductDataFetcher";
import { UserDataFetcher } from "../fetchers/UserDataFetcher";

export class FetcherRegistry {
  private static fetchers: Record<string, any> = {};
  private static initialized = false;

  // ✅ Lazy Initialization to avoid circular dependency
  private static initialize() {
    if (!this.initialized) {
      console.log("⏳ Initializing Fetchers...");
      this.register("ProductData", new ProductDataFetcher());
      this.register("UserData", new UserDataFetcher());
      this.initialized = true;
      console.log("✅ Fetcher registration complete!");
    }
  }

  static register(name: string, fetcher: any) {
    console.log(`✅ Fetcher registered: ${name}`);
    this.fetchers[name] = fetcher;
  }

  static getFetcher(name: string) {
    this.initialize(); // ✅ Ensure fetchers are registered before fetching
    console.log(`🔍 Fetching ${name} from registry:`, this.fetchers);
    return this.fetchers[name] || null;
  }
}
