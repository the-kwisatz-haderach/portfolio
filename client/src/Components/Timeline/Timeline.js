import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Entry from './Entry'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`

const Column = styled.div`
  width: calc(50% - 1px);
  display: flex;
  flex-flow: column wrap;
`

const LeftColumn = styled(Column)``

const RightColumn = styled(Column)`
  align-items: flex-end;
`

const Line = styled.div`
  width: 2px;
  background-color: blacK;
`

export default function Timeline({ entries = [] }) {
  return (
    <Container>
      <LeftColumn>
        {entries
          .filter((_, i) => i % 2 === 0)
          .map(entry => (
            <Entry
              key={entry.title}
              title={entry.title}
              subtitle={entry.subtitle}
              location={entry.location}
              date={entry.fromDate}
            />
          ))}
      </LeftColumn>
      <Line />
      <RightColumn>
        {entries
          .filter((_, i) => i % 2 !== 0)
          .map(entry => (
            <Entry
              key={entry.title}
              title={entry.title}
              subtitle={entry.subtitle}
              location={entry.location}
              date={entry.fromDate}
            />
          ))}
      </RightColumn>
    </Container>
  )
}

Timeline.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      fromDate: PropTypes.instanceOf(Date),
      location: PropTypes.string
    })
  )
}
