import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  color: white;
  & > div {
    margin-left: 3em;
    margin-bottom: 3em;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  position: relative;
`

export const Heading = styled.h1`
  font-size: 7em;
  line-height: 1.4;
  margin-bottom: 0.2em;
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
  display: ${(props) => (props.hide ? 'none' : 'inline')};
  position: relative;
  &::before {
    content: '|';
    position: absolute;
    bottom: 0px;
    left: 0px;
    animation: ${(props) =>
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
