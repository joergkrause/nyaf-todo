import { BaseComponent, Properties, CustomElement, Events } from "@nyaf/lib";

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
      <div class="ToDoItem">
        <p class="ToDoItem-Text">{this.data.item.text}</p>
        <button class="ToDoItem-Delete" n-on-click={() => this.deleteItem()}>
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
