export class MockRepository<T> {
  constructor(public data: T[] = []) {}

  init(initialData: T[]): void {
    this.data = initialData;
  }

  withData(data: T[]): this {
    this.data = data;
    return this;
  }

  sleep(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  }
}
