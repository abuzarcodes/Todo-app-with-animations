import React, { useContext } from "react";
import DoneCheck from "./DoneCheck";
import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";
import EditedTodoSaveBtn from "./EditedTodoSaveBtn";
import { EditTodoContext } from "../contexts/EditTodoContext";

function CardButtons({ index, TodosArr, reRenState }) {
  const [Editing] = useContext(EditTodoContext);
  return (
    <div className="buttons flex items-center justify-center gap-10 absolute bottom-0 left-0 text-center w-full p-4">
      <DoneCheck index={index} />
      <DeleteBtn index={index} TodosArr={TodosArr} reRenState={reRenState} />
      {Editing ? (
        <EditedTodoSaveBtn reRenState={reRenState} TodosArr={TodosArr} />
      ) : (
        <EditButton reRenState={reRenState} />
      )}
    </div>
  );
}

export default CardButtons;
