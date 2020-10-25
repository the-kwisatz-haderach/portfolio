import styled from 'styled-components'

export const BiographyContainer = styled.div`
  width: 100%;
  background-color: white;
`

export const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 8em;
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
  margin-bottom: 0.5em;
  @media screen and (min-width: 768px) {
    margin-bottom: 4em;
    padding: ${props => props.theme.padding.horizontal.medium};
  }
`

export const TimelineStartLabel = styled.p`
  display: inline-block;
  font-size: 1em;
  @media screen and (min-width: 768px) {
    font-size: 1.2em;
  }
`
