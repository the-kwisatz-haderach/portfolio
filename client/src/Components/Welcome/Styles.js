import styled from 'styled-components'
import { pulseOpacity, pulseOpacityLess } from '../../styles/keyframes'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #000000, transparent, #000000)
  }
`

export const Side = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  background-image: url('./assets/images/black-texture.png');
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 5s;
`

export const LeftSide = styled(Side)`
  left: 0;
  border-right: 5px solid black;
  outline: 1px solid #232323;
  overflow: hidden;
  @keyframes slideLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`

export const RightSide = styled(Side)`
  right: 0;
  border-left: 5px solid black;
  outline: 1px solid #232323;
  &:before {
    content: '';
    transform-origin: center;
    position: absolute;
    box-shadow: -4px 0px ${(props) => props.isWarning ? '15px 4px red' : `13px 2px ${props.color}`};
    width: 100%;
    height: 100%;
    animation: ${pulseOpacityLess} ${props => props.isWarning ? '0.3s' : '2s'} ease-in-out 0.5s infinite;
  }
  @keyframes slideRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(125%);
    }
  }
`

export const CenterBlob = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: -100px;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(#f9fff8,black);
  border: 4px solid #fdfffe38;
  border-radius: 50%;
  box-shadow: 2px 1px 10px 7px #000000ed;
  &:before {
    content: '';
    transform-origin: center;
    position: absolute;
    border-radius: 50%;
    box-shadow: 1px 1px ${(props) => props.isWarning ? '20px 7px red' : `16px 5px ${props.color}`};
    width: 100%;
    height: 100%;
    animation: ${pulseOpacity} ${props => props.isWarning ? '0.3s' : '2s'} ease-in-out 0.3s infinite;
  }
`

export const CenterLightContainer = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 2px black;
  overflow: hidden;
`

export const CenterLight = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25);
  width: 150px;
  height: 50px;
  background-image: linear-gradient(110deg, ${(props) => props.color}, #000000, #777777, #000000);
  z-index: 5;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-50px);
  &:hover {
    transform: translateX(0);
  }
`

export const ButtonIcon = styled.i`
  color: white;
  margin-top: 0.5em;
  margin-left: 0.5em;
  font-size: 1.6em;
`
