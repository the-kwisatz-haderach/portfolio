import React from 'react'
import MainLayout from '../../Layouts/MainLayout'
import Carousel3D from '../../components/Carousel3D'

const Contact = () => {
  return (
    <MainLayout>
      <div className="flex-column-centered">
        <h1> Get in touch </h1>{' '}
        <p> Here are some options for contacting me. </p>{' '}
        <div>
          <Carousel3D />
        </div>{' '}
      </div>{' '}
    </MainLayout>
  )
}

export default Contact
