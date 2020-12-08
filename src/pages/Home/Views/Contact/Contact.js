import React from 'react'
import ClickableBlock from './ClickableBlock'
import { ContentContainer } from './style'

function Contact() {
  return (
    <ContentContainer>
      <ClickableBlock
        label="LinkedIn"
        external
        url="https://www.linkedin.com/in/gustaf-lundstr%C3%B6m/"
        icon="fab fa-linkedin-in"
      />
      <ClickableBlock
        label="Email"
        url="mailto:gustaf.lundstrom90@gmail.com"
        icon="fas fa-envelope"
      />
    </ContentContainer>
  )
}

export default Contact
