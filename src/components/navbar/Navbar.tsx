import React from "react";
import { useMotion } from "../../store/motion/MotionContext";

const Navbar = () => {
  const { isAnimating } = useMotion();
  return (
    <div className=" w-full bg-purple-500 h-14 flex items-center px-6 gap-10">
      <h1 className=" font-extrabold text-white tracking-widest">Scratch</h1>{" "}
      <div>
        {isAnimating && (
          <span className=" text-white">animation running...</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
