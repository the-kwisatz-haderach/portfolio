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
  /* background-image: url('./assets/images/black-texture.png'); */
  background-image: url('https://previews.123rf.com/images/kokoroyuki/kokoroyuki1611/kokoroyuki161100051/68284170-silver-metal-texture-background.jpg');
  width: 100vw;
  height: 50vh;
  position: absolute;
  left: 0;
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 7s;
  animation-delay: 3s;
  display: none;
`

const Stripes = styled.div`
  position: absolute;
  width: 100vw;
  height: 100px;
  background-color: #ffe500bf;
  bottom: ${(props) => props.bottom ? 0 : ''};
  &::before {
    content: '';
    position: absolute;
    top: ${(props) => props.top ? 0 : ''};;
    bottom: ${(props) => props.bottom ? 0 : ''};
    background-image: url('https://generator.background-tiles.com/transparant-patterns/pattern-9007.png');
    height: 40px;
    width: 100vw;
    background-repeat: repeat;
    background-position: left;
  }
`

export const TopGate = styled(Gate)`
  top: 0;
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
      <TopGate className="vertical-side">
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
        <Stripes bottom />
      </TopGate>
      <BottomGate className="vertical-side">
        <Stripes top />
        <div id="warning-biohazard">
          <WarningSign
            title="warning!"
            iconClass="fas fa-biohazard"
          />
        </div>
      </BottomGate>
    </Container>
  )
}

export default VerticalGate
