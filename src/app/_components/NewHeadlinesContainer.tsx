import React from 'react'
import HeadlineGroup from './HeadlineGroup'
import HR from './HR'

const NewHeadlinesContainer = () => {
  return (
    <div className="bg-very-dark-blue w-full h-full my-16 p-5 desktop:my-0 desktop:px-6">
      <h1 className="text-soft-orange font-semibold text-3xl mb-7">New</h1>
      <HeadlineGroup headline='Hydrogen VS Electric Cars' description='Will hydrogen-fueled cars ever catch up to EVs?' />
      <HR />
      <HeadlineGroup headline='The Downsides of AI Artistry' description='What are the possible adverse effects of on-demand AI image generation?' />
      <HR />
      <HeadlineGroup headline='Is VC Funding Drying Up?' description='Private funding by VC firms is down 50% YOY.  We take a look at what that means.' />
    </div>
  )
}

export default NewHeadlinesContainer