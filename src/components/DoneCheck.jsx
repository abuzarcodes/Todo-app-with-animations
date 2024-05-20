import React, { useContext } from "react";
import { DoneBtnContext } from "../contexts/DoneBtnContext";
import { TodoArrayContext } from "../contexts/TodoArrayContext";

function DoneCheck({ index }) {
  const todos = useContext(TodoArrayContext);
  const [checked, setChecked] = useContext(DoneBtnContext);
  return (
    <input
      type="checkbox"
      onChange={() => {
        setChecked((prev) => !prev);
        todos[index].done = checked;
        localStorage.setItem("todos", JSON.stringify(todos));
      }}
      className="scale-150"
      checked={todos[index].done}
    />
  );
}

export default DoneCheck;
