import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 10px;
  transform: translateY(${props => (props.hide ? -100 : 0)}%);
  transition: transform 0.5s ease-in-out;
  @media screen and (min-width: 768px) {
    right: 20px;
  }
`

export const StyledIcon = styled.i`
  font-size: 1.5em;
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`

export const StyledP = styled.p`
  font-weight: 900;
  font-size: 0.8em;
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`
