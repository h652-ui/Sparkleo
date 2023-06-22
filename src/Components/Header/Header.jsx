import React from "react";
import { Vector, Sparkleo, R } from "../Logo/Logo";

function Header() {
  return (
    <div className="sticky w-full h-[10%] bg-mColor flex text-white">
      <div className="w-1/2 h-full ml-4 flex justify-start items-center">
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex items-center justify-around h-full">
          <div className="w-[95%] flex justify-around items-center h-full">
            <Vector />
            <Sparkleo />
          </div>
          <div className=" w-[5%] h-1/2">
            <R />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-end items-center mr-4">
        Employee Management
      </div>
    </div>
  );
}

export default Header;
