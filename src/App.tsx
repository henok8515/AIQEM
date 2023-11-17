import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ListTodo from "./components/ListTodo";
import { TodoModel } from "./components/model";
function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // const value = (e.target as HTMLInputElement).value;
    if (input) {
      setTodos([...todos, { todo: input, id: Date.now(), isDone: false }]);
      console.log(todos, "todos");
      console.log(input, "input");
      setInput("");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center mt-6">
      <InputField input={input} addTodo={addTodo} setInput={setInput} />
      <ListTodo input={input} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
