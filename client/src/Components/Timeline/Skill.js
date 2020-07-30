import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getAnimationClassname from '../../utils/getAnimationClassname'

const SkillContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  animation-delay: ${props => 2 + props.animationDelayFactor * 0.4}s;
`

const SkillIcon = styled.i`
  font-size: 3.2em;
  margin-bottom: 0.2em;
`

const SkillName = styled.p`
  font-weight: 600;
  font-size: 0.9em;
`

function Skill({ skill, animationDelayFactor, animate }) {
  return (
    <SkillContainer
      animationDelayFactor={animationDelayFactor}
      className={getAnimationClassname('fadeIn', animate)}
    >
      <SkillIcon className={skill.icon} />
      <SkillName>{skill.label}</SkillName>
    </SkillContainer>
  )
}

Skill.propTypes = {
  animationDelayFactor: PropTypes.number,
  animate: PropTypes.bool,
  skill: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string
  })
}

export default Skill
