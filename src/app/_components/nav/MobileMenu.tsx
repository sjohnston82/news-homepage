"use client";

import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "../../../../public/images/icon-menu.svg";
import MenuClose from "../../../../public/images/icon-menu-close.svg";
import { motion } from "framer-motion";
import SideInMenu from "./SideInMenu";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <div className=" h-24  w-full flex justify-end">
      {!isOpen ? (
        <Image
          src={MenuIcon}
          alt="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          className="h-5 mt-9"
        />
      ) : (
        // <Image
        //   src={MenuClose}
        //   alt="Menu close icon"
        //   onClick={() => setIsOpen(!isOpen)}
        //   className=""
        // />
        // <div className=""></div>
        <div className="absolute  w-full left-0 h-24 top-10">
          <SideInMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
