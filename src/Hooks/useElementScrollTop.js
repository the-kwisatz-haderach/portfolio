import { useRef, useEffect, useState } from 'react'

const defaultOptions = {
  stopOnReach: true
}

const useElementScrollTop = (
  percentVisible = 0.5,
  rootMargin = '0px',
  options = defaultOptions
) => {
  const [hasReached, setHasReached] = useState(false)
  const ref = useRef(null)

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        let prevRatio = 0
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            return setHasReached(true)
          }
          if (entry.intersectionRatio > prevRatio) {
            return setHasReached(false)
          }
          prevRatio = entry.intersectionRatio
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
    if (ref.current) {
      observer.current.observe(ref.current)
    }
    return () => {
      observer.current.disconnect()
    }
  }, [ref])

  return [ref, hasReached]
}

export default useElementScrollTop
