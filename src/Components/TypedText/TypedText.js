import React, { useEffect } from 'react'
import useTypedMessage from '../../Hooks/useTypedMessage'
import { Container, Text, Hidden, TypeMarker } from './style'

export default function TypedText({
  children,
  onCompleteTyping = () => {},
  active = true,
  markerActive = true,
  typingInterval = 70,
  as = 'p',
  ...rest
}) {
  const { current, isDone, isTyping } = useTypedMessage(
    children,
    typingInterval,
    active
  )

  useEffect(() => {
    if (isDone) {
      onCompleteTyping()
    }
  }, [isDone])

  return (
    <Container {...rest}>
      <Hidden as={as}>{children}</Hidden>
      {active && (
        <Text as={as}>
          {current}
          <TypeMarker
            active={markerActive}
            blink={markerActive && !isTyping && isDone}
          />
        </Text>
      )}
    </Container>
  )
}
