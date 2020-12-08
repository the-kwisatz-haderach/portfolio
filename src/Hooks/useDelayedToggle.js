const useDelayedToggle = (booleanStateSetter, delay) => {
  clearTimeout(warningTimeout)
  booleanStateSetter(true)
  const warningTimeout = setTimeout(() => {
    booleanStateSetter(false)
  }, delay || 3000)
}

export default useDelayedToggle
