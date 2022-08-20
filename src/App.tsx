import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/global.css";

function App() {
  return (
    <div className="bg-bg bg-cover bg-center p-12 h-screen w-screen">
      <main className="h-full mx-auto max-w-[748px] p-10 flex flex-col items-center relative backdrop-filter backdrop-blur-lg bg-semitransparent rounded">
        <img
          src="https://github.com/daviramosds.png"
          className="w-24 h-24 rounded-full"
          draggable={false}
        ></img>
        <h4 className="text-base my-4 font-medium">@davirds</h4>
        <a
          href="https://github.com/daviramosds"
          target="_blank"
          className="bg-white w-full py-4 text-sm font-medium flex justify-center rounded my-4 hover:scale-105 transition-transform"
        >
          Github
        </a>
      </main>
    </div>
  );
}

export default App;
