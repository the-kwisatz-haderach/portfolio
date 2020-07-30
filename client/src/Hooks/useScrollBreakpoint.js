import { useEffect, useCallback, useState } from 'react'
import { throttle } from 'lodash'

const defaultOptions = {
  onReachBreakpoint: null,
  throttleTime: 200,
  removeListenerOnReach: false,
  reset: false
}

const useScrollBreakpoint = (
  breakpoint = 0,
  options = defaultOptions,
  element = document
) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState(null)
  const [reachedBreakpoint, setReachedBreakpoint] = useState(false)

  useEffect(() => {
    setActiveBreakpoint(
      typeof breakpoint === 'function' ? breakpoint() : breakpoint
    )
  }, [breakpoint])

  const checkBreakpoint = useCallback(
    throttle(
      e => {
        if (window.scrollY >= activeBreakpoint) {
          if (options.removeListenerOnReach) {
            window.removeEventListener('scroll', checkBreakpoint)
          }
          !reachedBreakpoint && setReachedBreakpoint(true)
          options.onReachBreakpoint && options.onReachBreakpoint(e)
        }
        if (options.reset && window.scrollY < activeBreakpoint) {
          setReachedBreakpoint(false)
        }
      },
      options.throttleTime >= 50 ? options.throttleTime : 200
    ),
    [activeBreakpoint, reachedBreakpoint]
  )

  useEffect(() => {
    window.addEventListener('scroll', checkBreakpoint)
    return () => {
      window.removeEventListener('scroll', checkBreakpoint)
    }
  }, [activeBreakpoint])

  return reachedBreakpoint
}

export default useScrollBreakpoint
