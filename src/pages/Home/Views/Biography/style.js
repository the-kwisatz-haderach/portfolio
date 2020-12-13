import styled from 'styled-components'

export const BiographyContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.foundation};
  color: ${props => props.theme.colors.text};
`

export const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 1024px) {
    margin-bottom: 4em;
  }
`

export const Heading = styled.h2`
  margin: 0.2em;
  font-size: 2.5em;
  @media screen and (min-width: 768px) {
    font-size: 4em;
  }
`

export const TimeLineHeader = styled.header`
  text-align: center;
  margin-top: 3em;
  margin-bottom: 2em;
  @media screen and (min-width: 768px) {
    margin-bottom: 4em;
    padding: 3em;
  }
`

export const TimelineStartLabel = styled.p`
  display: inline-block;
  font-size: 1em;
  @media screen and (min-width: 768px) {
    font-size: 1.2em;
  }
`
