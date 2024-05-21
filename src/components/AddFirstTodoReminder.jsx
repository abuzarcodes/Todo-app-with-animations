import React from "react";
import { motion } from "framer-motion";

function AddFirstTodoReminder() {
  return (
    <motion.div
      animate={{ y: [8, -10, 6] }}
      transition={{ repeat: Infinity, duration: 1.6 }}
      className="firstTodoReminder w-52 h-20 text-center p-5 absolute bottom-20 font-semibold bg-gray-950 rounded-md text-gray-300 "
    >
      Add Your First Todo.
      <div className="triangle w-10 h-10 bg-gray-950 translate-y-1 rotate-45 absolute translate-x-16"></div>
    </motion.div>
  );
}

export default AddFirstTodoReminder;
