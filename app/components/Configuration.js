"use client";
import { useState } from "react";
import { GrConfigure } from "react-icons/gr";

function Configuration() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="fixed bottom-3 right-10 text-2xl">
      <div className="border-2 p-1 rounded-3xl cursor-pointer ">
        <GrConfigure onClick={() => setDisplay(!display)} />
      </div>
      <div
        className={
          display ? "hidden bottom-12 right-20" : "fixed bottom-12 right-20"
        }
      >
        <h1>Español</h1>
        <h1>Oscuro</h1>
      </div>
    </div>
  );
}

export default Configuration;
