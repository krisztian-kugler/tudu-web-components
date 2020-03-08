import App from "../app";

interface ComponentConfig {
  selector: string;
  providers?: any[];
}

export function Component(config: ComponentConfig) {
  const { selector, providers } = config;

  if (!selector.includes("-"))
    throw new Error(`'${selector}' is not a valid component selector. Please include at least one dash.`);

  if (providers) providers.forEach(provider => App.register(provider));

  return function(constructor: any) {
    constructor.prototype.selector = config.selector;
    customElements.define(selector, constructor);
  };
}
