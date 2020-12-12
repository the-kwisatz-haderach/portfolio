import React, { forwardRef } from 'react'
import Toggle from '../../../../Components/Toggle/Toggle'
import TypedText from '../../../../Components/TypedText'
import { Container, TextWrapper } from './style'

const PageHeader = forwardRef(
  (
    {
      heading,
      description,
      headerIsDone,
      canHeaderStart,
      onCompleteTypingHeading,
      onSetTheme
    },
    headerRef
  ) => {
    return (
      <Container ref={headerRef}>
        <TextWrapper>
          <TypedText
            as="h1"
            className="page-title"
            active={canHeaderStart}
            onCompleteTyping={onCompleteTypingHeading}
            markerActive={!headerIsDone}
          >
            {heading}
          </TypedText>
          <TypedText
            className="page-description"
            active={headerIsDone}
            markerActive={headerIsDone}
          >
            {description}
          </TypedText>
          <Toggle icon="fas fa-moon" onClick={onSetTheme} />
        </TextWrapper>
      </Container>
    )
  }
)

PageHeader.displayName = 'PageHeader'

export default React.memo(PageHeader)
