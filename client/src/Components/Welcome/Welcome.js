import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import freezeScroll from '../../utils/DOM-manipulation/freezeScroll'
import {
  Container,
  LeftSide,
  RightSide,
  CenterBlob,
  CenterLightContainer,
  CenterLight,
  ButtonIcon
} from './Styles'
import { greenishBlue, warningRed } from '../../styles/variables'
import '../../assets/images/black-texture.png'
import WarningSign from '../WarningSign'
import LoginForm from '../LoginForm'
import ControlPanel from '../ControlPanel'
import SmokeContainer from '../SmokeContainer'
import OpeningGate from '../OpeningGate'

const PasswordContainer = styled.div`
  > :first-child {
    margin-bottom: 20px;
  }
`

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isWarning, setIsWarning] = useState(false)
  const [isOpened, setIsOpened] = useState({ first: false, second: false })

  const handleHover = () => {
    if (isHovered) setIsHovered(false)
    if (!isHovered) setIsHovered(true)
  }

  const unlockDoor = () => {
    setIsUnlocked(true)
  }

  const handleClick = () => {
    if (!isUnlocked) {
      clearTimeout(warningTimeout)
      setIsWarning(true)
      let warningTimeout = setTimeout(() => {
        setIsWarning(false)
      }, 3000)
      return
    }
    const horizontalDoorsOpened = (e) => {
      e.target.style.display = 'none'
      const secondGate = document.getElementById('vertical-sides')
      secondGate.style.animationName = ''
      e.target.removeEventListener('animationend', horizontalDoorsOpened)
      setIsOpened(true)
    }
    const sides = document.querySelectorAll('.horizontal-side')
    sides.forEach((side) => {
      if (side.nextElementSibling) {
        side.style.animationName = 'slideLeft'
      }
      if (!side.nextElementSibling) {
        side.style.animationName = 'slideRight'
      }
      side.addEventListener('animationend', horizontalDoorsOpened)
    })
  }
  useEffect(freezeScroll, [])

  return (
    <Container>
      {isOpened
        ? <SmokeContainer isOpened={isOpened} />
        : (
      <>
        <LeftSide className="horizontal-side">
          <div id="warning-top">
            <WarningSign title="warning!" />
          </div>
          <div id="warning-bottom">
            <WarningSign
              title="danger"
              color="red"
            >
              Keep out
            </WarningSign>
          </div>
        </LeftSide>
        <RightSide
          className="horizontal-side"
          color={isUnlocked ? greenishBlue : warningRed}
          isWarning={isWarning}
        >
          <PasswordContainer id="password-container">
            <ControlPanel
              isActivated={isUnlocked}
              isWarning={isWarning}
            >
              {isUnlocked
                ? 'Access granted. Press central button to proceed.'
                : 'Welcome. Please enter password below for access.'}
            </ControlPanel>
            <LoginForm
              submitHandler={unlockDoor}
              password="Hello, world"
              isActivated={isUnlocked}
              isWarning={isWarning}
            />
          </PasswordContainer>
          <CenterBlob
            color={isUnlocked ? greenishBlue : warningRed}
            isWarning={isWarning}
          >
            <CenterLightContainer>
              <CenterLight
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                color={isUnlocked ? greenishBlue : warningRed}
                onClick={handleClick}
              >
                <ButtonIcon className={`fas fa-${isUnlocked ? 'laugh' : 'ban'}`} />
              </CenterLight>
            </CenterLightContainer>
          </CenterBlob>
        </RightSide>
      </>
        )
      }
      <OpeningGate id="vertical-sides" />
    </Container>
  )
}

export default Welcome
