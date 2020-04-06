import { Injector } from "./injector";

interface ComponentConfig {
  selector: string;
  providers?: FunctionConstructor[];
}

export function Component(config: ComponentConfig) {
  const { selector, providers = [] } = config;

  if (!selector.includes("-")) throw new Error(`'${selector}' is not a valid selector. A dash must be included.`);

  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    return class extends constructor {
      static selector = selector;

      constructor(...args: any[]) {
        super();
        if (providers.length) Injector.register(this as any, ...providers);
        this.onInit();
        this.render();
      }
    };
  };
}
