import styled from 'styled-components'
import portrait from '../../../../assets/images/portrait.jpg'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: url(${portrait});
    background-position: top;
    background-size: cover;
  }
  &::after {
    content: '';
    position: absolute;
    top: 12%;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, black 0%, transparent);
  }
  @media only screen and (min-width: 1024px) {
    &::before {
      left: 20%;
      height: 100%;
      background-position: center;
    }
    &::after {
      top: 0%;
      left: -20%;
      background: linear-gradient(90deg, black 50%, transparent);
    }
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
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0% 60%, 720% 100%, 0% 100%);
  justify-content: flex-end;
  & div {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    padding: 3em;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;
    padding: 4em;
    clip-path: polygon(50% 0%, 0% 720%, 0% 0%);
    & div {
      width: 42%;
    }
  }
`

export const DescriptionContainer = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 1em;
  @media only screen and (min-width: 500px) {
    font-size: 1.3em;
    line-height: 1.4em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.8em;
    line-height: 1.4em;
  }
`

export const HeadingContainer = styled.div`
  position: relative;
  margin-bottom: 1em;
  font-size: 1.2em;
  @media only screen and (min-width: 500px) {
    font-size: 1.7em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 2em;
  }
  @media only screen and (min-width: 1400px) {
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
