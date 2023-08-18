import React from 'react'
import RetroPCImage from '../../../public/images/image-retro-pcs.jpg'
import TopLaptopsImage from '../../../public/images/image-top-laptops.jpg'
import GamingGrowthImage from '../../../public/images/image-gaming-growth.jpg'
import Article from './Article'

const ArticleList = () => {
  return (
    <div className="flex flex-col gap-8 mb-16 desktop:flex-row desktop:gap-10 desktop:mb-0">
      <Article
        image={RetroPCImage}
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
      />
      <Article
        image={TopLaptopsImage}
        number="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
      />
      <Article
        image={GamingGrowthImage}
        number="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}

export default ArticleList