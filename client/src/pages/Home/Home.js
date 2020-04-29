import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import HeroImage from '../../components/HeroImage'
import Biography from './components/Biography'
import bearImg from '../../assets/images/bear.jpg'
import Technologies from './components/Technologies'
import GetInTouch from './components/GetInTouch'

const Home = () => {
  return (
    <MainLayout>
      <HeroImage
        image={bearImg}
        title="Hello world"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus?"
      />
      <Biography />
      <Technologies />
      <GetInTouch />
    </MainLayout>
  )
}

export default Home
