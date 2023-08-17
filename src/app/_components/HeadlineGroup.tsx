import React from "react";

type HeadlineGroupProps = {
  headline: string;
  description: string;
};

const HeadlineGroup = ({ headline, description }: HeadlineGroupProps) => {
  return (
    <div className="">
      <h1 className="text-grayish-blue text-[1.28rem] font-bold mb-1">{headline}</h1>
      <p className="text-dark-grayish-blue leading-relaxed text-[0.95rem]">
        {description}
      </p>
    </div>
  );
};

export default HeadlineGroup;
