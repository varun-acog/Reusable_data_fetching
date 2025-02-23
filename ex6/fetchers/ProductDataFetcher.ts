import { BaseFetcher } from "../lib/BaseFetcher";
import { FetcherRegistry } from "../lib/FetcherRegistry";

export class ProductDataFetcher extends BaseFetcher<{
  id: number;
  name: string;
}> {
  constructor() {
    super("/data/products.json"); // Ensure this path is correct
  }
}
