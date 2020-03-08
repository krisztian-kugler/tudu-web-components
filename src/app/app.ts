export default abstract class App {
  public static components: any = [];
  public static componentTree: any = {};
  public static services: { [key: string]: any } = {};

  public static register(Service: any) {
    this.services[Service.name] = new Service();
  }

  public static inject(Service: any) {
    return this.services[Service.name];
  }
}
