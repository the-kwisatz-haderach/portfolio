import React, { useState, useEffect } from 'react'
import HeroImage from '../../../components/HeroImage'
import useTypedMessage from '../../../Hooks/useTypedMessage'
import profilePhoto from '../../../assets/images/portrait.jpg'
import {
  Container,
  Hidden,
  Heading,
  Description,
  TextContainer,
  TypeMarker,
  TextWrapper,
  BackDropFront,
  BackDropBack
} from './styles'

const title = 'Hi. Welcome.'
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.'

export default function PageHeader() {
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
    <Container>
      <HeroImage image={profilePhoto}>
        <TextWrapper>
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
              <TypeMarker
                hide={!headerIsDone}
                blink={isDoneTypingDescription}
              />
            </Description>
            <Hidden>{description}</Hidden>
          </TextContainer>
        </TextWrapper>
        <BackDropFront />
        <BackDropBack />
      </HeroImage>
    </Container>
  )
}
