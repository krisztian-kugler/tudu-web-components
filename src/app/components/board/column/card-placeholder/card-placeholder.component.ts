import { Component } from "@core";
import "./card-placeholder.component.scss";

@Component({
  selector: "tudu-card-placeholder",
})
export default class CardPlaceholderComponent extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<div class="placeholder"></div>`;
  }
}
