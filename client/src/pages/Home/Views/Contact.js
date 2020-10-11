import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const StyledIcon = styled.i`
  font-size: 5em;
  margin-bottom: 0.4em;
`

const Block = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:first-child {
    color: white;
    background-color: ${props => props.theme.colors.black};
  }
`

const Clickable = styled.a`
  display: block;
  height: 30vh;
  width: 30vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const LabelContainer = styled.div`
  position: relative;
  font-size: 3em;
  &::before {
    content: '\f054';
    font-family: 'Font Awesome 5 Free';
    font-weight: 600;
    position: absolute;
    top: 5px;
    right: -30px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    ${Clickable}:hover & {
      animation: shift 0.5s ease-in-out infinite alternate-reverse;
      opacity: 1;
    }
  }
  @keyframes shift {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`

const StyledLabel = styled.h3`
  margin: 0;
  transition: transform 0.2s ease-in-out;
  ${Clickable}:hover & {
    transform: translateX(-20px);
  }
`

const ClickableBlock = ({ label, url, icon, external = false }) => (
  <Block>
    <Clickable
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
    >
      <StyledIcon className={icon} />
      <LabelContainer>
        <StyledLabel>{label}</StyledLabel>
      </LabelContainer>
    </Clickable>
  </Block>
)

function Contact() {
  return (
    <ContentContainer>
      <ClickableBlock
        label="LinkedIn"
        external
        url="https://www.linkedin.com/in/gustaf-lundstr%C3%B6m/"
        icon="fab fa-linkedin-in"
      />
      <ClickableBlock
        label="Email"
        url="mailto:gustaf.lundstrom90@gmail.com"
        icon="fas fa-envelope"
      />
    </ContentContainer>
  )
}

export default Contact
