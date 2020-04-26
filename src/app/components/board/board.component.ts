import { Component } from "@core";
import "./board.component.scss";
import ColumnComponent from "./column/column.component";
import { DragDropService } from "../../services/drag-drop.service";

@Component({
  selector: "tudu-board",
  providers: [DragDropService],
})
export default class BoardComponent extends HTMLElement {
  constructor() {
    super();
  }

  onInit() {}

  connectedCallback() {
    fetch("assets/data.json")
      .then(response => response.json())
      .then(data => {
        for (const column of data.columns) {
          const columnElement = document.createElement("tudu-column") as ColumnComponent;
          columnElement.column = column;
          this.append(columnElement);
        }
      });
  }

  render() {
    this.innerHTML = ``;
  }
}
