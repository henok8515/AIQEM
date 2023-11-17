import React from "react";
interface Props {
  input: string;
  cat: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
  setCat: React.Dispatch<React.SetStateAction<string>>;
}
function InputField({ input, setInput, addTodo, cat, setCat }: Props) {
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
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                onChange={(e) => setCat(e.target.value)}
                id="currency"
                name="currency"
                value={cat}
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option disabled>Catagories</option>
                <option>Personal</option>
                <option>Work</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit"> add</button>
      </form>
    </div>
  );
}

export default InputField;
