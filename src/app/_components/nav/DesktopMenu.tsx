import React from "react";

const DesktopMenu = () => {
  return (
    <div className="max-[1439px]:hidden">
      <ul className="flex gap-8 desktop:gap-9">
        <li className="text-dark-grayish-blue hover:text-soft-orange cursor-pointer">
          Home
        </li>
        <li className="text-dark-grayish-blue hover:text-soft-orange cursor-pointer">
          New
        </li>
        <li className="text-dark-grayish-blue hover:text-soft-orange cursor-pointer">
          Popular
        </li>
        <li className="text-dark-grayish-blue hover:text-soft-orange cursor-pointer">
          Trending
        </li>
        <li className="text-dark-grayish-blue hover:text-soft-orange cursor-pointer">
          Categories
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
