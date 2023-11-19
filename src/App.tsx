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
  const [cat, setCat] = useState<string>("");
  const [addMode, setAddMode] = useState<boolean>(false);

  const [todos, setTodos] = useState<TodoModel[]>(getLocalItemes());
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // const value = (e.target as HTMLInputElement).value;
    if (input) {
      setTodos([
        ...todos,
        { todo: input, id: Date.now(), isDone: false, catagories: cat },
      ]);
      setInput("");
      addMode;
    }
  };

  useEffect(() => {
    //adding our state to local storage

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex  h-screen overflow-hidden flex-col items-center pt-6">
      <h1 className=" text-6xl sm:text-3xl md:text-3xl mt-2 ">
        Aԃԃ Yσυɾ Tσԃσ'ʂ
      </h1>
      <InputField
        cat={cat}
        setCat={setCat}
        input={input}
        addTodo={addTodo}
        setInput={setInput}
        setAddMode={setAddMode}
      />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
