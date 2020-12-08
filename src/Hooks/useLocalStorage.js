import { useState } from 'react'

const useLocalStorage = property => {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem(property)
  )

  const updateLocalStorage = value => {
    localStorage.setItem(property, value)
    setLocalStorageValue(value)
  }

  return [localStorageValue, updateLocalStorage]
}

export default useLocalStorage
