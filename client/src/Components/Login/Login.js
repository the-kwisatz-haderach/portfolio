import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'
import ControlPanel from '../ControlPanel'
import VerticalGate from '../VerticalGate'
import {
  LeftSide,
  RightSide,
  CenterBlob,
  CenterLightContainer,
  CenterLight,
  ButtonIcon,
  PasswordContainer
} from './Styles'
import { greenishBlue, warningRed } from '../../styles/variables'
import useDelayedToggle from '../../Hooks/useDelayedToggle'

const defHandleDoorOpen = () => false

const Login = ({ handleDoorOpen = defHandleDoorOpen }) => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isWarning, setIsWarning] = useState(false)

  const verticalDoorsOpened = (e) => {
    e.target.style.display = 'none'
    e.target.removeEventListener('animationend', verticalDoorsOpened)
    handleDoorOpen()
  }

  const horizontalDoorsOpened = (e) => {
    e.target.style.display = 'none'
    e.target.removeEventListener('animationend', horizontalDoorsOpened)
  }

  const handleClick = () => {
    if (!isUnlocked) {
      useDelayedToggle(setIsWarning, 3000)
      return
    }

    const [leftSide, rightSide] = document.querySelectorAll('.horizontal-side')
    const [topSide, bottomSide] = document.querySelectorAll('.vertical-side')
    leftSide.style.animationName = 'slideLeft'
    rightSide.style.animationName = 'slideRight'
    topSide.style.animationName = 'slideUp'
    bottomSide.style.animationName = 'slideDown'
    leftSide.addEventListener('animationend', horizontalDoorsOpened)
    rightSide.addEventListener('animationend', horizontalDoorsOpened)
    topSide.addEventListener('animationend', verticalDoorsOpened)
    bottomSide.addEventListener('animationend', verticalDoorsOpened)
  }

  return (
    <div>
      <LeftSide className="horizontal-side" />
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
            submitHandler={() => setIsUnlocked(true)}
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
              color={isUnlocked ? greenishBlue : warningRed}
              onClick={handleClick}
            >
              <ButtonIcon className={`fas fa-${isUnlocked ? 'laugh' : 'ban'}`} />
            </CenterLight>
          </CenterLightContainer>
        </CenterBlob>
      </RightSide>
      <VerticalGate />
    </div>
  )
}

Login.propTypes = {
  handleDoorOpen: PropTypes.func
}

export default Login
