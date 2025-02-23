import { BaseFetcher } from "../lib/BaseFetcher";

export class ProductDataFetcher extends BaseFetcher<{ id: number; name: string }> {
  constructor() {
    super("/data/products.json");
  }
}
