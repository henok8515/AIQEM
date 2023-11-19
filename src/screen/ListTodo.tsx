import React from "react";
import { TodoModel } from "../components/model";

import Todo from "./Todo";
import EmptyTodoBanner from "../components/EmptyTodoBanner";
interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
const ListTodo = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.length === 0 ? (
        <EmptyTodoBanner />
      ) : (
        todos
          .slice()
          .reverse()
          .map((todo) => <Todo todo={todo} todos={todos} setTodos={setTodos} />)
      )}
    </div>
  );
};

export default ListTodo;
