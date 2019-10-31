import styled from 'styled-components'
import { pulseOpacity, pulseOpacityLess } from '../../styles/keyframes'

export const Side = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url('./assets/images/black-texture.png');
  background-size: contain;
  background-repeat: repeat;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.38, 0.13, 0.57, 0.75);
  animation-duration: 5s;
  animation-fill-mode: forwards;
`

export const TopSide = styled(Side)`
  top: 0;
  border-bottom: 5px solid black;
  outline: 1px solid #232323;
  overflow: hidden;
  z-index: 3;
  @keyframes slideUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }
`

export const BottomSide = styled(Side)`
  bottom: 0;
  border-top: 5px solid black;
  outline: 1px solid #232323;
  z-index: 3;
  pointer-events: none;
  &:before {
    content: '';
    transform-origin: center;
    position: absolute;
    box-shadow: 0px -6px ${(props) => props.isWarning ? '16px 6px red' : `13px 4px ${props.color}`};
    width: 100%;
    height: 100%;
    animation: ${pulseOpacityLess} ${props => props.isWarning ? '0.3s' : '2s'} ease-in-out 0.5s infinite;
  }
  @keyframes slideDown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(125%);
    }
  }
`

export const CenterBlob = styled.div`
  position: absolute;
  left: calc(50% - 85px);
  top: -85px;
  width: 170px;
  height: 170px;
  background-image: radial-gradient(#f9fff8,black);
  border: 4px solid #fdfffe38;
  border-radius: 50%;
  box-shadow: 2px 1px 10px 7px #000000ed;
  pointer-events: auto;
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
  @media only screen and (min-width: 768px) {
    left: calc(50% - 100px);
    top: -100px;
    width: 200px;
    height: 200px;
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
  @media only screen and (min-width: 768px) {
    top: calc(50% - 35px);
    left: calc(50% - 35px);
    width: 70px;
    height: 70px;
  }
`

export const CenterLight = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 120px;
  height: 50px;
  background-image: linear-gradient(110deg, ${(props) => props.color}, #000000,#292929,#9c9c9c);
  z-index: 5;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 768px) {
    top: calc(50% - 35px);
    left: calc(50% - 35px);
    width: 140px;
    height: 70px;
  }
  @media only screen and (pointer: coarse), (pointer: fine) {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-70px);
    &:hover {
      transform: translateX(0);
    }
  }
`

export const ButtonIcon = styled.i`
  color: white;
  position: relative;
  left: 11px;
  top: 1px;
  font-size: 1.8em;
  @media only screen and (min-width: 768px) {
    left: 18px;
    font-size: 2.2em;
  }
`

export const MetalPlate = styled.div`
  position: absolute;
  left: calc(50% - 35px);
  width: 70px;
  height: 50%;
  background-size: contain;
  background-image: url('assets/images/pipe.jpeg');
  box-shadow: 3px 3px 20px 0px black;
  @media only screen and (min-width: 425px) {
    left: calc(50% - 50px);
    width: 100px;
  }
`

export const MetalPlateTop = styled(MetalPlate)`
  top: 0;
`

export const MetalPlateBottom = styled(MetalPlate)`
  bottom: 0;
`
