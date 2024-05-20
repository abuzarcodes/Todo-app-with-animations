import React, { useContext } from "react";
import TodoFormInput from "./TodoFormInput";
import { IoIosCloseCircle } from "react-icons/io";
import { AddTodoForm } from "../contexts/AddTodoFormContext";

function AddTodoFormCard() {
  const [, setShowTodoForm] = useContext(AddTodoForm);
  return (
    <div className=" formCard flex justify-center items-center p-8 bg-gray-800 rounded-2xl w-[80vw] lg:w-[65vw] lg:h-[50%] h-[35%] text-gray-300 relative">
      <span
        className="absolute top-0 right-0 m-5 text-[40px] cursor-pointer"
        onClick={() => {
          setShowTodoForm(false);
        }}
      >
        <IoIosCloseCircle />
      </span>
      <TodoFormInput />
    </div>
  );
}

export default AddTodoFormCard;
