import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 3px solid white;
`

const ScreenSurface = styled.div`
  background-color: blue;
`

const defMessage = 'Placeholder message'

const ControlPanel = ({ message = defMessage }) => {
  return (
    <Container>
      <ScreenSurface>
        <p>{message}</p>
      </ScreenSurface>
    </Container>
  )
}

export default ControlPanel
