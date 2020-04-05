export default abstract class App {
  public static set components(components: any[]) {
    components.forEach(c => {
      console.dir(c);
      customElements.define(c.prototype.selector, c);
      this._components.push(c);
    });
  }

  public static get components(): any[] {
    return this._components;
  }

  private static _components: any = [];

  public static services: { [key: string]: any } = {};

  public static register(Service: any) {
    this.services[Service.name] = new Service();
  }

  public static inject(Service: any) {
    return this.services[Service.name];
  }
}
