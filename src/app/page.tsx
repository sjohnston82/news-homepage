"use client";

import Image from "next/image";
import Navbar from "./_components/nav/Navbar";
import MobileImage from "../../public/images/image-web-3-mobile.jpg";
import DesktopImage from "../../public/images/image-web-3-desktop.jpg";
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
    <main className="desktop:grid desktop:place-items-center desktop:bg-slate-400">
      <div className="bg-off-white desktop:w-[1440px] desktop:h-[900px] px-4 desktop:px-40 desktop:mx-auto desktop:py-8">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="desktop:flex desktop:gap-6 desktop:w-full desktop:flex-1 desktop:mb-10">
          <div className="desktop:flex desktop:flex-col desktop:w-[68%] ">
            <section className="min-[720px]:hidden ">
              <Image src={MobileImage} alt="main mobile image" />
            </section>
            <section className="max-[721px]:hidden  ">
              <Image src={DesktopImage} alt="main desktop image" />
            </section>
            <section className="desktop:flex desktop:pt-6 gap-4">
              <div className="desktop:w-1/2 desktop:flex">
                <MainHeading />
              </div>
              <div className="desktop:w-1/2 desktop:ml-2">
                <SubHeading />
                <ReadMoreButton />
              </div>
            </section>
          </div>
          <section className="desktop:flex  desktop:w-[352px]">
            <NewHeadlinesContainer />
          </section>
        </div>
        <section className="">
          <ArticleList />
        </section>
      </div>
    </main>
  );
}
