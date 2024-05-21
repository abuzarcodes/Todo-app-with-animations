import React from "react";
import { FaRegFile } from "react-icons/fa";

function TodoContent({ index, TodosArr }) {
  return (
    <div className="content ">
      <FaRegFile />
      <p
        className={`font-thin text-[18px] leading-tight my-4 overflow-y-auto max-h-[22.5vh] overflow-x-hidden ${
          TodosArr[index].done ? "line-through" : ""
        }`}
      >
        {TodosArr[index].Task}
      </p>
    </div>
  );
}

export default TodoContent;
