import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useRef } from "react";
import AddTodoBtn from "./AddTodoBtn";
import AddTodoFormPage from "./AddTodoFormPage";
import { AddTodoForm } from "../contexts/AddTodoFormContext";
import { TodoObjContext } from "../contexts/TodoObjContext";

function Foreground() {
  let todos = JSON.parse(localStorage.getItem("todos") || "[]");

  const refrence = useRef(null);
  const [NewTodo, setNewTodo] = useState(false);
  const [ShowTodoForm, setShowTodoForm] = useState(false);
  const [TodoObj, setTodoObj] = useState();
  useEffect(() => {
    if (TodoObj) {
      todos.push(TodoObj);
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log(todos);
      setNewTodo((prev) => !prev);
    }
  }, [TodoObj]);
  return (
    <TodoObjContext.Provider value={[TodoObj, setTodoObj]}>
      <AddTodoForm.Provider value={[ShowTodoForm, setShowTodoForm]}>
        <div
          ref={refrence}
          className="foreground w-full h-screen absolute px-6 py-8 flex gap-11 justify-center flex-wrap overflow-x-hidden overflow-y-auto"
        >
          {todos.map((item, index) => (
            <Card
              refrence={refrence}
              data={item}
              TodosArr={todos}
              index={index}
              key={item.id}
              reRenState={setNewTodo}
            />
          ))}
          <AddTodoBtn />
          {ShowTodoForm ? <AddTodoFormPage /> : ""}
        </div>
      </AddTodoForm.Provider>
    </TodoObjContext.Provider>
  );
}

export default Foreground;
