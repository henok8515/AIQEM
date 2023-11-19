import { TodoModel } from "../components/model";

export const setLocalstorage = (todos: TodoModel[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getLocalItems = () => {
  const list = localStorage.getItem("todos");
  if (list) {
    return JSON.parse(localStorage.getItem("todos") || "{}");
  } else {
    return [];
  }
};
