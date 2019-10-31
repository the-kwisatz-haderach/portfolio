import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Screen from '../styles/Screen'
import { pulseOpacity } from '../styles/keyframes'

const ScreenSurface = styled(Screen)`
  position: relative;
  background-color: ${props => {
    if (props.activated) return '#4cb167'
    if (props.warning) return 'red'
    return '#858c45'
  }};
  width: 100%;
  max-width: 270px;
  height: 120px;
  margin: auto;
  text-shadow: 1px 1px 4px white;
  color: ${props => props.activated || props.warning ? 'white' : '#f1ff85'};
  box-shadow: inset 3px 3px 12px 7px ${props => props.warning ? '#651903' : '#e7ff0085'};
  pointer-events: none;
  line-height: 1.4;
  font-size: 20px;
  border-radius: 7px;
  transition: background 0.4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    width: 100%;
    height: 100%;
    border: 14px solid #252525;
    border-radius: 18px;
    box-shadow: 3px 3px 20px 0px black;
  }
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    box-shadow: inset 5px 7px 30px 9px #f7ff9af2;
    animation: ${pulseOpacity} 2s ease-in-out infinite;
    border-radius: 7px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 350px;
    height: 145px;
    font-size: 26px;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 440px;
    height: 185px;
    font-size: 36px;
  }
`

const ScreenMessage = styled.p`
  margin: 0;
  font-family: 'calculator', sans-serif;
`

const defChildren = 'Placeholder message'
const defIsActivated = false
const defIsWarning = { state: false, duration: 3000 }

const ControlPanel = ({
  children = defChildren,
  isActivated = defIsActivated,
  isWarning = defIsWarning
}) => {
  const [displayMessage, setDisplayMessage] = useState('')
  const [message, setMessage] = useState(children)

  useEffect(() => {
    if (isWarning.state) setMessage('Incorrect Password. Access denied.')
    if (isActivated) setMessage('Access granted. Press central button to proceed.')
  }, [isActivated, isWarning.state])

  useEffect(() => {
    let addIncrementally
    let warningTimeout
    if (isWarning.state) {
      warningTimeout = setTimeout(() => {
        setMessage(children)
      }, isWarning.duration)
    }
    const characters = [...message]
    let i = 0
    if (i <= characters.length) {
      addIncrementally = setInterval(() => {
        const newMessage = characters.slice(0, i)
        i += 1
        setDisplayMessage(newMessage)
      }, 100)
    }
    return () => {
      clearInterval(addIncrementally)
      clearTimeout(warningTimeout)
    }
  }, [message])

  return (
    <ScreenSurface activated={isActivated} warning={isWarning.state}>
      <ScreenMessage>
        {displayMessage}
      </ScreenMessage>
    </ScreenSurface>
  )
}

ControlPanel.propTypes = {
  children: PropTypes.string,
  isActivated: PropTypes.bool,
  isWarning: PropTypes.shape({
    state: PropTypes.bool,
    duration: PropTypes.number
  })
}

export default ControlPanel
