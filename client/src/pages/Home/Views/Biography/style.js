import styled from 'styled-components'

export const BiographyContainer = styled.div`
  width: 100%;
  background-color: white;
`

export const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 8em;
`

export const Heading = styled.h2`
  margin: 0.5em;
  font-size: 4em;
`

export const TimeLineHeader = styled.header`
  text-align: center;
  padding: ${props => props.theme.padding.horizontal.medium};
  margin: 4em;
`

export const TimelineStartLabel = styled.p`
  display: inline-block;
  font-size: 1.2em;
`
