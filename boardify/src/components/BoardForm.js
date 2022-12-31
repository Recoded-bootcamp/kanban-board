import React from "react";

function BoardForm({ onSubmit, onChange, newBoard }) {
  return (
    <div className="card container  mx-auto my-4 rounded-xl  bg-neutral-100 dark:bg-neutral-800 shadow-lg">
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 py-8"
        onSubmit={onSubmit}
      >
        <label
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center font-bold"
          htmlFor="board-name"
        >
          Board Name
          <input
            className="border-2 p-2 text-sm mt-4 sm:mt-0 sm:ml-4 rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
            placeholder="ToDo, Shopping, etc..."
            value={newBoard.title}
            onChange={onChange}
            id="board-name"
            name="title"
            type="text"
            required
          />
        </label>
        <button
          className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-400 font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-neutral-500 dark:text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Board
        </button>
      </form>
    </div>
  );
}

export default BoardForm;
