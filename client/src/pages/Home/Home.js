import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import HeroImage from '../../components/HeroImage'
import Biography from './components/Biography'
import bearImg from '../../assets/images/bear.jpg'

const Home = () => {
  return (
    <MainLayout>
      <HeroImage
        image={bearImg}
        title="Hello world"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus?"
      />
      <Biography />
    </MainLayout>
  )
}

export default Home
