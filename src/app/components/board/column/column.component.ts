import { Component, Injector } from "@core";
import "./column.component.scss";
import CardComponent from "./card/card.component";
import { DragDropService } from "../../../services/drag-drop.service";

@Component({
  selector: "tudu-column",
})
export default class ColumnComponent extends HTMLElement {
  private _column: any;
  private dragDropService: DragDropService;

  get column(): any {
    return this._column;
  }

  set column(value: any) {
    this._column = value;
  }

  constructor() {
    super();
  }

  onInit() {
    this.dragDropService = Injector.inject(this, DragDropService);
    this.dragDropService.defineDropzone(this);
  }

  render() {
    this.innerHTML = `
      <div class="column">
        <h2 class="column-title">${this.column.title}</h2>
        <div class="card-list"></div>
        <button class="add-card">Add Card</button>
      </div>
    `;

    for (const issue of this.column.issues) {
      const cardSlotElement = document.createElement("div");
      cardSlotElement.classList.add("card-slot");
      const cardElement = document.createElement("tudu-card") as CardComponent;
      cardElement.issue = issue;
      cardSlotElement.append(cardElement);
      this.querySelector(".card-list").append(cardSlotElement);
    }
  }
}
