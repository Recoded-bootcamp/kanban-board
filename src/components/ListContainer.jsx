import React from "react";

import EditIcon from "~/assets/images/pencil.svg";
import detelteIcon from "~/assets/images/close.svg";
import UserIcon from "~/assets/images/user-check.svg";
import CalendarIcon from "~/assets/images/calendar-event.svg";

function ListContainer({ boards }) {
  return (
    <div className="boards flex flex-col gap-2 overflow-x-scroll mb-4 h-full">
      {boards.map((board) => (
        <div
          key={board.boardId}
          className="board-card bg-white rounded-lg p-4 mb-4 shadow-md dark:bg-neutral-900 dark:shadow-lg dark:text-neutral-300 dark:border-neutral-800 dark:border"
        >
          <div className="board-header flex justify-between items-center">
            <h3 className="board-title text-lg font-bold">{board.title}</h3>
            <button
              type="button"
              className="board-delete rounded p-2 bg-red-300 transition duration-300 ease-in-out hover:bg-red-500"
            >
              <img src={detelteIcon} alt="delete" className="w-4 h-4 mx-" />
            </button>
          </div>
          <div className="board-body">
            <ul className="task-list flex flex-col gap-2" key={board.boardId}>
              <div className="flex flex-col gap-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-white">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              #
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              Title
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              Due Date
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              Assignee
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-200 dark:bg-neutral-800 text-center text-neutral-800 dark:text-neutral-300"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {board.tasks.map((taskItem, index) => (
                            <tr className="bg-gray-100" key={taskItem.taskId}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                {index}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                {taskItem.title}
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                {taskItem.dueDate ? (
                                  <div className="flex items-center px-2 py-1 rounded-full min-w-max bg-gray-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-300">
                                    <img
                                      src={CalendarIcon}
                                      alt="calendar"
                                      className="dark:invert-[.75] w-4 h-4"
                                    />
                                    <span className="ml-2">
                                      {taskItem.dueDate}
                                    </span>
                                  </div>
                                ) : null}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                {taskItem.assignee}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                {taskItem.isCompleted ? (
                                  <div className="flex items-center px-2 py-1 min-w-max rounded-full bg-gray-200 dark:bg-neutral-600 text-neutral-800 dark:text-neutral-300">
                                    <img
                                      src={UserIcon}
                                      alt="user"
                                      className="dark:invert-[.75] w-5 h-5"
                                    />
                                    <span className="ml-2">
                                      {taskItem.isCompleted
                                        ? "Completed"
                                        : "Pending"}
                                    </span>
                                  </div>
                                ) : null}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300">
                                <div className="flex flex-row gap-2 justify-end">
                                  <button
                                    type="button"
                                    className="bg-white rounded-full p-2 min-w-max shadow-md bg-blue-300 transition duration-300 ease-in-out hover:bg-blue-500"
                                  >
                                    <img
                                      src={EditIcon}
                                      alt="calendar"
                                      className="w-4 h-4"
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded px-2 bg-red-300 min-w-max transition duration-300 ease-in-out hover:bg-red-500 transition duration-300 ease-in-out"
                                  >
                                    <img
                                      src={detelteIcon}
                                      alt="user"
                                      className="w-4 h-4"
                                    />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListContainer;
