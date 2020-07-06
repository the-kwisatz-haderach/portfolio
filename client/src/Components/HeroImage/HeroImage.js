import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useTypedMessage from '../../Hooks/useTypedMessage'
import {
  Container,
  Hidden,
  Heading,
  Description,
  TextContainer,
  TypeMarker,
} from './styles'

const HeroImage = ({ image, title, description }) => {
  const [canHeaderStart, setCanHeaderStart] = useState(false)
  const [headerIsDone, setHeaderIsDone] = useState(false)

  const [slowlyTypedHeading, isDoneTypingHeading] = useTypedMessage(
    title,
    70,
    canHeaderStart
  )

  const [slowlyTypedDescription, isDoneTypingDescription] = useTypedMessage(
    description,
    60,
    headerIsDone
  )

  useEffect(() => {
    let timer
    if (!canHeaderStart) {
      timer = setTimeout(() => {
        setCanHeaderStart(true)
      }, 1500)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    let timer
    if (isDoneTypingHeading) {
      timer = setTimeout(() => {
        setHeaderIsDone(true)
      }, 2000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isDoneTypingHeading])

  return (
    <Container image={image}>
      <div>
        <Heading>
          {slowlyTypedHeading}
          <TypeMarker
            hide={headerIsDone || !canHeaderStart}
            blink={isDoneTypingHeading}
          />
        </Heading>
        <TextContainer>
          <Description>
            {slowlyTypedDescription}
            <TypeMarker hide={!headerIsDone} blink={isDoneTypingDescription} />
          </Description>
          <Hidden>{description}</Hidden>
        </TextContainer>
      </div>
    </Container>
  )
}

HeroImage.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default HeroImage
