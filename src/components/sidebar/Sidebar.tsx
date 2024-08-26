import React from "react";
import Navigation from "./Navigation";
import Actions from "./Actions";

const Sidebar = () => {
  return (
    <div className=" h-full w-60 border-r-2 flex">
      <Navigation />
      <Actions />
    </div>
  );
};

export default Sidebar;
