import JSX, { GlobalProvider } from "@nyaf/lib";
import App from "./App";
import ToDo from "./components/ToDo";
import ToDoItem from "./components/ToDoItem";

window.JSX = JSX;

GlobalProvider.bootstrap({
  components: [
    App,
    ToDo,
    ToDoItem
  ]
});

const root = document.getElementById("root");
root.innerHTML = '<app-main></app-main>';

