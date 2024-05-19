import React, { useState, useRef, useContext } from "react";
import { FaRegFile } from "react-icons/fa";

import { motion } from "framer-motion";
import CardButtons from "./CardButtons";
import { DoneBtnContext } from "../contexts/DoneBtnContext";

function Card({ refrence, data }) {
  const [checked, setchecked] = useState(false);
  return (
    <DoneBtnContext.Provider value={[checked, setchecked]}>
      <motion.div
        drag
        dragConstraints={refrence}
        className={`card w-[280px]   h-[40vh] p-5 rounded-[25px] text-gray-300 shadow-lg cursor-pointer relative overflow-hidden backdrop-blur-sm ${
          checked ? "bg-green-400/30" : "bg-slate-600/35"
        }`}
      >
        <div className="content ">
          <FaRegFile />
          <p
            className={`font-thin text-[18px] leading-tight my-4 overflow-y-auto max-h-[22.5vh] overflow-x-hidden ${
              checked ? "line-through" : ""
            }`}
          >
            {data.task}
          </p>
        </div>
        <CardButtons />
      </motion.div>
    </DoneBtnContext.Provider>
  );
}

export default Card;
