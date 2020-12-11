import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.secondary};
  transition: background-color 0.1s ease-in-out;
  border: 3px solid #69696994;
  &:hover {
    background-color: black;
    color: white;
  }
  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 60px;
  }
  @media only screen and (min-width: 1024px) {
    width: 140px;
    height: 80px;
  }
`

function Button({ children, onClick, style, ...props }) {
  return (
    <StyledButton {...props} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object
}

export default Button
