import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 500px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 60px ${(props) => props.theme.padding.horizontal}px;
  /* padding-left: ${(props) => props.theme.padding.horizontal}px;
  padding-right: ${(props) => props.theme.padding.horizontal}px; */
`

const ContentContainer = styled.div`
  width: 100%;
`

const Heading = styled.h2``

export default function Technologies() {
  return (
    <Wrapper>
      <ContentContainer>
        <Heading>Technologies</Heading>
      </ContentContainer>
    </Wrapper>
  )
}
