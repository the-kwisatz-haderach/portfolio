import React from 'react'
import styled from 'styled-components'

const Scene = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  perspective: 600px;
  z-index: 10;
`

const CubeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(-100px);
  transform-style: preserve-3d;
  transition: transform 2s linear;
  /* animation: rotate3dCube 3s linear infinite forwards; */
  @keyframes rotate3dCube {
    to {
      transform: translateZ(-100px) rotateX(360deg) rotateZ(360deg);
    }
  }
`

const CubeFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 4px solid grey;
  background-image: url('assets/images/black-texture.png');
`

const FrontFace = styled(CubeFace)`
  transform: rotateY(0deg) translateZ(100px);
`

const BackFace = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(100px);
`

const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
`

const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
`

const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
`

const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
`

function Cube () {
  return (
    <Scene>
      <CubeContainer>
        <FrontFace>Front</FrontFace>
        <BackFace>Back</BackFace>
        <RightFace>Right</RightFace>
        <LeftFace>Left</LeftFace>
        <TopFace>Top</TopFace>
        <BottomFace>Bottom</BottomFace>
      </CubeContainer>
    </Scene>
  )
}

export default Cube
