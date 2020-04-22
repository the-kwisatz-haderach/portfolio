import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Cube from './Cube'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MessageContainer = styled.div`
  width: inherit;
  height: inherit;
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  z-index: 10;
  transition: transform 1.5s ease-in-out;
`

const TopMessageContainer = styled(MessageContainer)`
  transform: translateX(100%);
  clip-path: polygon(100% 0%, 100% 100%, 0% 0%);
`

const BottomMessageContainer = styled(MessageContainer)`
  transform: translateX(-100%);
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
`

function FullscreenPageTransition({ children }) {
  const [isAnimationDone, setIsAnimationDone] = useState(false)
  const topContainer = useRef(null)
  const bottomContainer = useRef(null)

  useEffect(() => {
    if (isAnimationDone) {
      topContainer.current.style.transform = 'translateX(100%)'
      bottomContainer.current.style.transform = 'translateX(-100%)'
    } else {
      topContainer.current.style.transform = 'translateX(0%)'
      bottomContainer.current.style.transform = 'translateX(0%)'
    }
  }, [isAnimationDone])

  setTimeout(() => {
    setIsAnimationDone(true)
  }, 2000)

  return (
    <Container>
      <TopMessageContainer ref={topContainer} />
      <BottomMessageContainer ref={bottomContainer} />
      {children}
    </Container>
  )
}

FullscreenPageTransition.propTypes = {
  children: PropTypes.node,
}

export default FullscreenPageTransition
