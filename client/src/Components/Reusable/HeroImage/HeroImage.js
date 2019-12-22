import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { slideLeft } from '../../../styles/keyframes'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

const TextContainer = styled.div`
  color: white;
  padding: 30px;
  width: 50%;
  animation: ${slideLeft} 1s ease-in reverse;
`

const Img = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const HeroTitle = styled.h1`
  font-size: 42px;
`

const HeroDescription = styled.p`
  font-size: 20px;
`

const HeroImage = ({
  image,
  title,
  description
}) => {
  return (
    <Container image={image}>
      <TextContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
      </TextContainer>
    </Container>
  )
}

HeroImage.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

export default HeroImage
