import React from 'react'
import styled from 'styled-components'
import useTypedMessage from '../../../Hooks/useTypedMessage'

const Container = styled.div`
  width: 100%;
  padding-left: ${(props) => props.theme.padding.horizontal}px;
  padding-right: ${(props) => props.theme.padding.horizontal}px;
  min-height: 450px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.primary};
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

export default function Biography() {
  const message =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.'
  const presentationalText = useTypedMessage(message, 60)

  return (
    <Container>
      <Heading>Hi there...</Heading>
      <TextContainer>
        <Description>{presentationalText}</Description>
        <Hidden>{message}</Hidden>
      </TextContainer>
    </Container>
  )
}
