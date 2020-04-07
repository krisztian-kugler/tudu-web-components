import { Component, Injector } from "@core";
import "./header.component.scss";
import { DataService } from "../../services/data.service";

@Component({
  selector: "tudu-header",
})
export default class HeaderComponent extends HTMLElement {
  constructor(private dataService: DataService) {
    super();
  }

  onInit() {
    this.dataService = Injector.inject(this, DataService);
  }

  render() {
    this.innerHTML = `Header`;
  }
}
