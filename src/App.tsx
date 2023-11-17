import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ListTodo from "./components/ListTodo";
import { TodoModel } from "./components/model";
function App() {
  // fetching  data from localStorage
  const getLocalItemes = () => {
    const list = localStorage.getItem("todos");
    if (list) {
      return JSON.parse(localStorage.getItem("todos") || "{}");
    } else {
      return [];
    }
  };
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>(getLocalItemes());
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // const value = (e.target as HTMLInputElement).value;
    if (input) {
      setTodos([...todos, { todo: input, id: Date.now(), isDone: false }]);
      setInput("");
    }
  };

  useEffect(() => {
    //adding our state to local storage

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-center flex-col items-center mt-6">
      <h1 className="font-serif text-5xl">Add your task</h1>
      <InputField input={input} addTodo={addTodo} setInput={setInput} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
