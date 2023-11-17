import React from "react";
import { TodoModel } from "./model";

import Todo from "./Todo";
interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
const ListTodo = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos
        .slice()
        .reverse()
        .map((todo) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
};

export default ListTodo;
