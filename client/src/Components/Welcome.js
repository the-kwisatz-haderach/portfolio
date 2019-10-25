import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  slideLeft,
  slideRight,
  pulseOpacity,
  pulseOpacityLess
} from '../styles/keyframes'
import { greenishBlue, warningRed } from '../styles/variables'
import '../assets/images/black-texture.png'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #000000a8, transparent, #000000a8)
  }
`

const Side = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  background-image: url('./assets/images/black-texture.png');
  background-size: contain;
  background-repeat: repeat;
`

const LeftSide = styled(Side)`
  left: 0;
  border-right: 5px solid black;
  outline: 1px solid #232323;
  /* animation: ${slideLeft} 5s cubic-bezier(0.38, 0.13, 0.57, 0.75) infinite; */
`

const RightSide = styled(Side)`
  right: 0;
  border-left: 5px solid black;
  outline: 1px solid #232323;
  &:before {
    content: '';
    transform-origin: center;
    position: absolute;
    right: 3px;
    box-shadow: 0px 0px 13px 2px ${(props) => props.color};
    width: 100%;
    height: 100%;
    animation: ${pulseOpacityLess} 2s ease-in-out 0.5s infinite;
  }
  /* animation: ${slideRight} 5s cubic-bezier(0.38, 0.13, 0.57, 0.75) infinite; */
`

const CenterBlob = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: -100px;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(#f9fff8,black);
  border: 4px solid #fdfffe38;
  border-radius: 50%;
  box-shadow: 2px 1px 10px 7px #000000ed;
  &:before {
    content: '';
    transform-origin: center;
    position: absolute;
    border-radius: 50%;
    box-shadow: 1px 1px 16px 5px ${(props) => props.color};
    width: 100%;
    height: 100%;
    animation: ${pulseOpacity} 2s ease-in-out 0.3s infinite;
  }
`

const CenterLightContainer = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 2px black;
  overflow: hidden;
`

const CenterLight = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25);
  width: 150px;
  height: 50px;
  background-image: linear-gradient(110deg, ${greenishBlue}, #000000, #777777, #000000);
  z-index: 5;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: translateX(-50px);
  &:hover {
    transform: translateX(0);
  }
`

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (e) => {
    if (isHovered) {
      setIsHovered(false)
    }
    if (!isHovered) {
      setIsHovered(true)
    }
  }

  useEffect(() => {
    const initialOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = initialOverflow }
  }, [])

  return (
    <Container>
      <LeftSide />
      <RightSide color={isHovered ? greenishBlue : warningRed}>
        <CenterBlob color={isHovered ? greenishBlue : warningRed}>
          <CenterLightContainer>
            <CenterLight
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              color={isHovered ? greenishBlue : warningRed}
            />
          </CenterLightContainer>
        </CenterBlob>
      </RightSide>
    </Container>
  )
}

export default Welcome
