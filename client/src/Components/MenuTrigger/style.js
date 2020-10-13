import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 20px;
  transform: translateY(${props => (props.hide ? -100 : 0)}%);
  transition: transform 0.5s ease-in-out;
`

export const StyledIcon = styled.i`
  font-size: 2em;
`

export const StyledP = styled.p`
  font-weight: 900;
`
