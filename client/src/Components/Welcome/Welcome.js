import React, { useEffect, useState } from 'react'
import freezeScroll from '../../utils/DOM-manipulation/freezeScroll'
import {
  Container,
  LeftSide,
  RightSide,
  CenterBlob,
  CenterLightContainer,
  CenterLight
} from './Styles'
import { greenishBlue, warningRed } from '../../styles/variables'
import '../../assets/images/black-texture.png'
import WarningSign from '../WarningSign'
import { Absolute } from '../../styles/Position'
import { Rotate } from '../../styles/Transform'

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    if (isHovered) setIsHovered(false)
    if (!isHovered) setIsHovered(true)
  }

  const handleClick = () => {
    const hide = (e) => {
      e.target.style.display = 'none'
      e.target.removeEventListener('animationend', hide)
    }
    const sides = document.querySelectorAll('.side')
    sides.forEach((side) => {
      if (side.nextElementSibling) {
        side.style.animationName = 'slideLeft'
      }
      if (!side.nextElementSibling) {
        side.style.animationName = 'slideRight'
      }
      side.addEventListener('animationend', hide)
    })
  }
  useEffect(freezeScroll, [])

  return (
    <Container>
      <LeftSide className="side">
        <Absolute top="10%" right="-10px">
          <Rotate angle="-12">
            <WarningSign title="warning" />
          </Rotate>
        </Absolute>
        <Absolute top="68%" left="-5px">
          <Rotate angle="2">
            <WarningSign
              title="danger"
              color="red"
            >
              Keep out.
            </WarningSign>
          </Rotate>
        </Absolute>
      </LeftSide>
      <RightSide
        className="side"
        color={isHovered ? greenishBlue : warningRed}
      >
        <CenterBlob
          color={isHovered ? greenishBlue : warningRed}
        >
          <CenterLightContainer>
            <CenterLight
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              color={isHovered ? greenishBlue : warningRed}
              onClick={handleClick}
            />
          </CenterLightContainer>
        </CenterBlob>
      </RightSide>
    </Container>
  )
}

export default Welcome
