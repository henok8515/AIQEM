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
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="add todo's"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="py-2 text-sm text-white bg-gray-900  pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              autoComplete="off"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputField;
