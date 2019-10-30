import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #000000, transparent, #000000);
    pointer-events: none;
  }
`
