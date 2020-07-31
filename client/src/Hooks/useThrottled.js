import { useRef } from 'react'
import { throttle } from 'lodash'

const useThrottled = (callback, delay = 50) => {
  return useRef(throttle(callback, delay))
}

export default useThrottled
