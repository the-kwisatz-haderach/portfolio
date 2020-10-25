import React, { useState, useEffect } from 'react'
import useTypedMessage from '../../../../Hooks/useTypedMessage'
import {
  Container,
  Heading,
  HiddenHeading,
  Description,
  HiddenDescription,
  DescriptionContainer,
  HeadingContainer,
  TypeMarker,
  TextWrapper
} from './style'
import useElementScrollTop from '../../../../Hooks/useElementScrollTop'
import useLocalStorage from '../../../../Hooks/useLocalStorage'

const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.'

export default function PageHeader() {
  const [headerRef, headerIsVisible] = useElementScrollTop()
  const [canHeaderStart, setCanHeaderStart] = useState(false)
  const [headerIsDone, setHeaderIsDone] = useState(false)
  const [visits] = useLocalStorage('visits')

  const heading = +visits > 0 ? 'Welcome Back.' : 'Welcome.'

  const [slowlyTypedHeading, isDoneTypingHeading] = useTypedMessage(
    heading,
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
    if (headerIsVisible) {
      timer = setTimeout(() => {
        setCanHeaderStart(true)
      }, 1500)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [headerIsVisible])

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
    <Container ref={headerRef}>
      <TextWrapper>
        <HeadingContainer>
          <HiddenHeading>{heading}</HiddenHeading>
          <Heading absolute>
            {slowlyTypedHeading}
            <TypeMarker
              hide={headerIsDone || !canHeaderStart}
              blink={!headerIsDone && isDoneTypingHeading}
            />
          </Heading>
        </HeadingContainer>
        <DescriptionContainer>
          <HiddenDescription>{description}</HiddenDescription>
          <Description absolute>
            {slowlyTypedDescription}
            <TypeMarker hide={!headerIsDone} blink={isDoneTypingDescription} />
          </Description>
        </DescriptionContainer>
      </TextWrapper>
    </Container>
  )
}
