"use client";

import Image from "next/image";
import Navbar from "./_components/nav/Navbar";
import MobileImage from "../../public/images/image-web-3-mobile.jpg";
import React, { useState } from "react";
import { cn } from "./utils";
import MainHeading from "./_components/MainHeading";
import SubHeading from "./_components/SubHeading";
import ReadMoreButton from "./_components/ReadMoreButton";
import NewHeadlinesContainer from "./_components/NewHeadlinesContainer";
import ArticleList from "./_components/ArticleList";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-off-white w-screen min-h-screen px-4 ">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Image src={MobileImage} alt="main mobile image" />
      <MainHeading />
      <SubHeading />
      <ReadMoreButton />
      <NewHeadlinesContainer />
      <ArticleList />
    </main>
  );
}
