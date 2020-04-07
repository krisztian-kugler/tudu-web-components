export default abstract class App {
  public static set components(components: any[]) {
    components.forEach(c => {
      customElements.define(c.selector, c);
      this._components.push(c);
    });
  }

  public static get components(): any[] {
    return this._components;
  }

  private static _components: any = [];

  public static set providers(providers: any) {
    providers.forEach((Provider: FunctionConstructor) => {
      this._providers[Provider.name] = new Provider();
    });
  }

  public static get providers() {
    return this._providers;
  }

  private static _providers: { [key: string]: any } = {};

  public static services: any = {};

  public static register(Service: any) {
    this.services[Service.name] = new Service();
  }

  public static inject(Service: any) {
    return this.services[Service.name];
  }
}
