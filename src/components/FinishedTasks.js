import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import FinishedTaskCard from "./FinishedTasksCard";
import db from "../backend/firebase-config";
// import TaskCard from "./TaskCard";

function FinishedTasks() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          const boardId = docChange.doc.id;
          const boardObj = { ...docChange.doc.data(), boardId };
          setBoards((prevBoardsList) => [...prevBoardsList, boardObj]);
        }
      });
    });
  }, []);

  return (
    <div className="container mx-auto finished-tasks w-full">
      <h1 className="text-4xl font-bold text-center my-8">Finished Tasks</h1>

      <div className="boards flex min-h-screen pb-4 gap-2 snap-mandatory snap-x overflow-x-scroll my-4">
        {boards.map((board) => {
          const finishedTasks = board.tasks.filter(
            (task) => task.isCompleted === true
          );

          return finishedTasks && finishedTasks.length > 0 ? (
            <div
              className="board-card min-w-[300px] max-w-[300px] h-[calc(80vh-4rem)] rounded-lg shadow-lg p-4 bg-neutral-100 dark:bg-neutral-800 overflow-y-scroll"
              key={board.boardId}
            >
              <div className="board-header flex justify-between items-center">
                <h2 className="text-2xl font-bold py-3">{board.title}</h2>
              </div>

              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {finishedTasks > 0 && board.tasks.length === 1
                    ? `${finishedTasks.length} Item`
                    : `${finishedTasks.length} Items`}
                </h3>
              </div>
              <div className="flex flex-col mt-4">
                {board.tasks.map((task) =>
                  task.isCompleted ? (
                    <FinishedTaskCard key={task.taskId} task={task} />
                  ) : null
                )}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default FinishedTasks;
