export class BaseFetcher<T> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async fetchData(): Promise<T[]> {
    const response = await fetch(this.url);
    return response.json();
  }
}

