export abstract class Injector {
  private static providers = new WeakMap();

  static register(element: HTMLElement, ...providers: FunctionConstructor[]) {
    this.providers.set(
      element,
      providers.map(p => new p())
    );
  }

  static inject(element: HTMLElement, provider: any) {
    while (element !== document.body) {
      if (this.providers.has(element)) {
        for (const p of this.providers.get(element)) {
          if (Object.getPrototypeOf(p).constructor.name === provider.name) return p;
        }
      }
      element = element.parentElement;
    }

    throw new Error(`Provider '${provider.name}' is not registered in any component.`);
  }
}
