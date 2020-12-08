import React from 'react'
import moment from 'moment'
import Timeline from '../../../../components/Timeline'
import TotalExperience from '../../../../components/TotalExperience/TotalExperience'
import timeLineEntries from './timeLineEntries'
import {
  BiographyContainer,
  TimelineContainer,
  TimeLineHeader,
  Heading,
  TimelineStartLabel
} from './style'

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
