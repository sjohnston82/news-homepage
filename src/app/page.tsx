"use client";

import Image from "next/image";
import Navbar from "./_components/nav/Navbar";
import MobileImage from "../../public/images/image-web-3-mobile.jpg";
import React, { useState } from "react";
import { cn } from "./utils";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={cn("bg-off-white w-screen min-h-screen px-4 ", {
        "backdrop-brightness-50": isOpen,
      })}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Image src={MobileImage} alt="main mobile image" />
    </main>
  );
}
