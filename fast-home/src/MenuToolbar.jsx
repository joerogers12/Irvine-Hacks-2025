import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { BsBalloonHeart } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";

const MenuToolbar = () => {
  return (
    <div className="menu-toolbar">
      <button className="toolbar-btn">
        <BsFillMapFill size={30} />
      </button>
      <button className="toolbar-btn">
        <BsBalloonHeart size={30} />
      </button>
      <button className="toolbar-btn">
        <BsFillHouseDoorFill size={30} />
      </button>
      <button className="toolbar-btn">
        <BsChatDots size={30} />
      </button>
      <button className="toolbar-btn">
        <BsFillGearFill size={30} />
      </button>
    </div>
  );
}

export default MenuToolbar;