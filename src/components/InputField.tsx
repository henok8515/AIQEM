import React from "react";
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}
function InputField({ input, setInput, addTodo }: Props) {
  return (
    <div>
      <form
        onSubmit={addTodo}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          height: "100px",
        }}
      >
        <input
          placeholder="add todo's"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
          autoComplete="off"
        />

        <button
          style={{
            padding: "20px",
            borderRadius: "0px 20px 20px 0px",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputField;
