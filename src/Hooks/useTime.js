import moment from 'moment'
import { useState } from 'react'
import useInterval from './useInterval'

const useTime = (timeFormat, secondsBetweenUpdates = 1) => {
  const [time, setTime] = useState(moment())

  useInterval(() => {
    setTime(moment())
  }, secondsBetweenUpdates * 1000)

  return time.format(timeFormat)
}

export default useTime
