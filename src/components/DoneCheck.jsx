import React, { useContext } from "react";
import { DoneBtnContext } from "../contexts/DoneBtnContext";

function DoneCheck() {
  const [, setChecked] = useContext(DoneBtnContext);
  return (
    <input
      type="checkbox"
      onChange={() => {
        setChecked((prev) => !prev);
      }}
      className="scale-150"
    />
  );
}

export default DoneCheck;
