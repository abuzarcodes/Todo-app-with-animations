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
    {
      id: 4,
      task: "orem ipsum dolor sit amet consectetur, adipisicing elit. Animi dicta, magni, voluptatum at perspiciatis sit necessitatibus fugiat ipsam, vel molestiae ullam iste sequi placeat minima? Quam porro est voluptate rem nesciunt pariatur exercitationem laborum suscipit, qui doloremque in facilis, accusamus similique molestias tenetur modi tempora saepe. Et tenetur ut eveniet laudantium quod adipisci, optio facere vel ipsa praesentium doloremque atque pariatur obcaecati magnam rerum accusamus natus alias unde commodi totam nisi? Veniam perspiciatis, vitae maxime harum dolorum voluptatibus possimus optio error placeat asperiores cum temporibus ducimus necessitatibus cumque aliquam sunt. Deserunt nihil ipsum obcaecati ullam commodi aliquam repellat dolorem aperiam.",
      checked: false,
    },
    {
      id: 5,
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum suscipit, perspiciatis labore quam magni enim quia iure facilis architecto!",
      checked: false,
    },
  ];
  return (
    <div
      ref={refrence}
      className="foreground w-full h-screen absolute px-6 py-8 flex gap-11 justify-center flex-wrap overflow-x-hidden overflow-y-auto"
    >
      {todos.map((item, index) => (
        <Card refrence={refrence} data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Foreground;
