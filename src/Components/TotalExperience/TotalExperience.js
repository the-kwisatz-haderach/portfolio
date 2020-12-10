import React, { useState } from 'react'
import moment from 'moment'
import useInterval from '../../Hooks/useInterval'
import {
  Container,
  Heading,
  DurationContainer,
  TimeUnitContainer,
  Number,
  TimeLabel
} from './style'

const momentOfBirth = moment('1990-01-20')
const createPluralSuffix = number => (number !== 1 ? 's' : '')

function TotalExperience() {
  const [timeSinceBirth, setTimeSinceBirth] = useState(
    moment.duration(moment().diff(momentOfBirth, moment()))
  )

  useInterval(() => {
    setTimeSinceBirth(moment.duration(moment().diff(momentOfBirth, moment())))
  }, 1000)

  const years = timeSinceBirth.years()
  const months = timeSinceBirth.months()
  const weeks = timeSinceBirth.weeks()
  const days = timeSinceBirth.days()
  const hours = timeSinceBirth.hours()
  const minutes = timeSinceBirth.minutes()
  const seconds = timeSinceBirth.seconds()

  return (
    <Container>
      <Heading>Total life experience</Heading>
      <DurationContainer>
        <TimeUnitContainer hide={years === 0}>
          <Number>{years}</Number> <TimeLabel>years</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer hide={months === 0}>
          <Number>{months}</Number>{' '}
          <TimeLabel>month{createPluralSuffix(months)}</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer hide={weeks === 0}>
          <Number>{weeks}</Number>{' '}
          <TimeLabel>week{createPluralSuffix(weeks)}</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer hide={days === 0}>
          <Number>{days}</Number>{' '}
          <TimeLabel>day{createPluralSuffix(days)}</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer hide={hours === 0}>
          <Number>{hours}</Number>{' '}
          <TimeLabel>hour{createPluralSuffix(hours)}</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer hide={minutes === 0}>
          <Number>{minutes}</Number>{' '}
          <TimeLabel>minute{createPluralSuffix(minutes)}</TimeLabel>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <Number>{seconds}</Number>{' '}
          <TimeLabel>second{createPluralSuffix(seconds)}</TimeLabel>
        </TimeUnitContainer>
      </DurationContainer>
    </Container>
  )
}

export default TotalExperience
