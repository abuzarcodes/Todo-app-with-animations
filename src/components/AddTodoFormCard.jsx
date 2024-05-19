import React from "react";
import TodoFormInput from "./TodoFormInput";
import SubmitTodoFormBtn from "./SubmitTodoFormBtn";

function AddTodoFormCard() {
  return (
    <div className=" formCard flex justify-center items-center p-8 bg-gray-800 rounded-2xl w-[80vw] lg:w-[65vw] lg:h-[50%] h-[35%] text-gray-300 relative">
      <form className="w-full ">
        <label
          className="tracking-tighter md:text-[4vw] text-[30px]"
          htmlFor="Todo"
        >
          Add a Todo.
        </label>
        <TodoFormInput/>
        <SubmitTodoFormBtn/>
      </form>
    </div>
  );
}

export default AddTodoFormCard;
