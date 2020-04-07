import { Component, Injector } from "@core";
import "./root.component.scss";
import { DataService } from "../services/data.service";

@Component({
  selector: "tudu-root",
  providers: [DataService],
})
export default class RootComponent extends HTMLElement {
  constructor(private dataService: DataService) {
    super();
  }

  onInit() {
    this.dataService = Injector.inject(this, DataService);
  }

  render() {
    this.innerHTML = `
      <tudu-header></tudu-header>
    `;
  }
}
