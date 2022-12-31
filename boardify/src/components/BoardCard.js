import React, { useState, useEffect } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import db from "../backend/firebase-config";
import closeIcon from "../assets/images/close.svg";
import sortIcon from "../assets/images/sort-descending-board.svg";

function BoardCard({ board, onDelete }) {
  const [completed, setCompleted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    boardId: board.boardId,
    dueDate: "",
    assignee: "",
    isCompleted: false,
    taskId: uuidv4(),
  });
  const boardsRef = doc(db, "boards", board.boardId);

  const handleSortingListChange = (e) => {
    if (e.target.value === "due_date") {
      const sorted = tasks.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
      setTasks([...sorted]);
    } else if (e.target.value === "asc") {
      const sorted = tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
      setTasks([...sorted]);
    } else if (e.target.value === "desc") {
      const sorted = tasks.sort((a, b) => (a.title < b.title ? 1 : -1));
      setTasks([...sorted]);
    }
  };

  const handleTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const createTask = async (task) => {
    if (isUpdate) {
      const updatedTasks = tasks.map((t) => {
        if (t.taskId === task.taskId) {
          return task;
        }
        return t;
      });
      await updateDoc(boardsRef, {
        tasks: updatedTasks,
      });
      setShowForm(false);
      setIsUpdate(false);
    } else {
      await updateDoc(boardsRef, {
        tasks: [...tasks, task],
      });
      setShowForm(false);
    }
  };

  const handleIsCompleted = async (task) => {
    const boardRef = doc(db, "boards", task.boardId);
    const updatedTasks = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, isCompleted: !task.isCompleted };
      }
      return t;
    });
    await updateDoc(boardRef, { tasks: updatedTasks });

    setCompleted(() => !completed);
  };

  const editTask = async (task) => {
    setNewTask({
      title: task.title,
      description: task.description,
      boardId: board.boardId,
      dueDate: task.dueDate,
      assignee: task.assignee,
      isCompleted: task.isCompleted,
      taskId: task.taskId,
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setTasks([...tasks, newTask]);
    setNewTask({
      title: "",
      description: "",
      boardId: board.boardId,
      dueDate: "",
      assignedTo: "",
      isCompleted: false,
      taskId: uuidv4(),
    });
  };

  const deleteTask = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    await updateDoc(boardsRef, {
      tasks: updatedTasks,
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "boards"),
      (querySnapshot) => {
        querySnapshot.forEach((docItem) => {
          if (docItem.id === board.boardId) {
            setTasks(docItem.data().tasks);
          }
        });
      }
    );
    return unsubscribe;
  }, [board.boardId]);

  return (
    <div className="board-card min-w-[300px] max-w-[300px] h-[calc(90vh-4rem)] rounded-lg shadow-lg p-4 bg-neutral-100 dark:bg-neutral-800 overflow-y-scroll">
      <div className="bard-header flex justify-between items-center">
        <h2 className="text-2xl font-bold py-3">{board.title}</h2>

        <button
          type="button"
          className="rounded p-2 bg-red-300 transition duration-300 ease-in-out hover:bg-red-500"
          onClick={() => onDelete(board.boardId)}
        >
          <img src={closeIcon} alt="close" className="w-4 h-4 mx-auto" />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">
          {tasks.length > 0 && tasks.length === 1
            ? `${tasks.length} Item`
            : `${tasks.length} Items`}
        </h3>
        <div className="flex items-center">
          <label
            htmlFor="sorting"
            className="text-sm font-bold flex items-center"
          >
            <img
              src={sortIcon}
              alt="sort"
              className="w-5 h-5 mx-auto dark:invert-[0.75]"
            />
            <select
              className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 rounded p-1 ml-2 border-r-[6px] border-neutral-200 dark:border-neutral-700"
              onChange={handleSortingListChange}
              id="sorting"
            >
              <option value="due_date">Due Date</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        {tasks.map((task) =>
          !task.isCompleted ? (
            <TaskCard
              handleIsCompleted={handleIsCompleted}
              key={task.taskId}
              task={task}
              editTask={editTask}
              showForm={showForm}
              deleteTask={deleteTask}
              setShowForm={setShowForm}
              setIsUpdate={setIsUpdate}
              isUpdate={isUpdate}
            />
          ) : null
        )}
      </div>

      <TaskForm
        task={newTask}
        handleTaskChange={handleTaskChange}
        handleTaskSubmit={handleTaskSubmit}
        setShowForm={setShowForm}
        showForm={showForm}
        setNewTask={setNewTask}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </div>
  );
}

export default BoardCard;
