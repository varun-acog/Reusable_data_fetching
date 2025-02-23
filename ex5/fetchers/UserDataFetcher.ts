import { BaseFetcher } from "../lib/BaseFetcher";
import { FetcherRegistry } from "../lib/FetcherRegistry";

export class UserDataFetcher extends BaseFetcher<{ id: number; name: string }> {
  constructor() {
    super("/data/users.json");
  }
}

FetcherRegistry.register("UserData", new UserDataFetcher());
