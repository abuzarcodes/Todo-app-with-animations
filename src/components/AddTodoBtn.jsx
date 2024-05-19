import React from "react";
import { FaPlus } from "react-icons/fa";

function AddTodoBtn() {
  return (
    <div className="bg-gray-950 w-full h-10 flex justify-center items-center fixed bottom-0">
      <span className="bg-gray-950 w-[80px] h-20 font-bold text-center text-gray-300 rounded-full flex justify-center p-4 text-[40px]">
        <FaPlus />
      </span>
    </div>
  );
}

export default AddTodoBtn;
