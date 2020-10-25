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
  margin-bottom: 3em;
  @media only screen and (min-width: 768px) {
    margin-bottom: 6em;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 8em;
  }
`

const Heading = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 2em;
  @media only screen and (min-width: 768px) {
    font-size: 3em;
  }
`

const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const TimeUnitContainer = styled.div`
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

const Number = styled.p`
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

const TimeLabel = styled.p`
  width: 100%;
  font-size: 1.2em;
  text-align: left;
  @media only screen and (min-width: 1024px) {
    text-align: initial;
  }
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
