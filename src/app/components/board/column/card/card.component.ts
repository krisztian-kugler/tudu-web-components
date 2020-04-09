import { Component } from "@core";
import "./card.component.scss";

@Component({
  selector: "tudu-card",
})
export default class CardComponent extends HTMLElement {
  issue: any;

  constructor() {
    super();
  }

  onInit() {}

  render() {
    this.innerHTML = `<p>${this.issue.title}</p>`;
  }
}
