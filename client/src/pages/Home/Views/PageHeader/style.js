import styled from 'styled-components'
import texture from '../../../../assets/images/circuit.jpg'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: url(${texture});
    background-size: cover;
    opacity: 0.1;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2em;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0% 60%, 720% 100%, 0% 100%);
  @media only screen and (min-width: 768px) {
    padding: 4em;
    clip-path: polygon(0% 40%, 250% 100%, 0% 100%);
  }
`

export const DescriptionContainer = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 1em;
  @media only screen and (min-width: 768px) {
    font-size: 1.4em;
    line-height: 1.4em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.8em;
    line-height: 1.4em;
  }
`

export const HeadingContainer = styled.div`
  position: relative;
  margin-bottom: 0.7em;
  font-size: 1.2em;
  @media only screen and (min-width: 768px) {
    font-size: 2em;
  }
  @media only screen and (min-width: 1200px) {
    margin-bottom: 0.5em;
    font-size: 3em;
  }
`

export const Heading = styled.h1`
  display: block;
  margin: 0;
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: 0;
  left: 0;
`

export const HiddenHeading = styled.h1`
  display: block;
  margin: 0;
  visibility: hidden;
`

export const HiddenDescription = styled.p`
  visibility: hidden;
`

export const Description = styled.p`
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: 0;
  left: 0;
`

export const TypeMarker = styled.span`
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
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
