import { Component } from "@core";
import "./card.component.scss";

@Component({
  selector: "tudu-card",
})
export default class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.classList.add("tudu-card");
  }

  onInit() {}

  render() {
    this.innerHTML = `Card`;
  }
}
