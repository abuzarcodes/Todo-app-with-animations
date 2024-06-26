import React, { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { EditTodoContext } from "../contexts/EditTodoContext";

function EditButton({ reRenState }) {
  const [Editing, setEditing] = useContext(EditTodoContext);
  return (
    <span
      className="text-[40px]"
      onClick={() => {
        setEditing(true);
      }}
    >
      <MdEdit />
    </span>
  );
}

export default EditButton;
