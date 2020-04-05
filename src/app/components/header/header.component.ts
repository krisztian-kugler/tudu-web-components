import { Component, Injector } from "@core";
import "./header.component.scss";
import { DataService } from "../../services/data.service";

@Component({
  selector: "tudu-header",
})
export default class HeaderComponent extends HTMLElement {
  constructor(private dataService: DataService) {
    super();
    this.dataService = Injector.inject(this, DataService);
    console.dir(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.insertAdjacentHTML("afterbegin", `<header>Header</header>`);
  }
}
