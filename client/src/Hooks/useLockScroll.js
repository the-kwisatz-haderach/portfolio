import { useEffect } from 'react'

export default function useLockScroll(condition) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [condition])
}
