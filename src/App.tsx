import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import ListTodo from './screen/ListTodo'
import { TodoModel } from './components/model'

import { setLocalstorage, getLocalItems } from './lib/storage'
import './app.css'
function App() {
  const [input, setInput] = useState<string>('')
  const [catagories, setCatagories] = useState<string>('')
  const [addMode, setAddMode] = useState<boolean>(false)
  const [todos, setTodos] = useState<TodoModel[]>(getLocalItems())
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (input) {
      setTodos([
        ...todos,
        { todo: input, id: Date.now(), isDone: false, catagories: catagories },
      ])
      setInput('')
      addMode
    }
  }
  useEffect(() => {
    setLocalstorage(todos)
  }, [todos])
  return (
    <div className=" bg-slate-100  flex  h-screen overflow-hidden flex-col items-center pt-6">
      <h1 className=" sm:text-5xl text-4xl  text-2xl mt-2 ">Aԃԃ Yσυɾ Tσԃσ'ʂ</h1>
      <Form
        catagories={catagories}
        setCatagories={setCatagories}
        input={input}
        addTodo={addTodo}
        setInput={setInput}
        setAddMode={setAddMode}
      />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
