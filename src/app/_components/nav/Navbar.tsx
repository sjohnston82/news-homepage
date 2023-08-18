import React from "react";
import Image from "next/image";
import MenuIcon from "../../../../public/images/icon-menu.svg";
import Logo from "../../../../public/images/logo.svg";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  return (
    <div className="h-24 flex items-center justify-between w-full">
      <div className="relative">
      <Image src={Logo} alt="Logo" className="w-16" />

      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <DesktopMenu />
    </div>
  );
};

export default Navbar;
