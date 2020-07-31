import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import useInterval from '../../Hooks/useInterval'
import { pulseOpacity } from '../../styles/keyframes'

const Container = styled.div`
  padding: ${props => props.theme.padding.horizontal.high};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.colors.black};
  color: white;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
`

const Heading = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 2.5em;
`

const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TimeUnitContainer = styled.div`
  padding: 1.5em 2em;
  flex-direction: column;
  width: 100%;
  align-items: center;
  display: ${props => (props.hide ? 'none' : 'flex')};
  position: relative;
  &:not(:last-child) {
    &::before {
      content: '';
      border-right: 2px solid #1d1d1d;
      opacity: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: ${pulseOpacity} 2s ease-in-out infinite;
    }
  }
`

const Number = styled.p`
  font-size: 3.5em;
  width: 100%;
  font-family: 'calculator', sans-serif;
  line-height: 1;
`

const TimeLabel = styled.p`
  width: 100%;
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
