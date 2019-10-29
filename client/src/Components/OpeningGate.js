import React from 'react'
import styled from 'styled-components'
import { slideDown, slideUp } from '../styles/keyframes'

export const TopGate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background-image: url('./assets/images/black-texture.png');
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 5s;
  animation-delay: 1s;
  @keyframes slideUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-125%);
    }
  }
`

export const BottomGate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50vh;
  background-image: url('./assets/images/black-texture.png');
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 5s;
  animation-delay: 1s;
  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(125%);
    }
  }
`

const OpeningGate = () => {
  return (
    <div>
      <TopGate />
      <BottomGate />
    </div>
  )
}

export default OpeningGate
