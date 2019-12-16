import React from 'react'
import styled from 'styled-components'
import bearImg from '../../assets/images/bear.jpg'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`

const Img = styled.img`
  width: inherit;
  height: inherit;
`

const HeroImage = () => {
  return (
    <Container>
      <Img src={bearImg} />
    </Container>
  )
}

export default HeroImage
