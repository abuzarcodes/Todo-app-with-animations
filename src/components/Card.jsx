import React, { useState, useRef, useContext } from "react";
import { FaRegFile } from "react-icons/fa";

import { cubicBezier, motion, spring } from "framer-motion";
import CardButtons from "./CardButtons";
import { DoneBtnContext } from "../contexts/DoneBtnContext";

function Card({ refrence, data, index, TodosArr, reRenState }) {
  const [checked, setchecked] = useState(false);
  const easing = cubicBezier(0.63, 0.655, 0.46, 1.6);
  return (
    <DoneBtnContext.Provider value={[checked, setchecked]}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: "100%" }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: easing,
          type: spring,
        }}
        drag
        dragConstraints={refrence}
        className={`card w-[280px]   h-[40vh] p-5 rounded-[25px] text-gray-300 shadow-lg cursor-pointer relative overflow-hidden backdrop-blur-sm ${
          TodosArr[index].done ? "bg-green-400/30" : "bg-slate-600/35"
        }`}
      >
        <div className="content ">
          <FaRegFile />
          <p
            className={`font-thin text-[18px] leading-tight my-4 overflow-y-auto max-h-[22.5vh] overflow-x-hidden ${
              TodosArr[index].done ? "line-through" : ""
            }`}
          >
            {data.Task}
          </p>
        </div>
        <CardButtons
          index={index}
          TodosArr={TodosArr}
          reRenState={reRenState}
        />
      </motion.div>
    </DoneBtnContext.Provider>
  );
}

export default Card;
