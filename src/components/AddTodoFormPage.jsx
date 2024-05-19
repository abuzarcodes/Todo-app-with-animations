import React from "react";
import AddTodoFormCard from "./AddTodoFormCard";

function AddTodoFormPage() {
  return (
    <div className="w-full h-full flex justify-center items-center backdrop-blur-sm bg-transparent absolute">
      <AddTodoFormCard />
    </div>
  );
}

export default AddTodoFormPage;
