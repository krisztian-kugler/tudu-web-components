interface ComponentConfig {
  selector: string;
  providers?: any[];
}

export function Component(config: ComponentConfig) {
  const { selector, providers = [] } = config;

  if (!selector.includes("-")) throw new Error(`'${selector}' is not a valid selector. Please include a dash.`);

  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    constructor.prototype.selector = selector;
    constructor.prototype.providers = {};

    /* providers.forEach((Provider: FunctionConstructor) => {
      constructor.prototype.providers[Provider.name] = new Provider();
    }); */

    const decoratedComponent = class extends constructor {
      providers: { [key: string]: any } = {};
      selector = selector;

      constructor(...args: any[]) {
        super(...args);
        providers.forEach((Provider: FunctionConstructor) => {
          if (!this.providers) this.providers = {};
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
