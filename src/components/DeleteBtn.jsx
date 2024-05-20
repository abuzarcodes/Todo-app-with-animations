import React from "react";
import { MdDeleteForever } from "react-icons/md";

function DeleteBtn({ index, TodosArr, reRenState }) {
  return (
    <span
      className="text-[3vw]"
      onClick={() => {
        TodosArr.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(TodosArr));
        reRenState((prev) => !prev);
      }}
    >
      <MdDeleteForever />
    </span>
  );
}

export default DeleteBtn;
