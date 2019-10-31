import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'
import ControlPanel from '../ControlPanel'
import HorizontalGate from '../HorizontalGate'
import {
  TopSide,
  BottomSide,
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

  const horizontalDoorsOpened = (e) => {
    e.target.removeEventListener('animationend', horizontalDoorsOpened)
    handleDoorOpen()
  }

  const verticalDoorsOpened = (e) => {
    e.target.removeEventListener('animationend', verticalDoorsOpened)
  }

  const handleClick = () => {
    if (!isUnlocked) {
      useDelayedToggle(setIsWarning, 4000)
      return
    }

    const [top, bottom] = document.querySelectorAll('.vertical-side')
    const [left, right] = document.querySelectorAll('.horizontal-side')
    top.style.animationName = 'slideUp'
    bottom.style.animationName = 'slideDown'
    left.style.animationName = 'slideLeft'
    right.style.animationName = 'slideRight'
    left.style.display = 'block'
    right.style.display = 'block'
    top.addEventListener('animationend', verticalDoorsOpened)
    bottom.addEventListener('animationend', verticalDoorsOpened)
    left.addEventListener('animationend', horizontalDoorsOpened)
    right.addEventListener('animationend', horizontalDoorsOpened)
  }

  return (
    <div>
      <TopSide className="vertical-side" />
      <BottomSide
        className="vertical-side"
        color={isUnlocked ? greenishBlue : warningRed}
        isWarning={isWarning}
      >
        <PasswordContainer id="password-container">
          <ControlPanel isActivated={isUnlocked} isWarning={{ state: isWarning, duration: 4000 }}>
            Welcome. Please enter password below for access.
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
      </BottomSide>
      <HorizontalGate />
    </div>
  )
}

Login.propTypes = {
  handleDoorOpen: PropTypes.func
}

export default Login
