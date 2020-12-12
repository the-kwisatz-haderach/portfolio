import React, { forwardRef } from 'react'
import Toggle from '../../../../Components/Toggle/Toggle'
import TypedText from '../../../../Components/TypedText'
import {
  Container,
  TextWrapper,
  DescriptionContainer,
  HeadingContainer,
  DarkModeContainerSelector,
  DarkModeLabel
} from './style'

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
          <HeadingContainer>
            <TypedText
              as="h1"
              className="page-title"
              active={canHeaderStart}
              onCompleteTyping={onCompleteTypingHeading}
              markerActive={!headerIsDone}
            >
              {heading}
            </TypedText>
          </HeadingContainer>
          <DescriptionContainer>
            <TypedText
              className="page-description"
              active={headerIsDone}
              markerActive={headerIsDone}
            >
              {description}
            </TypedText>
          </DescriptionContainer>
          <DarkModeContainerSelector>
            <Toggle icon="fas fa-moon" onClick={onSetTheme} />
            <DarkModeLabel>Toggle dark mode</DarkModeLabel>
          </DarkModeContainerSelector>
        </TextWrapper>
      </Container>
    )
  }
)

PageHeader.displayName = 'PageHeader'

export default React.memo(PageHeader)
