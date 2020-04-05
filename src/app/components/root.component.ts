import { Component } from "../../libs/core/component";

@Component({
  selector: "tudu-root",
})
export default class RootComponent extends HTMLElement {
  constructor() {
    super();
    console.dir(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.insertAdjacentHTML("afterbegin", `<h1>app works!</h1>`);
  }
}
