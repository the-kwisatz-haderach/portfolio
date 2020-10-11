import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultEntry from './Entry'
import useElementScrollTop from '../../Hooks/useElementScrollTop'
import DefaultDateMarker from './DateMarker'
import Skill from './Skill'
import getAnimationClassname from '../../utils/getAnimationClassname'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`

const Line = styled.span`
  width: 4px;
  height: 100%;
  background-color: #0000001f;
  position: absolute;
  top: 0;
  z-index: 1;
  left: calc(50% - 2px);
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: calc(50% - 15px);
    width: 30px;
    height: 5px;
    background-color: #0000001f;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: calc(50% - 15px);
    width: 30px;
    height: 5px;
    background-color: #0000001f;
  }
`

const ConnectingLine = styled.div`
  position: absolute;
  top: calc(50% - 2px);
  right: -50px;
  left: unset;
  z-index: -1;
  height: 50%;
  border-top: 4px solid #0000000d;
  width: 0px;
  transform-origin: right;
`

const SkillsList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const TimelineColumn = styled.div`
  position: relative;
  flex: 1;
  &:nth-child(2) {
    flex: none;
    width: 100px;
    margin: 0 50px;
  }
`

const TimelineRow = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 7em ${props => props.theme.padding.horizontal.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  margin-bottom: 1em;
  &:first-of-type {
    margin-top: 70px;
  }
  &:last-of-type {
    margin-bottom: 70px;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
    background-color: ${props => props.theme.colors.grey};
    & ${ConnectingLine} {
      left: -50px;
      right: unset;
      transform-origin: left;
    }
    & ${TimelineColumn} {
      & img {
        order: 1;
      }
      & * {
        text-align: right;
      }
    }
  }
`

const TimelineStart = styled.div`
  width: 100%;
  text-align: center;
  position: sticky;
  top: 55%;
  z-index: 1;
`

const TimelineSticky = styled.i`
  font-size: 5em;
  position: relative;
  top: 8px;
`

export default function Timeline({
  entries = [],
  DateMarker = DefaultDateMarker,
  Entry = DefaultEntry
}) {
  const [firstRowRef, reachedFirstEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [secondtRowRef, reachedSecondEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [thirdRowRef, reachedThirdEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [stickyRef, reachedStickyRef] = useElementScrollTop(
    1.0,
    '0px 0px -40% 0px'
  )

  const rowRefs = [firstRowRef, secondtRowRef, thirdRowRef]
  const rowRefStatus = [
    reachedFirstEntry,
    reachedSecondEntry,
    reachedThirdEntry
  ]

  const furthestRowReached = rowRefStatus.reduce(
    (furthestIndex, rowStatus, rowIndex) =>
      (furthestIndex = rowStatus ? rowIndex : furthestIndex),
    null
  )

  const timelineMarkerClass =
    furthestRowReached !== null
      ? 'animate__animated ' + entries[furthestRowReached].timelineMarker
      : reachedStickyRef
      ? 'fas fa-baby'
      : 'fas fa-baby animate__animated animate__bounce animate__infinite'

  useEffect(() => {
    if (furthestRowReached !== null) {
      requestAnimationFrame(() => {
        setImmediate(() => {
          stickyRef.current.classList.add('swell')
          stickyRef.current.style.fontSize = '3em'
        })
      })
    }
  }, [timelineMarkerClass])

  return (
    <>
      <TimelineStart>
        <TimelineSticky ref={stickyRef} className={timelineMarkerClass} />
      </TimelineStart>
      <Container>
        <Line />
        {entries.map((entry, i) => (
          <TimelineRow ref={rowRefs[i]} key={i}>
            <TimelineColumn>
              <ConnectingLine className={rowRefStatus[i] && 'widen'} />
              <div
                className={getAnimationClassname(
                  `fadeIn${i % 2 === 0 ? 'Left' : 'Right'}Big`,
                  rowRefStatus[i],
                  { delay: 1 }
                )}
              >
                <Entry
                  title={entry.title}
                  subtitle={entry.subtitle}
                  logo={entry.logo}
                  link={entry.link}
                  description={entry.description}
                  location={entry.location}
                />
              </div>
            </TimelineColumn>
            <TimelineColumn>
              <DateMarker
                className={getAnimationClassname('flipInY', rowRefStatus[i])}
              >
                {entry.date.getFullYear()}
              </DateMarker>
            </TimelineColumn>
            <TimelineColumn>
              <SkillsList>
                {entry.skills.map((skill, j) => (
                  <Skill
                    key={j}
                    skill={skill}
                    animate={rowRefStatus[i]}
                    animationDelayFactor={
                      i % 2 === 0 ? j : entry.skills.length - 1 - j
                    }
                  />
                ))}
              </SkillsList>
            </TimelineColumn>
          </TimelineRow>
        ))}
      </Container>
    </>
  )
}

Timeline.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      logo: PropTypes.node,
      link: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string
    })
  ),
  DateMarker: PropTypes.node,
  Entry: PropTypes.node
}
