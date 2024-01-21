import React from "react";

import assigneeIcon from "~/assets/images/user-check.svg";
import calendarIcon from "~/assets/images/calendar-event.svg";
import descriptionIcon from "~/assets/images/file-description.svg";

function FinishedTaskCard({ task }) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 mb-4 shadow-md">
      <div className="sm:flex-wrap flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg">{task.title}</h1>
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
            disabled
            readOnly
            id="completed"
            type="checkbox"
            name="completed"
            value={task.isCompleted}
            checked={task.isCompleted}
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Marked as completed
        </label>
      </form>
    </div>
  );
}

export default FinishedTaskCard;
