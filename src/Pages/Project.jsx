import React from "react";
import { Link, Outlet } from "react-router-dom";

function Project() {
  return (
    <div>
      <div className="bg-black/30 max-w-4xl rounded-[40px] p-5 h-[75%] mb-[30%] mt-16 ml-[18%]">
        <h1 className="font-bold font-serif mx-6 text-4xl p-5">
          This is my project!
        </h1>
      </div>
    </div>
  );
}

export default Project;
