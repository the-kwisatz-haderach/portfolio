import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getAnimationClassname from '../../utils/getAnimationClassname'

const SkillContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  animation-delay: ${props => 2 + props.animationDelayFactor * 0.4}s;
  @media only screen and (min-width: 425px) {
    flex-flow: column wrap;
  }
  @media only screen and (min-width: 1024px) {
    text-align: center;
  }
`

const SkillIcon = styled.i`
  font-size: 1.2em;
  margin-right: 0.4em;
  @media only screen and (min-width: 425px) {
    margin-right: 0;
    margin-bottom: 0.2em;
    font-size: 2.2em;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3.2em;
  }
`

const SkillName = styled.p`
  font-weight: 600;
  font-size: 0.6em;
  @media only screen and (min-width: 768px) {
    font-size: 0.9em;
  }
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
