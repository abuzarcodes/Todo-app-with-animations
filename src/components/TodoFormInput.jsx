import React, { useContext, useState } from "react";
import { TodoObjContext } from "../contexts/TodoObjContext";
import { AddTodoForm } from "../contexts/AddTodoFormContext";

function TodoFormInput() {
  const [, setShowTodoForm] = useContext(AddTodoForm);
  const [TodoObj, setTodoObj] = useContext(TodoObjContext);
  const [Todo, setTodo] = useState();
  return (
    <div className="w-full">
      <label
        className="tracking-tighter md:text-[4vw] text-[30px]"
        htmlFor="Todo"
      >
        Add a Todo.
      </label>
      <input
        className="w-full h-12 m-2 rounded-md bg-gray-950 text-left text-[25px]"
        type="text"
        name="Todo"
        id="Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <input
        className="bg-gray-950 text-[20px] w-20 h-10 m-5 text-center font-semibold rounded-md absolute bottom-0 right-0 cursor-pointer "
        type="submit"
        value="Add"
        onClick={() => {
          setTodoObj({ Task: Todo, id: Date.now() });
          setShowTodoForm(false)
        }}
      />
    </div>
  );
}

export default TodoFormInput;
