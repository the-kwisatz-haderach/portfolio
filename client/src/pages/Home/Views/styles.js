import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

export const TextWrapper = styled.div`
  width: 80%;
  padding: 1.5em 2.5em;
  margin-bottom: 3em;
  z-index: 1;
`

export const TextContainer = styled.div`
  position: relative;
`

export const Heading = styled.h1`
  font-size: 8em;
  line-height: 1.4;
  display: inline;
`

export const Hidden = styled.p`
  font-size: 1.8em;
  line-height: 1.4em;
  visibility: hidden;
`

export const Description = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.8em;
  line-height: 1.4em;
`

export const TypeMarker = styled.span`
  display: ${props => (props.hide ? 'none' : 'inline')};
  position: relative;
  &::before {
    content: '|';
    position: absolute;
    bottom: 0px;
    left: 0px;
    animation: ${props =>
      props.blink ? 'blink 0.8s linear infinite' : 'none'};
  }
  @keyframes blink {
    0% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`

export const BackDropFront = styled.div`
  width: 100%;
  height: 350px;
  clip-path: polygon(100% 100%, 0% 0%, 0% 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.secondaryDark};
  transform: translateX(-100%);
  animation: slideIn 1.2s ease-in-out forwards 0.1s;
  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
`

export const BackDropBack = styled.div`
  width: 40%;
  height: 180px;
  clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primaryDark};
  transform: translateX(100%);
  animation: slideIn 1.2s ease-in-out forwards 0.3s;
  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
`
