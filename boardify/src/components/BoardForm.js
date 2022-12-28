import React from "react";

function BoardForm({ onSubmit, onChange, newBoard }) {
  return (
    <div className="card my-6 rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-lg">
      <form
        className="flex justify-center items-center gap-4 py-8"
        onSubmit={onSubmit}
      >
        <label className="font-bold" htmlFor="board-name">
          Board Name
          <input
            className="border-2 p-2 text-sm ml-4 rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Board
        </button>
      </form>
    </div>
  );
}

export default BoardForm;
