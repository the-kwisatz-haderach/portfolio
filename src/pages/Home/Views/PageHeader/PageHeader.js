import React, { forwardRef } from 'react'
import {
  Container,
  Heading,
  HiddenHeading,
  Description,
  HiddenDescription,
  DescriptionContainer,
  HeadingContainer,
  TypeMarker,
  TextWrapper
} from './style'

const PageHeader = forwardRef(
  (
    {
      heading,
      slowlyTypedHeading,
      isDoneTypingHeading,
      description,
      slowlyTypedDescription,
      isDoneTypingDescription,
      headerIsDone,
      canHeaderStart
    },
    headerRef
  ) => {
    return (
      <Container ref={headerRef}>
        <TextWrapper className="animate__animated animate__slideInLeft">
          <HeadingContainer>
            <HiddenHeading>{heading}</HiddenHeading>
            <Heading absolute>
              {slowlyTypedHeading}
              <TypeMarker
                hide={headerIsDone || !canHeaderStart}
                blink={!headerIsDone && isDoneTypingHeading}
              />
            </Heading>
          </HeadingContainer>
          <DescriptionContainer>
            <HiddenDescription>{description}</HiddenDescription>
            <Description absolute>
              {slowlyTypedDescription}
              <TypeMarker
                hide={!headerIsDone}
                blink={isDoneTypingDescription}
              />
            </Description>
          </DescriptionContainer>
        </TextWrapper>
      </Container>
    )
  }
)

PageHeader.displayName = 'PageHeader'

export default React.memo(PageHeader)
