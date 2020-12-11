import React, { useState } from 'react'
import { Container, Switch } from './style'

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
