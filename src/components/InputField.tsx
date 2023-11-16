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
          style={{
            padding: "20px",
            borderRadius: "20px 0px 0px 20px",
          }}
          placeholder="add todo's"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            padding: "20px",
            borderRadius: "0px 20px 20px 0px",
          }}
        >
          go
        </button>
      </form>
    </div>
  );
}

export default InputField;
