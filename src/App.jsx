import React, { useState } from "react";
import Background from "./components/Background";
import { DoneBtnContext } from "./contexts/DoneBtnContext";
import Foreground from "./components/Foreground";

function App() {
  return (
    <>
      <Background />
      <Foreground />
    </>
  );
}

export default App;
