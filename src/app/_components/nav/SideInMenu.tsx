import React from "react";
import { motion } from "framer-motion";
import MenuClose from "../../../../public/images/icon-menu-close.svg";
import Image from "next/image";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideInMenu = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <motion.div
      // initial={{ x: 1000, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.5 }}
      className="w-full flex  absolute "
    >
      <div className="bg-black w-full relative h-screen -mt-10 opacity-50"></div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-off-white w-2/3 absolute h-[110vh] left-[34%] top-0 z-40  -mt-12"
      >
        <div className="flex justify-end mt-10 mr-5">
          <Image
            src={MenuClose}
            alt="Close X for menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideInMenu;
