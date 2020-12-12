import { useEffect, useState } from 'react'

const useLocalStorage = (property, options) => {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem(property)
  )

  useEffect(() => {
    if (!localStorageValue && options?.initialValue) {
      updateLocalStorage(options.initialValue)
    }
  }, [])

  const updateLocalStorage = value => {
    localStorage.setItem(property, value)
    setLocalStorageValue(value)
  }

  return [localStorageValue, updateLocalStorage]
}

export default useLocalStorage
