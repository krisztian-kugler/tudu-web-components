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
    this.innerHTML = `
      <h2 class="column-title">Title</h2>
      <tudu-card></tudu-card>
    `;
  }
}
