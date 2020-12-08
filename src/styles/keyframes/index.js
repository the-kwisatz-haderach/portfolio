import { keyframes } from 'styled-components'

export const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const slideRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(125%);
  }
`

export const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(125%);
  }
`

export const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-125%);
  }
`

export const pulseOpacity = keyframes`
  from {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`

export const pulseOpacityLess = keyframes`
  from {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`

export const pulseScale = keyframes`
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`
