import React from "react";

import closeIcon from "~/assets/images/close.svg";
import editIcon from "~/assets/images/pencil.svg";
import assigneeIcon from "~/assets/images/user-check.svg";
import calendarIcon from "~/assets/images/calendar-event.svg";
import descriptionIcon from "~/assets/images/file-description.svg";

function TaskCard({
  task,
  editTask,
  showForm,
  isUpdate,
  deleteTask,
  setIsUpdate,
  setShowForm,
  handleIsCompleted,
}) {
  const handleDelete = () => {
    deleteTask(task.taskId);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
    setIsUpdate(!isUpdate);
    editTask(task);
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 mb-4 shadow-md">
      <div className="sm:flex-wrap flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg">{task.title}</h1>

        <div className="flex items-center gap-2">
          <button
            className="rounded p-2 bg-blue-300 transition duration-300 ease-in-out hover:bg-blue-500"
            onClick={handleEdit}
            type="button"
          >
            <img src={editIcon} alt="edit" className="w-4 h-4 mx-auto" />
          </button>

          <button
            type="button"
            className="rounded p-2 bg-red-300 transition duration-300 ease-in-out hover:bg-red-500"
            onClick={handleDelete}
          >
            <img src={closeIcon} alt="close" className="w-4 h-4 mx-auto" />
          </button>
        </div>
      </div>

      {task.description ? (
        <div className="flex items-center pt-2">
          <img
            src={descriptionIcon}
            alt="description"
            className="w-4 h-5 dark:invert-[0.75]"
          />
          <p className="pl-2">{task.description}</p>
        </div>
      ) : null}

      {task.dueDate ? (
        <div className="flex items-center pt-2 ">
          <img
            src={calendarIcon}
            alt="calendar"
            className="w-4 h-5 dark:invert-[0.75]"
          />
          <p className="pl-2">{task.dueDate}</p>
        </div>
      ) : null}

      {task.assignee ? (
        <div className="flex items-center pt-2">
          <img
            src={assigneeIcon}
            alt="assignee"
            className="w-4 h-5 dark:invert-[0.75]"
          />
          <p className="pl-2">{task.assignee}</p>
        </div>
      ) : null}

      <form className="pt-2">
        <label htmlFor="completed" className="flex items-center">
          <input
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            id="completed"
            name="completed"
            value={task.isCompleted}
            onChange={() => handleIsCompleted(task)}
          />
          Mark as completed
        </label>
      </form>
    </div>
  );
}

export default TaskCard;
