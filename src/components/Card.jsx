import React from "react";
import { FaRegFile } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { motion } from "framer-motion"

function Card({refrence, data}) {
  return (
    <motion.div drag dragConstraints={refrence} className="card w-[20vw]  bg-slate-600/35 h-[40vh] p-5 rounded-[25px] text-gray-300 shadow-lg cursor-pointer relative overflow-hidden">
      <div className="content">
        <FaRegFile />
        <p className="font-thin text-[1.2vw] leading-tight my-4 overflow-y-auto max-h-[22.5vh] overflow-x-hidden">
          {data.task}
        </p>
      </div>
      <div className="buttons flex items-center justify-center gap-10 absolute bottom-0 left-0 text-center w-full p-4">
        <input type="checkbox" className="scale-150" />
        <span className="text-[3vw]">
          <MdEdit />
        </span>
        <span className="text-[3vw]">
          <MdDeleteForever />
        </span>
      </div>
    </motion.div>
  );
}

export default Card;
