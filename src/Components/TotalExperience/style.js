import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${props => props.theme.padding.horizontal.high};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: white;
  color: black;
  position: relative;
  z-index: 0;
  margin-bottom: 3em;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4em;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 8em;
  }
`

export const Heading = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 2em;
  margin-bottom: 0.5em;
  @media only screen and (min-width: 768px) {
    font-size: 3em;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-flow: row wrap;
  }
`

export const TimeUnitContainer = styled.div`
  width: 100%;
  align-items: flex-end;
  text-align: right;
  display: ${props => (props.hide ? 'none' : 'flex')};
  @media only screen and (min-width: 768px) {
    width: 100px;
    &:not(:last-child) {
      margin-right: 2em;
    }
    align-items: center;
    padding: 1em;
    flex-direction: column;
  }
`

export const Number = styled.p`
  position: relative;
  top: 5px;
  font-size: 3em;
  width: 100%;
  font-family: 'calculator', sans-serif;
  line-height: 1;
  margin-right: 0.5em;
  @media only screen and (min-width: 768px) {
    margin-right: 0;
    font-size: 4em;
    top: 0;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 5em;
  }
`

export const TimeLabel = styled.p`
  width: 100%;
  font-size: 1.2em;
  text-align: left;
  @media only screen and (min-width: 1024px) {
    text-align: initial;
  }
`
