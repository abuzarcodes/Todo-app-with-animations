import React, { useContext } from "react";
import { IoIosSave } from "react-icons/io";
import { EditTodoContext } from "../contexts/EditTodoContext";

function EditedTodoSaveBtn({ reRenState, TodosArr }) {
  const [Editing, setEditing] = useContext(EditTodoContext);
  return (
    <span
      className="text-[40px]"
      onClick={() => {
        localStorage.setItem("todos", JSON.stringify(TodosArr));
        setEditing(false);
      }}
    >
      <IoIosSave />
    </span>
  );
}

export default EditedTodoSaveBtn;
