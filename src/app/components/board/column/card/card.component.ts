import { Component, Injector } from "@core";
import "./card.component.scss";
import { DragDropService } from "../../../../services/drag-drop.service";

@Component({
  selector: "tudu-card",
})
export default class CardComponent extends HTMLElement {
  issue: any;
  private dragDropService: DragDropService;

  constructor() {
    super();
  }

  onInit() {
    this.dragDropService = Injector.inject(this, DragDropService);
    this.dragDropService.defineDraggable(this);
  }

  render() {
    this.innerHTML = `<p>${this.issue.title}</p>`;
  }
}
