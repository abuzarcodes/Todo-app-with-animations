import React from "react";
import { MdDeleteForever } from "react-icons/md";

function DeleteBtn({ index, TodosArr }) {
  return (
    <span
      className="text-[3vw]"
      onClick={() => {
        TodosArr.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(TodosArr));
      }}
    >
      <MdDeleteForever />
    </span>
  );
}

export default DeleteBtn;
