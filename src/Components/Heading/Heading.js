import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getFontSize = size => {
  switch (size) {
    case 'large':
      return '4em'
    case 'medium':
      return '2em'
    case 'small':
      return '1em'
  }
}

const StyledHeading = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => getFontSize(props.size)};
`

function Heading({ size, children, ...props }) {
  return (
    <StyledHeading size={size} {...props}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'medium', 'small'])
}

export default Heading
