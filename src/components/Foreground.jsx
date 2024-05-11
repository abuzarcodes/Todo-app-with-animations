import React from "react";
import Card from "./Card";
import { useRef } from "react";
function Foreground() {
  const refrence = useRef(null);

  let todos = [
    { id: 1, task: "Complete homework", checked: true },
    { id: 2, task: "Go for a run", checked: false },
    { id: 3, task: "Buy groceries", checked: true },
    { id: 4, task: "Call mom", checked: false },
    { id: 5, task: "Study for exam", checked: false },
];
  return (
    <div
      ref={refrence}
      className="foreground w-full h-screen absolute p-5 flex gap-11 justify-center flex-wrap"
    >
      {todos.map((item, index) => (
        <Card refrence={refrence} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
