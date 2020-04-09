import { Component } from "@core";
import "./column.component.scss";
import CardComponent from "./card/card.component";

@Component({
  selector: "tudu-column",
})
export default class ColumnComponent extends HTMLElement {
  private _column: any;

  get column(): any {
    return this._column;
  }

  set column(value: any) {
    this._column = value;
  }

  constructor() {
    super();
  }

  onInit() {}

  render() {
    this.innerHTML = `
      <h2 class="column-title">${this.column.title}</h2>
      <div class="card-list"></div>
    `;

    for (const issue of this.column.issues) {
      const cardElement = document.createElement("tudu-card") as CardComponent;
      cardElement.issue = issue;
      this.querySelector(".card-list").append(cardElement);
    }
  }
}
