import JSX, { BaseComponent, Properties, CustomElement, Events } from "@nyaf/lib";

import "./ToDoItem.css";

@CustomElement('app-todo-item')
@Properties({ item: { text: '', id: 0 } })
@Events(['delete'])
class ToDoItem extends BaseComponent {

  constructor() {
    super();
  }

  async render() {
    return (
      <div className="ToDoItem">
        <p className="ToDoItem-Text">{this.data.item.text}</p>
        <button className="ToDoItem-Delete" n-on-click={() => this.deleteItem()}>
          -
        </button>
      </div>
    );
  }

  deleteItem() {
    this.dispatch('delete', { bubbles: true, detail: this.data.item.id });
  }

}

export default ToDoItem;
