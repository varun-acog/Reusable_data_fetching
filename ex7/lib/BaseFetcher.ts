export class BaseFetcher<T> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async fetchData(): Promise<T[]> {
    if (typeof window !== "undefined") {
      // 🟢 Fetch from API when in the browser
      const response = await fetch(this.url);
      return response.json();
    } else {
      // 🔵 Read from filesystem only on the server
      const { promises: fs } = await import("fs");
      const path = await import("path");

      const filePath = path.join(process.cwd(), "public", this.url);
      console.log(`📂 Fetching data from: ${filePath}`);

      const fileData = await fs.readFile(filePath, "utf-8");
      return JSON.parse(fileData);
    }
  }
}
