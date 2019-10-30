import React from 'react'
import styled from 'styled-components'

const LightZone = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(ellipse at top, #ff0000, #80000052);
  animation: blink 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite 1s;
  opacity: 0;
  background-position-y: top;
  pointer-events: none;
`

const LightContainer = styled.div`
  margin-left: calc(50vw - 25px);
`

const LightSource = styled.div`
  width: 50px;
  height: 100px;
  position: absolute;
  z-index: 5;
  background-image: linear-gradient(to bottom, #ff5151e0, #ff5151e0, #ffb8b8);
  border-radius: 45%;
  border: 2px solid #ffd2d22e;
  border-bottom: 2px solid #ffe6e6;
  box-shadow: 0px 30px 50px 40px #e91e63;
  opacity: 0;
  animation: blink 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite 1s;
  @keyframes blink {
    from {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const LightPlug = styled.div`
  position: absolute;
  margin-left: 4px;
  z-index: 6;
  width: 40px;
  border-bottom: 5px solid #cccccc;
  border-radius: 0 0 10px 10px;
`

const AlarmLight = () => {
  return (
    <>
      <LightZone />
      <LightContainer>
        <LightSource>
          <LightPlug />
        </LightSource>
      </LightContainer>
    </>
  )
}

export default AlarmLight
