import JSX, { BaseComponent, CustomElement } from "@nyaf/lib";
import "./App.css";

@CustomElement('app-main')
export default class App extends BaseComponent {
  constructor() {
    super();
  }

  async render() {
    return <app-todo></app-todo>;
  }

}
