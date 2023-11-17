import React, { useState } from "react";
import { TodoModel } from "./model";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone, MdEdit } from "react-icons/md";
interface Props {
  todos: TodoModel[];
  todo: TodoModel;
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}
function Todo({ todos, setTodos, todo }: Props) {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log(id);
  };
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure do you want to delete")) {
      // Save it!
      setTodos(todos.filter((todo) => todo.id !== id));
      console.log(id);
    } else {
      // Do nothing!
    }
  };
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  return (
    <form onSubmit={(e) => handelEdit(e, todo.id)}>
      <div
        style={{
          display: "flex",
          width: "300px",
          // flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {edit ? (
          <input
            required
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            autoFocus
          />
        ) : (
          <li
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.todo}
          </li>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "30%",
          }}
        >
          {edit ? null : (
            <div className="flex flex-row-reverse justify-between w-24">
              <AiFillDelete onClick={() => handleDelete(todo.id)} />
              <MdOutlineDone onClick={() => handleDone(todo.id)} />
              <MdEdit
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Todo;
