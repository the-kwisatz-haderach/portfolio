import styled from 'styled-components'
import portrait from '../../../../assets/images/portrait.jpg'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: url(${portrait});
    background-position: center;
    background-size: cover;
    filter: ${props => (props.theme.isDark ? 'grayscale(1)' : '')};
  }
  &::after {
    content: '';
    position: absolute;
    top: 12%;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, black 0%, transparent);
  }
  @media screen and (min-width: 1024px) {
    &::before {
      left: 20%;
      height: 100%;
    }
    &::after {
      top: 0%;
      left: -20%;
      background: linear-gradient(90deg, black 50%, transparent);
    }
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  height: 40%;
  padding: 2em;
  z-index: 1;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  clip-path: inset(0% 0%);
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    padding: 3em;
  }
  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 45%;
    padding: 4em;
    clip-path: inset(0% 0%);
  }
`

export const HeadingContainer = styled.div`
  margin-bottom: 0.8em;
  &&& > * {
    font-size: 1em;
    @media screen and (min-width: 500px) {
      font-size: 1.7em;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2em;
    }
    @media screen and (min-width: 1400px) {
      font-size: 3em;
    }
  }
`

export const DescriptionContainer = styled.div`
  margin-bottom: 1.5em;
  &&& > * {
    font-size: 0.8em;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 3em;
    font-size: 1.8em;
  }
`

export const DarkModeContainerSelector = styled.div`
  display: flex;
  align-items: center;
`

export const DarkModeLabel = styled.p`
  margin-left: 1.5em;
  font-size: 1em;
  font-weight: 600;
  @media screen and (min-width: 425px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5em;
  }
`
