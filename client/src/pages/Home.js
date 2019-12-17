import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import HeroImage from '../Components/Reusable/HeroImage'
import bearImg from '../assets/images/bear.jpg'

const Home = () => {
  return (
    <MainLayout>
      <HeroImage
        image={bearImg}
        title="Hello world"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus?"
      />
    </MainLayout>
  )
}

export default Home
