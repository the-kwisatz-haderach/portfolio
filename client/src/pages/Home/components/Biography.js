import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useTypedMessage from '../../../Hooks/useTypedMessage'
import useScrollBreakpoint from '../../../Hooks/useScrollBreakpoint'

const Container = styled.div`
  width: 100%;
  padding-left: ${(props) => props.theme.padding.horizontal};
  padding-right: ${(props) => props.theme.padding.horizontal};
  min-height: 450px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(
    160deg,
    ${(props) => props.theme.colors.primaryLight},
    ${(props) => props.theme.colors.primaryDark}
  );
`

const TextContainer = styled.div`
  position: relative;
`

const Heading = styled.h2`
  display: inline-block;
  width: 100%;
  align-self: center;
  font-size: 4em;
  margin-top: 0;
  margin-bottom: 0.3em;
`

const Hidden = styled.p`
  display: inline-block;
  font-size: 1.8em;
  line-height: 1.5em;
  visibility: hidden;
`

const Description = styled.p`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.8em;
  line-height: 1.5em;
`

const TypeMarker = styled.span`
  display: ${(props) => (props.hide ? 'none' : 'inline')};
  position: relative;
  &::before {
    content: '|';
    position: absolute;
    bottom: 0px;
    left: 0px;
    animation: ${(props) =>
      props.blink ? 'blink 0.8s linear infinite' : 'none'};
  }
  @keyframes blink {
    0% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`

const message =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.'

export default function Biography() {
  const [headerIsDone, setHeaderIsDone] = useState(false)

  const reachedBiography = useScrollBreakpoint(() =>
    Math.floor(document.querySelector('.biography').offsetTop / 2)
  )

  const [slowlyTypedHeading, isDoneTypingHeading] = useTypedMessage(
    'Hi there...',
    60,
    reachedBiography
  )

  const [slowlyTypedDescription, isDoneTypingDescription] = useTypedMessage(
    message,
    60,
    reachedBiography && headerIsDone
  )

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
    <Container className="biography">
      <Heading>
        {slowlyTypedHeading}
        <TypeMarker hide={headerIsDone} blink={isDoneTypingHeading} />
      </Heading>
      <TextContainer>
        <Description>
          {slowlyTypedDescription}
          <TypeMarker hide={!headerIsDone} blink={isDoneTypingDescription} />
        </Description>
        <Hidden>{message}</Hidden>
      </TextContainer>
    </Container>
  )
}
