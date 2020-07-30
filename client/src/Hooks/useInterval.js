import { useEffect, useCallback } from 'react'

const useInterval = (callback, interval = 0) => {
  const memoizedCallback = useCallback(callback, [callback])

  useEffect(() => {
    const intervalFunction = () => {
      memoizedCallback()
    }

    const intervalId = setInterval(intervalFunction, interval)
    return () => clearInterval(intervalId)
  }, [interval])
}

export default useInterval
