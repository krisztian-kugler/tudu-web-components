interface ComponentConfig {
  selector: string;
  providers?: any[];
}

export function Component(config: ComponentConfig) {
  const { selector, providers = [] } = config;

  if (!selector.includes("-")) throw new Error(`'${selector}' is not a valid selector. Please include a dash.`);

  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    const decoratedComponent = class extends constructor {
      // static selector = selector;
      providers: { [key: string]: any } = {};

      constructor(...args: any[]) {
        super();
        providers.forEach((Provider: FunctionConstructor) => {
          this.providers[Provider.name] = new Provider();
        });
      }

      connectedCallback() {
        super.connectedCallback();
      }
    };

    decoratedComponent.prototype.selector = selector;

    // customElements.define(selector, decoratedComponent);

    return decoratedComponent;
  };
}
