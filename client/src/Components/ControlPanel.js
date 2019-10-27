import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Screen from '../styles/Screen'
import { pulseOpacity } from '../styles/keyframes'

const ScreenSurface = styled(Screen)`
  background-color: ${props => {
    if (props.activated) return '#4cb167'
    if (props.warning) return 'red'
    return '#858c45'
  }};
  width: 100%;
  max-width: 270px;
  margin: auto;
  height: 120px;
  overflow: hidden;
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
    top: 0;
    left: 1px;
    width: calc(100% - 4px);
    height: inherit;
    box-shadow: inset 4px 4px 20px 8px #eff885f2;
    animation: ${pulseOpacity} 2.5s ease-in-out infinite;
    border-radius: 7px;
  }
`

const ScreenMessage = styled.p`
  margin: 0;
`

const defChildren = 'Placeholder message'
const defIsActivated = false
const defIsWarning = false

const ControlPanel = ({
  children = defChildren,
  isActivated = defIsActivated,
  isWarning = defIsWarning
}) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const charArray = [...children]
    let addCharacters
    let i = 0
    if (i <= charArray.length) {
      addCharacters = setInterval(() => {
        const newMessage = charArray.slice(0, i)
        i += 1
        setMessage(newMessage)
      }, 120)
    }
    return () => { clearInterval(addCharacters) }
  }, [children])

  return (
    <ScreenSurface
      activated={isActivated}
      warning={isWarning}
    >
      <ScreenMessage>
        {isWarning
          ? 'Access denied. Password required.'
          : message}
      </ScreenMessage>
    </ScreenSurface>
  )
}

ControlPanel.propTypes = {
  children: PropTypes.string,
  isActivated: PropTypes.bool,
  isWarning: PropTypes.bool
}

export default ControlPanel
