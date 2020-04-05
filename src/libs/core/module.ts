import { Injector } from "./injector";

interface ModuleConfig {
  components: any[];
  providers?: any[];
}

export function Module(config: ModuleConfig) {
  const { components, providers } = config;

  if (providers) providers.forEach(p => Injector.register(p));

  components.forEach(c => customElements.define(c.prototype.selector, c));

  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      components = components;
    };
  };
}
