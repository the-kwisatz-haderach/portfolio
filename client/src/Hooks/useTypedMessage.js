import { useState, useEffect, useRef } from 'react'

const useTypedMessage = (message = '', interval = 100, startTyping = true) => {
  const [typedMessage, setTypedMessage] = useState('')
  const originalMessage = useRef(message)
  const messageIndex = useRef(0)
  const characters = [...originalMessage.current]

  useEffect(() => {
    let addIncrementally
    if (startTyping) {
      addIncrementally = setInterval(() => {
        if (messageIndex.current < characters.length) {
          setTypedMessage(
            (currentMessage) =>
              currentMessage + characters[messageIndex.current]
          )
          messageIndex.current += 1
        }
        if (messageIndex.current >= characters.length) {
          clearInterval(addIncrementally)
        }
      }, interval)
    }

    return () => {
      messageIndex.current = 0
      originalMessage.current = message
      clearInterval(addIncrementally)
    }
  }, [message, startTyping])

  return typedMessage
}

export default useTypedMessage
