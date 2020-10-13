import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Timeline from '../../../components/Timeline'
import TotalExperience from '../../../components/TotalExperience/TotalExperience'
import timeLineEntries from './timeLineEntries'

const BiographyContainer = styled.div`
  width: 100%;
  background-color: white;
`

const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 8em;
`

const Heading = styled.h2`
  margin: 0.5em;
  font-size: 4em;
`

const TimeLineHeader = styled.header`
  text-align: center;
  padding: ${props => props.theme.padding.horizontal.medium};
  margin: 4em;
`

const TimelineStartLabel = styled.p`
  display: inline-block;
  font-size: 1.2em;
`

const timeSinceBirth = moment('1990-01-20').fromNow()

export default function Biography() {
  return (
    <BiographyContainer>
      <TimelineContainer>
        <TimeLineHeader>
          <Heading>Timeline</Heading>
          <TimelineStartLabel>
            It all started less than {timeSinceBirth}
          </TimelineStartLabel>
        </TimeLineHeader>
        <Timeline entries={timeLineEntries} />
      </TimelineContainer>
      <TotalExperience />
    </BiographyContainer>
  )
}
