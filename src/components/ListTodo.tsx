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
      {todos.length === 0 ? (
        <h1 className="mt-6 sm:text-1xl flex flex-wrap text-center text-2xl capitalize opacity-50">
          bro put some task's don't be lazy!!!
        </h1>
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
