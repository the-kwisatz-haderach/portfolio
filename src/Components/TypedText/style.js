import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  & > * {
    line-height: 1.4 !important;
  }
`

export const Text = styled.span`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
`

export const Hidden = styled.span`
  visibility: hidden;
  margin: 0;
`

export const TypeMarker = styled.span`
  position: relative;
  width: 0;
  height: 0;
  &::before {
    content: '|';
    position: absolute;
    bottom: 0;
    left: 0;
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
