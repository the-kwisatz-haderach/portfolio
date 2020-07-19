import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const HeroImage = ({ image, children }) => {
  return <Container image={image}>{children}</Container>
}

HeroImage.propTypes = {
  image: PropTypes.node,
  children: PropTypes.node
}

export default HeroImage
