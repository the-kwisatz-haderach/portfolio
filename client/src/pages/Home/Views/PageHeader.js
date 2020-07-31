import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeroImage from '../../../components/HeroImage'
import useTypedMessage from '../../../Hooks/useTypedMessage'
import bear from '../../../assets/images/bear.jpg'
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
import useThrottled from '../../../Hooks/useThrottled'

const TopLayer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.secondary};
`

const BottomLayer = styled.div`
  width: 100%;
  cursor: none;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  clip-path: ellipse(0px 0px);
  background-color: black;
`

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

  const onMouseMove = useThrottled(e => {
    const xCoord = e.pageX
    const yCoord = e.pageY
    requestAnimationFrame(() => {
      const bottomLayerDiv = headerRef.current.children[1]
      bottomLayerDiv.style.clipPath = `ellipse(75px 75px at ${xCoord}px ${yCoord}px)`
    })
  }, 30)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.addEventListener('mousemove', onMouseMove.current)
    }
  }, [headerRef])

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
      <TopLayer>
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
              <TypeMarker
                hide={!headerIsDone}
                blink={isDoneTypingDescription}
              />
            </Description>
          </DescriptionContainer>
        </TextWrapper>
      </TopLayer>
      <BottomLayer>
        <TextWrapper>
          <HeadingContainer
            style={{
              marginBottom: '0.2em'
            }}
          >
            <Heading color="white">Fuck you.</Heading>
          </HeadingContainer>
          <DescriptionContainer>
            <Description color="white">{description}</Description>
          </DescriptionContainer>
        </TextWrapper>
      </BottomLayer>
    </Container>
  )
}
