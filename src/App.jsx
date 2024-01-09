import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("red");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-xl gap-2 bg-white px-2 py-2 rounded-3xl">
            <button
            onClick={()=> setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={()=> setcolor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>
            <button
              onClick={()=> setcolor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={()=> setcolor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              BLACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
