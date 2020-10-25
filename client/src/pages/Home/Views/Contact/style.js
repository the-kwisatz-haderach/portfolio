import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    flex-flow: row nowrap;
  }
`

export const StyledIcon = styled.i`
  font-size: 3em;
  margin-bottom: 0.4em;
  @media only screen and (min-width: 768px) {
    font-size: 4em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 5em;
  }
`

export const Block = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
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

export const Clickable = styled.a`
  display: block;
  height: 50vh;
  width: 40vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  @media only screen and (min-width: 1200px) {
    height: 30vh;
    width: 30vh;
  }
`

export const LabelContainer = styled.div`
  position: relative;
  font-size: 2em;
  &::before {
    content: '\f054';
    font-family: 'Font Awesome 5 Free';
    font-weight: 600;
    position: absolute;
    top: 5px;
    right: -30px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    animation: shift 0.5s ease-in-out infinite alternate-reverse;
    opacity: 1;
  }
  @keyframes shift {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 2.5em;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 3em;
    &::before {
      animation: none;
      opacity: 0;
      ${Clickable}:hover & {
        animation: shift 0.5s ease-in-out infinite alternate-reverse;
        opacity: 1;
      }
    }
  }
`

export const StyledLabel = styled.h3`
  margin: 0;
  transition: transform 0.2s ease-in-out;
  ${Clickable}:hover & {
    transform: translateX(-20px);
  }
`
