import React from "react";
import DoneCheck from "./DoneCheck";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";

function CardButtons() {
  return (
    <div className="buttons flex items-center justify-center gap-10 absolute bottom-0 left-0 text-center w-full p-4">
      <DoneCheck />
      <DeleteBtn />
      <EditButton />
    </div>
  );
}

export default CardButtons;
