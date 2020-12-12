import React, { useState, useEffect } from 'react'
import useElementScrollTop from '../../../../Hooks/useElementScrollTop'
import useLocalStorage from '../../../../Hooks/useLocalStorage'
import PageHeader from './PageHeader'
import { useTheme } from '../../../../Contexts/Theme'

const description =
  "This is my personal space. There's currently not much going on here but if you're looking for information about me this is the place. More content is added sporadically."

export default function PageHeaderContainer() {
  const [headerRef, headerIsVisible] = useElementScrollTop()
  const [canHeaderStart, setCanHeaderStart] = useState(false)
  const [headerIsDone, setHeaderIsDone] = useState(false)
  const [visits] = useLocalStorage('visits')
  const [, setStoredTheme] = useLocalStorage('theme')
  const { setTheme, theme } = useTheme()

  const heading = +visits > 0 ? 'Welcome Back.' : 'Welcome.'

  const onCompleteTypingHeading = () => {
    setTimeout(() => {
      setHeaderIsDone(true)
    }, 2000)
  }

  useEffect(() => {
    let timer
    if (headerIsVisible) {
      timer = setTimeout(() => {
        setCanHeaderStart(true)
      }, 1000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [headerIsVisible])

  const onSetTheme = () => {
    if (theme === 'main') {
      setTheme('dark')
      setStoredTheme('dark')
    } else {
      setTheme('main')
      setStoredTheme('main')
    }
  }

  return (
    <PageHeader
      ref={headerRef}
      heading={heading}
      description={description}
      headerIsDone={headerIsDone}
      canHeaderStart={canHeaderStart}
      onSetTheme={onSetTheme}
      onCompleteTypingHeading={onCompleteTypingHeading}
    />
  )
}
