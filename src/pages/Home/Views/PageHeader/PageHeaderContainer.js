import React, { useState, useEffect } from 'react'
import useTypedMessage from '../../../../Hooks/useTypedMessage'
import useElementScrollTop from '../../../../Hooks/useElementScrollTop'
import useLocalStorage from '../../../../Hooks/useLocalStorage'
import PageHeader from './PageHeader'

const description = isReturnVisit => {
  if (isReturnVisit) {
    return "Looks like you've been here before."
  }
  return "You found my personal website! That means Google's probably having a bad day. Or you're actually looking for information about me. In that case, you'll find some of that further down."
}

export default function PageHeaderContainer() {
  const [headerRef, headerIsVisible] = useElementScrollTop()
  const [canHeaderStart, setCanHeaderStart] = useState(false)
  const [headerIsDone, setHeaderIsDone] = useState(false)
  const [visits] = useLocalStorage('visits')

  const heading = +visits > 0 ? 'Welcome Back.' : 'Welcome.'

  const [slowlyTypedHeading, isDoneTypingHeading] = useTypedMessage(
    heading,
    70,
    canHeaderStart
  )

  const [slowlyTypedDescription, isDoneTypingDescription] = useTypedMessage(
    description(+visits > 0),
    60,
    headerIsDone
  )

  useEffect(() => {
    let timer
    if (headerIsVisible) {
      timer = setTimeout(() => {
        setCanHeaderStart(true)
      }, 1500)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [headerIsVisible])

  useEffect(() => {
    let timer
    if (isDoneTypingHeading) {
      timer = setTimeout(() => {
        setHeaderIsDone(true)
      }, 2000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isDoneTypingHeading])

  return (
    <PageHeader
      ref={headerRef}
      heading={heading}
      slowlyTypedHeading={slowlyTypedHeading}
      isDoneTypingHeading={isDoneTypingHeading}
      description={description()}
      slowlyTypedDescription={slowlyTypedDescription}
      isDoneTypingDescription={isDoneTypingDescription}
      headerIsDone={headerIsDone}
      canHeaderStart={canHeaderStart}
    />
  )
}
