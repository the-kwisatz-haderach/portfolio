import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SmokeMachine from '@bijection/smoke'
import './style.scss'
import AlarmLight from '../AlarmLight'
import { TopBottomGradient } from '../../styles/TopBottomGradient'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  z-index: 500;
  text-align: center;
  color: black;
  text-transform: uppercase;
  > * {
    margin: 0;
    width: 100%;
  }
`

const StyledTitle = styled.h1`
  font-size: 9vw;
`

const StyledSubTitle = styled.p`
  font-size: 7vw;
  font-family: 'Inconsolata', monospace;
`

const defDoorIsOpened = true

const SmokeContainer = ({ doorIsOpened = defDoorIsOpened }) => {
  useEffect(() => {
    const canvas = document.getElementById('smoke-canvas')
    const ctx = canvas.getContext('2d')
    const smoker = SmokeMachine(ctx, [255, 255, 255])
    const smoke = setTimeout(() => {
      smoker.start()
      smoker.addSmoke(100, 1000, 35)
      smoker.addSmoke(300, 1200, 50)
      smoker.addSmoke(500, 1100, 70)
      smoker.addSmoke(900, 1200, 25)
      smoker.addSmoke(1200, 1000, 55)
    }, 0)
    return () => {
      smoker.stop()
      clearTimeout(smoke)
    }
  }, [doorIsOpened])

  return (
    <TopBottomGradient>
      <AlarmLight />
      <Container>
        <TextContainer>
          <StyledTitle>Under construction</StyledTitle>
          <StyledSubTitle>Come back later</StyledSubTitle>
        </TextContainer>
        <canvas
          id="smoke-canvas"
          width={window.innerWidth}
          height={window.innerHeight}
        ></canvas>
      </Container>
    </TopBottomGradient>
  )
}

SmokeContainer.propTypes = {
  doorIsOpened: PropTypes.bool
}

export default SmokeContainer
