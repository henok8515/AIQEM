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
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo, catagories: editCat } : todo
      )
    );
    setEdit(false);
  };
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const [editCat, setEditCat] = useState(todo.catagories);
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
                className="py-2 text-sm text-white bg-gray-900  pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                autoComplete="off"
                required
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  onChange={(e) => setEditCat(e.target.value)}
                  value={editCat}
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled>Catagories</option>
                  <option>Personal</option>
                  <option>Work</option>
                </select>
                <button type="submit" className="text-gray-500 sm:text-sm">
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
          <p>{todo.catagories}</p>
        </div>
      </div>
    </form>
  );
}

export default Todo;
