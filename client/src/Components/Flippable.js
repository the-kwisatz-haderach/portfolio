import React from 'react'
import styled from 'styled-components'

const Scene = styled.div`
  margin: auto;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  perspective: 1400px;
`

const Flip = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  animation: ${(props) =>
    props.animate
      ? `spin 1.2s ${props.delay}s cubic-bezier(0.5, 0.2, 0.4, 0.9) ${props.iterations}`
      : 'none'};
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`

const Surface = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`

const SurfaceFront = styled(Surface)`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  transform: rotateY(0deg);
`

const SurfaceBack = styled(Surface)`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  transform: rotateY(180deg);
`

export default function Flippable({
  flip = false,
  onMouseEnter,
  onMouseLeave,
  front,
  back,
  height = 200,
  width = 200,
  iterations = '1',
  delayFlip = '0',
  backgroundColor = 'transparent',
  borderRadius = '0%',
}) {
  return (
    <Scene
      height={height}
      width={width}
      onMouseLeave={(e) => {
        if (onMouseLeave) {
          onMouseLeave(e)
        }
      }}
      onMouseEnter={(e) => {
        if (onMouseEnter) {
          onMouseEnter(e)
        }
      }}
    >
      <Flip
        delay={delayFlip}
        animate={flip}
        height={height}
        width={width}
        iterations={iterations}
      >
        <SurfaceFront
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
        >
          {front}
        </SurfaceFront>
        <SurfaceBack
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
        >
          {back}
        </SurfaceBack>
      </Flip>
    </Scene>
  )
}
