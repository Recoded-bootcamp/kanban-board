import React, { useEffect } from "react";

import BoardForm from "./BoardForm";
import ListContainer from "./ListContainer";
import BoardContainer from "./BoardContainer";

import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "~/backend/firebase-config";

import listIcon from "~/assets/images/list.svg";
import boardIcon from "~/assets/images/board.svg";

function Home() {
  const [boards, setBoards] = React.useState([]);
  const [newBoard, setNewBoard] = React.useState({
    title: "",
    tasks: [],
  });
  const [listMode, setListMode] = React.useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    addDoc(collection(db, "boards"), {
      ...newBoard,
    });

    setNewBoard({
      title: "",
      tasks: [],
    });
  };

  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const { value } = event.target;
    setNewBoard((prev) => ({ ...prev, [keyName]: value }));
  };

  const handleDeleteBoard = async (id) => {
    await deleteDoc(doc(db, "boards", id));
    const newBoards = boards.filter((board) => board.boardId !== id);
    setBoards(newBoards);
  };

  return (
    <div className="container mx-auto min-h-screen px-4 lg:px-0">
      <BoardForm
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        newBoard={newBoard}
      />

      <div className="flex justify-end gap-4 pb-4 font-bold">
        <div className="flex items-center gap-2 rounded-md bg-neutral-200 dark:bg-neutral-800">
          <button
            className="py-2 pl-4 pr-2 rounded-md"
            type="button"
            onClick={() => setListMode(false)}
          >
            <img src={boardIcon} alt="Board" className="dark:invert-[0.75]" />
          </button>
          <button
            className="py-2 pr-4 pl-2 rounded-md"
            type="button"
            onClick={() => setListMode(true)}
          >
            <img src={listIcon} alt="List" className="dark:invert-[0.75]" />
          </button>
        </div>
      </div>

      {listMode ? (
        <ListContainer boards={boards} />
      ) : (
        <BoardContainer boards={boards} onDelete={handleDeleteBoard} />
      )}
    </div>
  );
}

export default Home;
