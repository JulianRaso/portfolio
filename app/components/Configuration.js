"use client";
import { useState } from "react";
import { GrConfigure } from "react-icons/gr";
import Button from "./Button";

function Configuration() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="fixed bottom-9 right-8 sm:right-15 text-2xl">
      <div
        className="border-2 p-1 rounded-3xl cursor-pointer hover:bg-gray-200 "
        onClick={() => setDisplay(!display)}
      >
        <GrConfigure />
      </div>
      <div
        className={`bottom-18 right-12 sm:right-19 text-lg border-2 p-2 w-40 grid grid-cols-2 gap-1 rounded-2xl rounded-br-none bg-gray-100 ${
          display ? "fixed" : "hidden"
        }`}
      >
        <Button>{display ? "Español" : "Spanish"}</Button>
        <Button>{display ? "English" : "English"}</Button>
        <Button>{display ? "Claro" : "White"}</Button>
        <Button>{display ? "Oscuro" : "Dark"}</Button>
      </div>
    </div>
  );
}

export default Configuration;
