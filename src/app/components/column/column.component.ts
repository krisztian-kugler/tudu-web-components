import { Component } from "@core";
import "./column.component.scss";

@Component({
  selector: "tudu-column",
})
export default class ColumnComponent extends HTMLElement {
  constructor() {
    super();
  }

  onInit() {}

  render() {
    this.innerHTML = `Column`;
  }
}
