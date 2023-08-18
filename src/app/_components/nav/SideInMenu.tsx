import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuClose from "../../../../public/images/icon-menu-close.svg";
import Image from "next/image";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideInMenu = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <div className="w-full flex">
      <div
        onClick={() => setIsOpen(false)}
        className="bg-black w-full relative h-screen -mt-10 opacity-50"
      ></div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={"menu"}
            className="bg-off-white w-[68%] absolute h-[110vh] left-[32%] top-0 z-40  -mt-12"
          >
            <div className="flex justify-end mt-10 mr-5">
              <Image
                src={MenuClose}
                alt="Close X for menu"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div className="pl-4 mt-[90px]">
              <ul className="flex flex-col gap-[17px] ">
                <li className="text-[20px]  text-very-dark-blue font-[600] hover:text-soft-orange cursor-pointer">
                  Home
                </li>
                <li className="text-[20px]  text-very-dark-blue font-[600] hover:text-soft-orange cursor-pointer">
                  New
                </li>
                <li className="text-[20px]  text-very-dark-blue font-[600] hover:text-soft-orange cursor-pointer">
                  Popular
                </li>
                <li className="text-[20px]  text-very-dark-blue font-[600] hover:text-soft-orange cursor-pointer">
                  Trending
                </li>
                <li className="text-[20px]  text-very-dark-blue font-[600] hover:text-soft-orange cursor-pointer">
                  Categories
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideInMenu;
