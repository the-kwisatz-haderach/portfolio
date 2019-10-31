import React from 'react'
import styled from 'styled-components'
import WarningSign from './WarningSign'
import { slideDown, slideUp } from '../styles/keyframes'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`

const Gate = styled.div`
  background-image: url('assets/images/silver-metal.jpg');
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 7s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  display: none;
`

const Stripes = styled.div`
  position: absolute;
  width: 100px;
  height: 100vh;
  background-color: #ffe500bf;
  right: ${(props) => props.right ? 0 : ''};
  &::before {
    content: '';
    position: absolute;
    left: ${(props) => props.left ? 0 : ''};;
    right: ${(props) => props.right ? 0 : ''};
    background-image: url('assets/images/black-stripes.png');
    width: 40px;
    height: 100vh;
    background-repeat: repeat;
  }
`

export const LeftGate = styled(Gate)`
  left: 0;
  @keyframes slideLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-125%);
    }
  }
`

export const RightGate = styled(Gate)`
  right: 0;
  @keyframes slideRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(125%);
    }
  }
`

const HorizontalGate = () => {
  return (
    <Container>
      <LeftGate className="horizontal-side">
        <div id="warning-triangle">
          <WarningSign
            title="warning!"
            iconClass="fas fa-exclamation-triangle"
          />
        </div>
        <div id="warning-skull">
          <WarningSign
            title="danger"
            color="red"
            iconClass="fas fa-skull-crossbones"
          >
            Keep out
          </WarningSign>
        </div>
        <Stripes right />
      </LeftGate>
      <RightGate className="horizontal-side">
        <Stripes left />
        <div id="warning-biohazard">
          <WarningSign
            title="warning"
            iconClass="fas fa-biohazard"
          >
            Biohazard
          </WarningSign>
        </div>
      </RightGate>
    </Container>
  )
}

export default HorizontalGate
