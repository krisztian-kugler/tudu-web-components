import { Component, Injector } from "@core";
import "./root.component.scss";
import { DataService } from "../services/data.service";

@Component({
  selector: "tudu-root",
  providers: [DataService],
})
export default class RootComponent extends HTMLElement {
  constructor(private dataService: DataService) {
    super();
  }

  onInit() {
    this.dataService = Injector.inject(this, DataService);
  }

  render() {
    this.innerHTML = `
      <tudu-header></tudu-header>
      <main class="workspace">
        <section class="project-header">
          <h1>Project</h1>
        </section>
        <tudu-board></tudu-board>
      </main>
    `;
  }
}
