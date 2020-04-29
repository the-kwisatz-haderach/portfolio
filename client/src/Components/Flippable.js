import React from 'react'
import styled from 'styled-components'

const Scene = styled.div`
  margin: auto;
  width: 350px;
  height: 350px;
  perspective: 1400px;
`

const Flip = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  animation: spin 1.2s 1s cubic-bezier(0.5, 0.2, 0.4, 0.9);
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`

const Surface = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
`

const SurfaceFront = styled(Surface)`
  transform: rotateY(0deg);
`

const SurfaceBack = styled(Surface)`
  background-color: black;
  transform: rotateY(180deg);
`

export default function Flippable() {
  return (
    <Scene>
      <Flip>
        <SurfaceFront />
        <SurfaceBack />
      </Flip>
    </Scene>
  )
}
