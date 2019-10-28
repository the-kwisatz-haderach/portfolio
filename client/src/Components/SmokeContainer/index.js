import React, { useEffect } from 'react'
import styled from 'styled-components'
import SmokeMachine from '@bijection/smoke'
import './style.scss'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const TitleContainer = styled.div`
  position: absolute;
  z-index: 500;
  top: 45%;
`

const StyledTitle = styled.h1`
  color: black;
  font-size: 100px;
  position: absolute;
  margin: 0;
  text-align: center;
`

const SmokeContainer = () => {
  useEffect(() => {
    const canvas = document.getElementById('smoke-canvas')
    const ctx = canvas.getContext('2d')
    const smoker = SmokeMachine(ctx, [255, 255, 255])
    const smoke = setTimeout(() => {
      smoker.addSmoke(100, 1000, 35)
      smoker.addSmoke(300, 900, 50)
      smoker.addSmoke(500, 1000, 70)
      smoker.addSmoke(900, 1000, 25)
      smoker.start()
    }, 100)
    return () => {
      smoker.stop()
      clearTimeout(smoke)
    }
  }, [])

  return (
    <canvas
      id="smoke-canvas"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}

export default SmokeContainer
