import React from 'react'
import {
  Block,
  Clickable,
  StyledIcon,
  LabelContainer,
  StyledLabel
} from './style'

const ClickableBlock = ({ label, url, icon, external = false }) => (
  <Block>
    <Clickable
      href={url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
    >
      <StyledIcon className={icon} />
      <LabelContainer>
        <StyledLabel>{label}</StyledLabel>
      </LabelContainer>
    </Clickable>
  </Block>
)

export default ClickableBlock
