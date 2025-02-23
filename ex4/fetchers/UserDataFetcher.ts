import { BaseFetcher } from "../lib/BaseFetcher";

export class UserDataFetcher extends BaseFetcher<{ id: number; name: string }> {
  constructor() {
    super("/data/users.json");
  }
}
