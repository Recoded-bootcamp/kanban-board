import React from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({
  task,
  showForm,
  isUpdate,
  setNewTask,
  setShowForm,
  handleTaskChange,
  handleTaskSubmit,
}) {
  const handleAddNewEmptyTask = () => {
    setShowForm(true);
    setNewTask({
      title: "",
      description: "",
      boardId: task.boardId,
      dueDate: "",
      assignee: "",
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  return (
    <div>
      {showForm ? (
        <form
          onSubmit={() => handleTaskSubmit(task)}
          className="flex flex-col items-center p-4 rounded-md bg-neutral-100 dark:bg-neutral-900"
        >
          <label
            className="flex items-center justify-between font-bold gap-2 w-full"
            htmlFor="title"
          >
            Title
            <input
              className="border-2 p-1 text-sm rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
              type="text"
              placeholder="Do the dishes"
              onChange={handleTaskChange}
              value={task.title}
              name="title"
              id="title"
              required
            />
          </label>

          <label
            className="flex items-center justify-between font-bold gap-2 mt-2 w-full"
            htmlFor="dueDate"
          >
            Due Date
            <input
              className="border-2 p-1 text-sm rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
              placeholder="12/31/2021"
              onChange={handleTaskChange}
              value={task.dueDate}
              name="dueDate"
              type="date"
              id="dueDate"
            />
          </label>

          <label
            className="flex items-center justify-between font-bold gap-2 mt-2 w-full"
            htmlFor="assignee"
          >
            Assignee
            <input
              className="border-2 p-1 text-sm w-full rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100"
              type="text"
              placeholder="John Doe"
              onChange={handleTaskChange}
              value={task.assignee}
              name="assignee"
              id="assignee"
            />
          </label>

          <label
            className="flex flex-col items-start justify-between font-bold gap-2 mt-2 w-full"
            htmlFor="description"
          >
            Description
            <textarea
              className="border-2 p-1 text-sm w-full rounded-md border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 h-24"
              placeholder="Put the dishes in the dishwasher"
              onChange={handleTaskChange}
              value={task.description}
              name="description"
              id="description"
            />
          </label>

          <div className="flex justify-end w-full mt-4 gap-2">
            <button
              className="rounded p-2 bg-red-300 hover:bg-red-400 text-neutral-900 font-bold dark:text-neutral-100 dark:hover:bg-red-600 dark:hover:text-neutral-100 dark:bg-red-500"
              onClick={() => setShowForm(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded p-2 bg-green-300 hover:bg-green-400 text-neutral-900 font-bold dark:text-neutral-100 dark:hover:bg-green-600 dark:hover:text-neutral-100 dark:bg-green-500"
              value={isUpdate ? "Update" : "Add"}
              onClick={handleTaskSubmit}
              type="button"
            >
              {isUpdate ? "Update" : "Add"}
            </button>
          </div>
        </form>
      ) : (
        <button
          className="flex items-center justify-center w-full px-4 py-2 rounded-md bg-white dark:bg-neutral-900 transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-lg"
          onClick={handleAddNewEmptyTask}
          type="button"
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
          Add a task
        </button>
      )}
    </div>
  );
}

export default TaskForm;
