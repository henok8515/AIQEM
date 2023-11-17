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
      <div className="flex justify-between w-400">
        {edit ? (
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="add todo's"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                autoComplete="off"
                required
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="submit"
                  className="text-gray-500 text-4xl ml-6 mr-4 sm:text-sm"
                >
                  <MdOutlineDone />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <li
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
            className="text-2xl capitalize"
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
            <div className=" cursor-pointer text-slate-700 text-2xl flex flex-row-reverse justify-between w-52s">
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
