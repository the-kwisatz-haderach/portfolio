import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

const useIsVisible = (elementSelector) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const midTarget = Math.floor(
      document.querySelector(elementSelector).offsetTop / 2
    )
    const handleScroll = throttle(() => {
      if (window.scrollY > midTarget) {
        window.removeEventListener('scroll', handleScroll)
        setIsVisible(true)
      }
    }, 200)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isVisible
}

export default useIsVisible
