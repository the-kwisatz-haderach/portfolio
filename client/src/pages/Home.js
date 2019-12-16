import React from 'react'
import HeroImage from '../Components/Reusable/HeroImage'
import FullscreenPageTransition from '../Components/Reusable/Loaders/FullscreenPageTransition'

const Home = () => {
  return (
    <div>
      <FullscreenPageTransition>
        <HeroImage />
      </FullscreenPageTransition>
    </div>
  )
}

export default Home
