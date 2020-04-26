import { Injector } from "./injector";

interface ComponentConfig {
  selector: string;
  providers?: any[];
}

export function Component(config: ComponentConfig) {
  const { selector, providers = [] } = config;

  if (!selector.includes("-")) throw new Error(`'${selector}' is not a valid selector. A dash must be included.`);

  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    return class extends constructor {
      static selector = selector;
      private initialized = false;

      constructor(...args: any[]) {
        super();
        if (providers.length) Injector.register(this as any, ...providers);
      }

      connectedCallback() {
        if (!this.initialized) {
          if (super.onInit) super.onInit();
          if (super.render) super.render();
          this.initialized = true;
        }

        if (super.connectedCallback) super.connectedCallback();
      }
    };
  };
}
