import React, { useEffect } from 'react'
import styled from 'styled-components'
import SmokeMachine from '@bijection/smoke'
import './style.scss'

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
  color: black;
  font-size: 100px;
  display: block;
  z-index: 500;
  padding: 0 5%;
  text-align: center;
`

const SmokeContainer = ({ doorIsOpened }) => {
  useEffect(() => {
    const canvas = document.getElementById('smoke-canvas')
    const ctx = canvas.getContext('2d')
    const smoker = SmokeMachine(ctx, [255, 255, 255])
    const smoke = setTimeout(() => {
      smoker.start()
      smoker.addSmoke(100, 1000, 35)
      smoker.addSmoke(300, 900, 50)
      smoker.addSmoke(500, 1000, 70)
      smoker.addSmoke(900, 1000, 25)
    }, 0)
    return () => {
      smoker.stop()
      clearTimeout(smoke)
    }
  }, [doorIsOpened])

  return (
    <Container>
      <StyledTitle>Welcome to my website.</StyledTitle>
      <canvas
        id="smoke-canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </Container>
  )
}

export default SmokeContainer
