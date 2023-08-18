import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ArticleProps = {
  image: StaticImageData;
  number: string;
  title: string;
  description: string;
}

const Article = ({ image, number, title, description }: ArticleProps) => {
  return (
    <div className="flex gap-5  desktop:w-full desktop:gap-4 desktop:h-[150px]">
      <Image src={image} alt={title} className="w-[6.2rem] desktop:w-32 " />
      <div className="flex flex-col gap-3 justify-between">
        <h1 className="text-grayish-blue font-semibold text-[34px] ">
          {number}
        </h1>
        <h3 className="text-very-dark-blue font-extrabold text-[19px] desktop:text-[17px] hover:text-soft-orange cursor-pointer">
          {title}
        </h3>
        <p className="text-dark-grayish-blue desktop:text-[14px]">{description}</p>
      </div>
    </div>
  );
}

export default Article