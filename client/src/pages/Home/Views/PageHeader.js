import React, { useState, useEffect } from 'react'
import useTypedMessage from '../../../Hooks/useTypedMessage'
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
} from './styles'
import useElementScrollTop from '../../../Hooks/useElementScrollTop'
import useLocalStorage from '../../../Hooks/useLocalStorage'

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
      <svg width="1600" height="800" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect
            fill="#ffffff"
            id="canvas_background"
            height="802"
            width="1602"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <title>Layer 1</title>
          <line
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            id="svg_1"
            y2="277.90556"
            x2="313.99998"
            y1="277.90556"
            x1="0.99835"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="4"
            stroke="#000"
            fill="none"
          />
          <line
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            id="svg_2"
            y2="301.905"
            x2="313.99998"
            y1="301.905"
            x1="0.99835"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="4"
            stroke="#000"
            fill="none"
          />
          <line
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            id="svg_3"
            y2="313.90472"
            x2="313.99998"
            y1="313.90472"
            x1="0.99835"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="4"
            stroke="#000"
            fill="none"
          />
          <line
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            id="svg_4"
            y2="289.90528"
            x2="313.99998"
            y1="289.90528"
            x1="0.99835"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="4"
            stroke="#000"
            fill="none"
          />
          <rect
            stroke="#000"
            rx="5"
            id="svg_5"
            height="133.99688"
            width="43.99898"
            y="227.99469"
            x="316.01126"
            fill-opacity="null"
            stroke-opacity="null"
            stroke-width="4"
            fill="none"
          />
        </g>
      </svg>
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
