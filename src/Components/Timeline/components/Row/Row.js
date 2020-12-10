import React, { useEffect } from 'react'
import useElementScrollTop from '../../../../Hooks/useElementScrollTop'
import getAnimationClassname from '../../../../utils/getAnimationClassname'
import Entry from '../Entry'
import Skill from '../Skill'
import {
  DateMarker,
  TimeLineContent,
  TimelineColumn,
  TimelineRow,
  ConnectingLine,
  SkillsList
} from './style'

const Row = ({ entry, rowIndex, onReachRow }) => {
  const [rowRef, reachedRow] = useElementScrollTop(1.0, '0px 0px -20% 0px')

  useEffect(() => {
    if (reachedRow) {
      onReachRow(rowIndex)
    }
  }, [reachedRow])

  return (
    <TimeLineContent>
      <TimelineRow ref={rowRef}>
        <TimelineColumn>
          <ConnectingLine className={reachedRow && 'widen'} />
          <div
            className={getAnimationClassname(
              `fadeIn${rowIndex % 2 === 0 ? 'Left' : 'Right'}Big`,
              reachedRow
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
          <DateMarker className={getAnimationClassname('flipInY', reachedRow)}>
            {entry.date}
          </DateMarker>
        </TimelineColumn>
        <TimelineColumn>
          <SkillsList>
            {entry.skills.map((skill, j) => (
              <Skill
                key={j}
                skill={skill}
                animate={reachedRow}
                animationDelayFactor={
                  rowIndex % 2 === 0 ? j : entry.skills.length - 1 - j
                }
              />
            ))}
          </SkillsList>
        </TimelineColumn>
      </TimelineRow>
    </TimeLineContent>
  )
}

export default React.memo(Row)
