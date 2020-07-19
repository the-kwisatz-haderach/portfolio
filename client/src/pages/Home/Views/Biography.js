import React from 'react'
import styled from 'styled-components'
import Timeline from '../../../components/Timeline'

const BiographyContainer = styled.div`
  width: 100%;
  padding: 50px;
  background-color: white;
`

const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const Heading = styled.h2`
  margin-top: 0.5em;
`

const testEntries = [
  {
    title: 'Software Developer',
    subtitle: 'Systecon Group',
    fromDate: new Date(),
    location: 'Stockholm, Sweden'
  },
  {
    title: 'Software Developer',
    subtitle: 'Systecon Group',
    fromDate: new Date(),
    location: 'Stockholm, Sweden'
  },
  {
    title: 'Software Developer',
    subtitle: 'Systecon Group',
    fromDate: new Date(),
    location: 'Stockholm, Sweden'
  }
]

export default function Biography() {
  return (
    <BiographyContainer>
      <Heading>Experience</Heading>
      <TimelineContainer>
        <Timeline entries={testEntries} />
      </TimelineContainer>
    </BiographyContainer>
  )
}
