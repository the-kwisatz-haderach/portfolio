import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 90px;
  height: 48px;
  border-radius: 50px;
  background-color: black;
  border: 4px solid #3c3c3c;
`

const Switch = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  bottom: 6px;
  right: 8px;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${props => (props.isActive ? 100 : 0)}%);
  background: linear-gradient(35deg, #e8e8e8, #232323);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.link};
`

export default function Toggle({ onClick, active = false, icon }) {
  const [isActive, setIsActive] = useState(active)
  return (
    <Container
      onClick={() => {
        onClick()
        setIsActive(current => !current)
      }}
    >
      <Switch isActive={isActive}>{icon && <i className={icon} />}</Switch>
    </Container>
  )
}
