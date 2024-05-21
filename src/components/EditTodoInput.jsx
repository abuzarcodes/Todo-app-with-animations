import React from "react";

function EditTodoInput({ TodosArr, index }) {
  return (
    <input
      type="text"
      className="w-full h-12 mt-4 bg-gray-950 text-[20px] font-semibold"
      defaultValue={TodosArr[index].Task}
      onChange={(e) => {
        console.log(e.target.value);
        TodosArr[index].Task = e.target.value;
      }}
    />
  );
}

export default EditTodoInput;
