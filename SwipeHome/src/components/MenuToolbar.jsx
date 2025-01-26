import React from "react";
import { BsBalloonHeart } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const MenuToolbar = () => {
  return (
    <div className="menu-toolbar">
      <button className="toolbar-btn">
        <BsFillHouseDoorFill size={30} />
      </button>
      <button className="toolbar-btn">
        <BsChatDots size={30} />
      </button>
      <button className="toolbar-btn">
        <BsBalloonHeart size={30} />
      </button>
      <button className="toolbar-btn">
        <BsFillPersonFill size={30} />
      </button>
    </div>
  );
}

export default MenuToolbar;