import React from 'react'
import styled from 'styled-components'
import { slideDown, slideUp } from '../styles/keyframes'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`

const Gate = styled.div`
  background-image: url('https://previews.123rf.com/images/kokoroyuki/kokoroyuki1611/kokoroyuki161100051/68284170-silver-metal-texture-background.jpg');
  width: 100vw;
  height: 50vh;
  position: absolute;
  left: 0;
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 5s;
  animation-delay: 2s;
`

export const TopGate = styled(Gate)`
  top: 0;
  /* background-image: url('./assets/images/black-texture.png'); */
  @keyframes slideUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-125%);
    }
  }
`

export const BottomGate = styled(Gate)`
  bottom: 0;
  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(125%);
    }
  }
`

const VerticalGate = () => {
  return (
    <Container>
      <TopGate className="vertical-side" />
      <BottomGate className="vertical-side" />
    </Container>
  )
}

export default VerticalGate
