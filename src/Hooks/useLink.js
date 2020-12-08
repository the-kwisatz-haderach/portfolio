import { useState } from 'react'

const useLink = (initialState = null) => {
  const [value, set] = useState(initialState)
  return {
    value,
    set
  }
}

export default useLink
