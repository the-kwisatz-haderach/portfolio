import React from 'react'
import PropTypes from 'prop-types'
import getAnimationClassname from '../../../../utils/getAnimationClassname'
import { Container, Icon, Name } from './style'

function Skill({ skill, animationDelayFactor, animate }) {
  return (
    <Container
      animationDelayFactor={animationDelayFactor}
      className={getAnimationClassname('fadeIn', animate)}
    >
      <Icon className={skill.icon} />
      <Name>{skill.label}</Name>
    </Container>
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
