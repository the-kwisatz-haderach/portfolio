import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useElementScrollTop from '../../Hooks/useElementScrollTop'
import Row from './components/Row'
import { TimelineStart, TimelineSticky, Container, Line } from './style'

let reachedFinalRow = false
export default function Timeline({ entries = [] }) {
  const [timelineMarkerClass, setTimelineMarkerClass] = useState(
    'fas fa-baby animate__animated animate__bounce animate__infinite'
  )
  const [stickyRef, reachedStickyRef] = useElementScrollTop(
    1.0,
    '0px 0px -40% 0px'
  )

  useEffect(() => {
    if (!reachedFinalRow && reachedStickyRef) {
      setTimelineMarkerClass('fas fa-baby')
    }
  }, [reachedStickyRef])

  const onReachRow = useCallback(
    rowIndex => {
      if (!reachedFinalRow) {
        if (rowIndex === entries.length - 1) {
          reachedFinalRow = true
        }
        if (rowIndex < entries.length) {
          setTimelineMarkerClass(entries[rowIndex].timelineMarker)
        }
        requestAnimationFrame(() => {
          setImmediate(() => {
            stickyRef.current.classList.add('swell')
          })
        })
      }
    },
    [stickyRef, entries, reachedFinalRow]
  )

  return (
    <>
      <TimelineStart>
        <TimelineSticky ref={stickyRef} className={timelineMarkerClass} />
      </TimelineStart>
      <Container>
        <Line />
        {entries.map((entry, i) => (
          <Row key={i} entry={entry} rowIndex={i} onReachRow={onReachRow} />
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
