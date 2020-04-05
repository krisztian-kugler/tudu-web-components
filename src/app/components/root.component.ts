import { Component, Injector } from "@core";
import { DataService } from "../services/data.service";

@Component({
  selector: "tudu-root",
  providers: [DataService],
})
export default class RootComponent extends HTMLElement {
  constructor(private dataService: DataService) {
    super();
    this.dataService = Injector.inject(this, DataService);
    console.log(this.dataService);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.insertAdjacentHTML("afterbegin", `<tudu-header></tudu-header><tudu-header></tudu-header><main></main>`);
  }
}
