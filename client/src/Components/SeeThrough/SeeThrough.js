import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useThrottled from '../../Hooks/useThrottled'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const TopLayer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
`

const BottomLayer = styled.div`
  width: 100%;
  cursor: none;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  clip-path: ellipse(0px 0px);
  background-color: black;
`

function SeeThrough({ topLayerStyle, bottomLayerStyle, children, ...props }) {
  const containerRef = useRef()

  const onMouseMove = useThrottled(e => {
    const xCoord = e.pageX
    const yCoord = e.pageY
    requestAnimationFrame(() => {
      const bottomLayerDiv = containerRef.current.children[1]
      bottomLayerDiv.style.clipPath = `ellipse(75px 75px at ${xCoord}px ${yCoord}px)`
    })
  }, 30)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      containerRef.current.removeEventListener('mousemove', onMouseMove)
    }
  }, [containerRef])

  return (
    <Container ref={containerRef} {...props}>
      <TopLayer style={{ ...topLayerStyle }}>{children}</TopLayer>
      <BottomLayer style={{ ...bottomLayerStyle }}>{children}</BottomLayer>
    </Container>
  )
}

SeeThrough.propTypes = {
  children: PropTypes.node,
  topLayerStyle: PropTypes.object,
  bottomLayerStyle: PropTypes.object
}

export default SeeThrough
