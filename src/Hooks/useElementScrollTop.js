import { useRef, useEffect, useState } from 'react'

const defaultOptions = {
  stopOnReach: true
}

const useElementScrollTop = (
  percentVisible = 0.5,
  rootMargin = '0px',
  options = defaultOptions
) => {
  const [hasReached, setHasReached] = useState(
    window.screen.width <= 1024 || false
  )
  const ref = useRef(null)

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        let prevRatio = 0
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setHasReached(true)
          } else if (entry.intersectionRatio > prevRatio) {
            setHasReached(false)
          } else {
            prevRatio = entry.intersectionRatio
          }
        })
      },
      {
        threshold: percentVisible,
        rootMargin
      }
    )
  )

  useEffect(() => {
    if (hasReached & options.stopOnReach) {
      observer.current.disconnect()
    }
  }, [hasReached])

  useEffect(() => {
    if (!hasReached && ref.current) {
      observer.current.observe(ref.current)
    }
    return () => {
      observer.current.disconnect()
    }
  }, [ref, hasReached])

  return [ref, hasReached]
}

export default useElementScrollTop
