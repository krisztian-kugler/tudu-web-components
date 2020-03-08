import { Component } from "../core/component";

@Component({
  selector: "tudu-root"
})
export default class RootComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.insertAdjacentHTML("afterbegin", `<h1>app works!</h1>`);
  }
}
