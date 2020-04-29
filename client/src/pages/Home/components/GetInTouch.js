import React from 'react'
import styled from 'styled-components'
import useScrollBreakpoint from '../../../Hooks/useScrollBreakpoint'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 60px ${({ theme }) => theme.padding.horizontal}px;
  min-height: 500px;
`

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  transition: transform 0.4s ease-in-out;
  transform: ${({ transition }) =>
    transition ? 'translateX(0)' : 'translateX(-100vw)'};
`

const Heading = styled.h2`
  font-size: 5em;
`

export default function GetInTouch() {
  const reachedBreakpoint = useScrollBreakpoint(
    () => {
      const element = document.querySelector('.get-in-touch')
      return element.offsetTop - Math.floor(element.clientHeight / 2)
    },
    { reset: true }
  )
  return (
    <Wrapper className="get-in-touch">
      <TextContainer transition={reachedBreakpoint}>
        <Heading>That&apos;s it!</Heading>
      </TextContainer>
    </Wrapper>
  )
}
