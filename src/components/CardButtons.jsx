import React from "react";
import DoneCheck from "./DoneCheck";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";

function CardButtons({index,TodosArr,reRenState}) {
  return (
    <div className="buttons flex items-center justify-center gap-10 absolute bottom-0 left-0 text-center w-full p-4">
      <DoneCheck index={index}/>
      <DeleteBtn index={index} TodosArr={TodosArr} reRenState={reRenState} />
      <EditButton />
    </div>
  );
}

export default CardButtons;
