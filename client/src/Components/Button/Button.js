import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 140px;
  height: 80px;
  background-color: ${props => props.theme.colors.primary};
  color: black;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.secondary};
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
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
