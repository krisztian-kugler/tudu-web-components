export abstract class Injector {
  private static providers = new WeakMap();

  private static getProvider(component: HTMLElement, provider: any) {
    const componentProviders = this.providers.get(component);
    for (let i = 0; i < componentProviders.length; i++) {
      const name = Object.getPrototypeOf(componentProviders[i]).constructor.name;
      if (name === provider.name) {
        return componentProviders[i];
      }
    }
  }

  static register(component: HTMLElement, ...providers: FunctionConstructor[]) {
    this.providers.set(
      component,
      providers.map(p => new p())
    );
  }

  static inject(component: HTMLElement, provider: any) {
    if (this.providers.has(component)) {
      const p = this.getProvider(component, provider);
      if (p) return p;
    }

    let element: HTMLElement = component.parentElement;

    while (element !== document.body) {
      if (element.tagName.includes("-") && this.providers.has(element)) {
        const p = this.getProvider(element, provider);
        if (p) return p;
      }
      element = element.parentElement;
    }

    throw new Error(`Provider '${provider.name}' is not registered in any component.`);
  }
}
