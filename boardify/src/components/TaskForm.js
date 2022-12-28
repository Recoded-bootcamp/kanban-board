import React from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({
  task,
  handleTaskChange,
  handleTaskSubmit,
  showForm,
  setShowForm,
  setNewTask,
  isUpdate,
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
          className="bg-white p-5 rounded-lg my-4"
        >
          <div>
            <label className="font-bold" htmlFor="title">
              <input
                className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2 placeholder:pl-0.5"
                type="text"
                placeholder="enter a task title"
                onChange={handleTaskChange}
                value={task.title}
                name="title"
                id="title"
              />
              Title
            </label>
          </div>

          <div className="mt-2">
            <label className="font-bold" htmlFor="dueDate">
              <input
                className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2
            placeholder:pl-1"
                type="date"
                placeholder="enter a due date"
                onChange={handleTaskChange}
                value={task.dueDate}
                name="dueDate"
                id="dueDate"
              />
              Due Date
            </label>
          </div>

          <div className="mt-2">
            <label className="font-bold" htmlFor="assignee">
              <input
                className="border-2 w-32 md:w-40 border-black placeholder:italic pl-2 placeholder:pl-0.5"
                type="text"
                placeholder="enter an assignee"
                onChange={handleTaskChange}
                value={task.assignee}
                name="assignee"
                id="assignee"
              />
              Assignee
            </label>
          </div>

          <div className="mt-2">
            <label className="font-bold" htmlFor="description">
              <input
                className="border-2 w-32 h-20 pl-2 md:w-40 border-black placeholder:italic placeholder:pl-0.5 align-top"
                type="text"
                placeholder="enter a description"
                onChange={handleTaskChange}
                value={task.description}
                name="description"
              />
              Description
            </label>
          </div>

          <input
            className="border-2 border-black mt-4 w-20 bg-black text-white hover:bg-red-800
            hover:cursor-pointer hover:text-white hover:border-red-800"
            type="submit"
            value={isUpdate ? "Update" : "Add"}
            onClick={handleTaskSubmit}
          />

          <button
            onClick={() => setShowForm(false)}
            className="border-2 border-black mt-4 md:ml-4 w-16 bg-black text-white
            hover:cursor-pointer hover:text-white hover:bg-red-800 hover:border-red-800"
            type="button"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={handleAddNewEmptyTask}
          className="border-2 border-black my-4 w-full bg-black text-white font-bold p-2 hover:bg-white
          hover:cursor-pointer hover:text-black"
          type="button"
        >
          Add Task
        </button>
      )}
    </div>
  );
}

export default TaskForm;
