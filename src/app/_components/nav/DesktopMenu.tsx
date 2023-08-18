import React from "react";

const DesktopMenu = () => {
  return (
    <div className="max-[1439px]:hidden">
      <ul className="flex gap-8 desktop:gap-9">
        <li className="text-very-dark-blue">Home</li>
        <li className="">New</li>
        <li className="">Popular</li>
        <li className="">Trending</li>
        <li className="">Categories</li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
