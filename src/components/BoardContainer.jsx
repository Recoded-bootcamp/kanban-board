import React from "react";
import BoardCard from "./BoardCard";

function BoardContainer({ boards, onDelete }) {
  return (
    <div className="boards flex pb-4 gap-2 snap-mandatory snap-x overflow-x-scroll mb-4">
      {boards.map((board) => (
        <BoardCard key={board.boardId} board={board} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BoardContainer;
