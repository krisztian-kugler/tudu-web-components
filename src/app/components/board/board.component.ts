import { Component } from "@core";
import "./board.component.scss";

@Component({
  selector: "tudu-board",
})
export default class BoardComponent extends HTMLElement {
  constructor() {
    super();
  }

  onInit() {}

  render() {
    this.innerHTML = `
      <tudu-column></tudu-column>
      <tudu-column></tudu-column>
      <tudu-column></tudu-column>
    `;
  }
}
