import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const TextContainer = styled.div`
  padding: 20px;
`

const Title = styled.h4``

const SubTitle = styled.p``

const Location = styled.p``

const DateMarker = styled.div``

const Entry = ({ title, subtitle, location, date }) => (
  <Container>
    <TextContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Location>{location}</Location>
    </TextContainer>
    <DateMarker>{date.getFullYear()}</DateMarker>
  </Container>
)

Entry.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.instanceOf(Date)
}

export default Entry
