import React from "react";
import Card from "./Card";
import { useRef } from "react";
function Foreground() {
  const refrence = useRef(null);

  let todos = [
    { task: "Complete homework", checked: true },
    { task: "Go for a run", checked: false },
    { task: "Buy groceries", checked: true },
    { task: "Call mom", checked: false },
  ];
  return (
    <div
      ref={refrence}
      className="foreground w-full h-screen absolute p-5 flex gap-11 justify-center flex-wrap"
    >
      {todos.map((item, index)=>(
        <Card refrence={refrence} data={item}/>
      ))}
    </div>
  );
}

export default Foreground;
