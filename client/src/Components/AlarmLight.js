import React from 'react'
import styled from 'styled-components'

const LightZone = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(ellipse at top, #ff0000, #80000052);
  animation: blink 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  opacity: 0;
  background-position-y: top;
  pointer-events: none;
`

const LightContainer = styled.div`
  margin-left: calc(50vw - 20px);
  @media only screen and (min-width: 768px) {
    margin-left: calc(50vw - 25px);
  }
`

const LightSource = styled.div`
  width: 40px;
  height: 80px;
  position: absolute;
  z-index: 5;
  background-image: radial-gradient(ellipse at bottom, #ffa0a0, red);
  border-radius: 45%;
  box-shadow: 0px 30px 50px 40px #e91e63;
  opacity: 0;
  animation: blink 4s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
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
  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 100px;
  }
`

const LightPlug = styled.div`
  position: absolute;
  z-index: 6;
  margin-left: 3px;
  top: -2px;
  width: 30px;
  border-bottom: 5px solid #cccccc;
  border-radius: 0 0 10px 10px;
  @media only screen and (min-width: 768px) {
    width: 40px;
  }
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
