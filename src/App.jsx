import { BaseComponent, CustomElement } from "@nyaf/lib";
import "./App.css";

@CustomElement('app-main')
export default class App extends BaseComponent {

  data;

  constructor() {
    super();
  }

  async render() {
    console.log('Render called app-main');
    return await <app-todo></app-todo>;
  }

}
