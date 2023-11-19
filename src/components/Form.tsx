import React from 'react'

interface Props {
  input: string
  catagories: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  addTodo: (e: React.FormEvent) => void
  setCatagories: React.Dispatch<React.SetStateAction<string>>
  setAddMode: React.Dispatch<React.SetStateAction<boolean>>
}
function Form({ input, setInput, addTodo, catagories, setCatagories }: Props) {
  return (
    <form className="flex  w-screen justify-center mt-10 mb" onSubmit={addTodo}>
      <div className="flex  justify-center">
        <select
          onChange={(e) => setCatagories(e.target.value)}
          value={catagories}
          id="subject"
          name="subject"
          required
          className=" border w-28 sm:w-28 text-sm border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
          <option value="">catagories</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work </option>
          <option value="School">School</option>
        </select>

        <div className="relative ">
          <input
            type="search"
            id="search-dropdown"
            className="block p-4 w-96 z-20 sm:w-60 w-56 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            required
            name="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add Your task"
          />
          <button
            type="submit"
            className=" flex  justify-center items-center absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
