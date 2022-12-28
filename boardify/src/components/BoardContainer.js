import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {
  return (
    <div className="boards flex overflow-x-scroll min-h-[calc(100vh-4rem)]">
      {boards.map((board) => (
        <BoardCard key={board.boardId} board={board} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BoardContainer;
