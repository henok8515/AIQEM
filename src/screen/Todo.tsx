import React, { useState } from 'react'
import { TodoModel } from '../components/model'
import { Check, CheckCircle, Pencil, Trash2 } from 'lucide-react'
interface Props {
  todos: TodoModel[]
  todo: TodoModel
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}
function Todo({ todos, setTodos, todo }: Props) {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState(todo.todo)
  const [editCat, setEditCat] = useState(todo.catagories)
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure do you want to delete')) {
      // Save it!
      setTodos(todos.filter((todo) => todo.id !== id))
      console.log(id)
    } else {
      // Do nothing!
    }
  }
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo, catagories: editCat } : todo
      )
    )
    setEdit(false)
  }
  return (
    <form onSubmit={(e) => handelEdit(e, todo.id)}>
      <div className="flex  w-screen mt-4   justify-center items-start w-400">
        {edit ? (
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 justify-around left-0 flex items-center pl-3"></div>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Edit your todo"
                className="py-2 text-sm text-black text-lg  bg-slate-200  w-96 pl-10 focus:outline-none "
                autoComplete="off"
                required
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div>
                  <select
                    required
                    onChange={(e) => setEditCat(e.target.value)}
                    value={editCat}
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 flex justify-around text-black  focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option value="">Catagories</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="School">Schooll</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="text-gray-500 pr-3 px-5 sm:text-sm">
                  <Check className="hover:text-teal-800" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              !todo.isDone
                ? ' bg-blue-900  text-gray-50  flex justify-between items-center m-1   w-screen md:w-3/4 text-startbg-blue-500  font-semibold py-3 px-1 border border-blue-500 hover:border-transparent rounded'
                : ' sm:flex bg-green-700 line-through  text-white flex justify-between items-center w-screen   w-3/4 md:w-3/4  text-startbg-blue-500  font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            }>
            <p
              style={{
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
              className="font-serif ml-3  sm:text-3xl text-lg font-thin capitalize ">
              {todo.todo}
              {todo.isDone ? (
                <button className="bg-blue-500 ml-6  sm:text-2xl text-white font-thin py-1 px-2 text-sm rounded">
                  Completed
                </button>
              ) : null}
            </p>
            {edit ? null : (
              <div className="sm:w-3/5 sm:text-sm  sm:justify-end  hover:text-black items-center   cursor-pointer  text-slate-700 text-2xl flex  justify-between">
                <div className="  text-gray-400 flex justify-start text-start flex-row-reverse mr-4 items-start ">
                  <Trash2
                    className="ml-2 hover:text-red-700"
                    onClick={() => handleDelete(todo.id)}
                  />

                  <Pencil
                    onClick={() => {
                      if (!edit && !todo.isDone) {
                        setEdit(!edit)
                      }
                    }}
                    className="hover:text-green-600  mr-2 "
                  />
                  <CheckCircle
                    onClick={() => handleDone(todo.id)}
                    className="h-6 w-12  mr-2 hover:text-yellow-600"
                  />
                </div>
                {editTodo ? (
                  <button
                    type="button"
                    className=" text-xs rounded-md  sm:text-xs text-white w-30 sm:w-56 no-underline bg-gray-800  focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    {todo.catagories}
                  </button>
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  )
}

export default Todo
