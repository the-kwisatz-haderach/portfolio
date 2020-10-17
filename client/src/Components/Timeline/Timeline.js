import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import DefaultEntry from './Entry'
import useElementScrollTop from '../../Hooks/useElementScrollTop'
import DefaultDateMarker from './DateMarker'
import Skill from './Skill'
import getAnimationClassname from '../../utils/getAnimationClassname'
import {
  TimelineColumn,
  TimelineRow,
  TimeLineContent,
  TimelineStart,
  TimelineSticky,
  ConnectingLine,
  Container,
  Line,
  SkillsList
} from './style'

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
  const [fourthRowRef, reachedFourthEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [fifthRowRef, reachedFifthEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [sixthRowRef, reachedSixthEntry] = useElementScrollTop(
    1.0,
    '0px 0px -20% 0px'
  )
  const [stickyRef, reachedStickyRef] = useElementScrollTop(
    1.0,
    '0px 0px -40% 0px'
  )

  const rowRefs = [
    firstRowRef,
    secondtRowRef,
    thirdRowRef,
    fourthRowRef,
    fifthRowRef,
    sixthRowRef
  ]
  const rowRefStatus = [
    reachedFirstEntry,
    reachedSecondEntry,
    reachedThirdEntry,
    reachedFourthEntry,
    reachedFifthEntry,
    reachedSixthEntry
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
          <TimeLineContent key={i}>
            <TimelineRow ref={rowRefs[i]}>
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
                  {entry.date}
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
          </TimeLineContent>
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
