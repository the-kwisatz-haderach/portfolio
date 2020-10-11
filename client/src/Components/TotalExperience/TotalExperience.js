import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import useInterval from '../../Hooks/useInterval'

const Container = styled.div`
  padding: 0 ${props => props.theme.padding.horizontal.high};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: white;
  color: black;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  margin-bottom: 8em;
`

const Heading = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 3em;
`

const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TimeUnitContainer = styled.div`
  padding: 1em;
  width: 100px;
  flex-direction: column;
  align-items: center;
  text-align: right;
  display: ${props => (props.hide ? 'none' : 'flex')};
  &:not(:last-child) {
    margin-right: 2em;
  }
`

const Number = styled.p`
  font-size: 5em;
  width: 100%;
  font-family: 'calculator', sans-serif;
  line-height: 1;
`

const TimeLabel = styled.p`
  width: 100%;
  font-size: 1.2em;
`

const momentOfBirth = moment('1990-01-20')

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

  const createPluralSuffix = number => (number !== 1 ? 's' : '')

  return (
    <Container>
      <Heading>Total life experience</Heading>
      <DurationContainer>
        <TimeUnitContainer hide={years === 0}>
          <Number>{years}</Number>{' '}
          <TimeLabel>year{createPluralSuffix(years)}</TimeLabel>
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
