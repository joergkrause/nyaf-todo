import { CustomElement, Properties, BaseComponent, LifeCycle } from "@nyaf/lib";
import * as Logo from "../assets/logo.png";
import "./ToDo.css";

@CustomElement('app-todo')
@Properties({ list: [] })
class ToDo extends BaseComponent {

  toDo;

  constructor() {
    super();    
  }

  generateId() {
    if (this.data.list && this.data.list.length > 0) {
      return Math.max(...this.data.list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  }

  createNewToDoItem() {
    //validate todo
    if (!this.toDo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = this.generateId();
    const newToDo = { id: newId, text: this.toDo };
    this.data.list = [...this.data.list, newToDo];
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.createNewToDoItem();
    }
  }

  handleInput(e) {
    this.toDo = e.target.value;
  }

  deleteItem(e) {
    const id = e.detail;
    this.data.list = this.data.list.filter((item) => item.id !== id);
  }

  async render() {
    if (!this.data.list.length) {
        this.setData('list', [
        { id: 1, text: "clean the house" },
        { id: 2, text: "get some flowers" }
      ]);
      this.toDo = '';
      return;
    }
    return await (
      <div class="ToDo">
        <img class="Logo" src={Logo.default} alt="@nyaf logo" />
        <h1 class="ToDo-Header">@nyaf To Do</h1>
        <div class="ToDo-Container">
          <div class="ToDo-Content">
            {this.data.list.map((item) => {
              return <app-todo-item item={item} n-on-delete={(e) => this.deleteItem(e)} />;
            })}
          </div>

          <div class="ToDoInput">
            <input type="text" placeholder="Enter a todo..." value={this.toDo} n-on-input={(e) => this.handleInput(e)} n-on-keypress={(e) => this.handleKeyPress(e)} />
            <button class="ToDo-Add" n-on-click={(e) => this.createNewToDoItem()}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default ToDo;
