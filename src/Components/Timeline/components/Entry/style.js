import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 1.5em;
  background-color: ${props => props.theme.colors.foundation};
  @media only screen and (min-width: 768px) {
    border: 1px solid #0000001f;
    border-radius: 3px;
    box-shadow: 3px 3px 14px 3px #0000000d;
    padding: 2.5em;
  }
`

export const TextContainer = styled.div`
  margin: 0 10px;
  @media only screen and (min-width: 768px) {
    margin: 0 20px;
  }
`
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 4px;
  }
`

export const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  margin-bottom: 0.4em;
  @media only screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`

export const SubTitle = styled.p`
  color: ${props => props.theme.colors.tertiaryFoundation};
  font-size: 0.7em;
  @media only screen and (min-width: 768px) {
    margin-bottom: 1em;
    font-size: 0.9em;
  }
`

export const Header = styled.div`
  display: flex;
`

export const Description = styled.p`
  display: inline-block;
  position: relative;
  font-size: 0.8em;
  margin-top: 1em;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    max-height: 4em;
    font-size: 0.9em;
    text-align: justify;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1em;
  }
`

export const CompanyLink = styled.a`
  color: ${props => props.theme.colors.link};
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: none;
    &::after {
      transform: scaleX(1);
    }
  }
  &::before {
    content: '\f0c1';
    font-weight: 600;
    margin-right: 6px;
    font-family: 'Font Awesome 5 Free';
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 20px;
    width: calc(100% - 20px);
    height: 1px;
    background-color: ${props => props.theme.colors.link};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.15s linear;
  }
`

export const LinkDivider = styled.span`
  display: inline;
  width: 0;
  margin: 0 10px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    opacity: 0.2;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background-color: ${props => props.theme.colors.text};
  }
`

export const Location = styled.span`
  color: ${props => props.theme.colors.text};
  &::before {
    content: '\f3c5';
    font-weight: 600;
    margin-right: 6px;
    font-family: 'Font Awesome 5 Free';
  }
`
