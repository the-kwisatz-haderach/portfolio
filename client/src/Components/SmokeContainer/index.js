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

const StyledTitle = styled.h1`
  font-size: 10vw;
  color: black;
  display: block;
  z-index: 500;
  padding: 0 5%;
  text-align: center;
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
        <StyledTitle>Welcome to my website.</StyledTitle>
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
