import React from 'react'
import styled from 'styled-components'
import Flippable from '../../../components/Flippable'
import reactLogo from '../../../assets/images/react-logo.png'
import nodeJsLogo from '../../../assets/images/nodejs-logo.png'

const Wrapper = styled.section`
  min-height: 500px;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 60px ${(props) => props.theme.padding.horizontal};
`

const ContentContainer = styled.div`
  width: 100%;
`

const Heading = styled.h2``

const Subtitle = styled.p`
  font-size: 1.4em;
  margin-bottom: 42px;
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const TechnologyLogo = styled.img`
  width: 100%;
`

const TechnologyTitle = styled.h4`
  font-size: 1.4em;
  margin: 0.4em;
`

const StyledDiv = styled.div`
  text-align: center;
  margin-right: 3em;
  &:last-child {
    margin-right: 0px;
  }
`

export default function Technologies() {
  return (
    <Wrapper>
      <ContentContainer>
        <Heading>Technologies</Heading>
        <Subtitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          repudiandae.
        </Subtitle>
        <LogoContainer>
          <StyledDiv>
            <TechnologyTitle>React</TechnologyTitle>
            <Flippable
              flip
              iterations="1"
              front={<TechnologyLogo src={reactLogo} />}
              back={<TechnologyLogo src={reactLogo} />}
            />
          </StyledDiv>
          <StyledDiv>
            <TechnologyTitle>NodeJS</TechnologyTitle>
            <Flippable
              flip
              backgroundColor="#000000db"
              iterations="1"
              borderRadius="15%"
              front={
                <TechnologyLogo style={{ width: '80%' }} src={nodeJsLogo} />
              }
              back={
                <TechnologyLogo style={{ width: '80%' }} src={nodeJsLogo} />
              }
            />
          </StyledDiv>
        </LogoContainer>
      </ContentContainer>
    </Wrapper>
  )
}
