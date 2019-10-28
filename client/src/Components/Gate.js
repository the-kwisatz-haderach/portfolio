import React from 'react'
import styled from 'styled-components'

const DoorScene = styled.div`
  position: absolute;
  perspective: 1000px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: palegoldenrod;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Door = styled.div`
  position: absolute;
  backface-visibility: hidden;
`

const DoorContainer = styled.div`
  transform: translateZ(-25px) rotateX(0deg);
  width: 100vh;
  height: 50vw;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: top;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-name: swingUp;
  @keyframes swingUp {
    from {
      transform: translateZ(-25px) rotateX(0deg);
    }
    20% {
      transform: translateZ(-50px) rotateX(25deg);
    }
    to {
      transform: translateZ(-100px) rotateX(73deg);
    }
  }
`

const DoorFrontBack = styled(Door)`
  width: 100vw;
  height: 50vh;
`
const DoorFront = styled(DoorFrontBack)`
  transform: rotateY(0deg) translateZ(25px);
  background-color: red;
`

const DoorBack = styled(DoorFrontBack)`
  transform: rotateY(180deg) translateZ(25px);
  background-color: yellow;
`

const DoorTopBottom = styled(Door)`
  width: 100vw;
  height: 50px;
`

const DoorBottom = styled(DoorTopBottom)`
  transform: rotateX(-90deg) translateZ(-25px);
  background-color: blue;
  top: 50vh;
`

const DoorTop = styled(DoorTopBottom)`
  transform: rotateX(90deg) translateZ(50px);
  background-color: green;
  top: 25px;
`

const DoorLeftRight = styled(Door)`
  width: 50px;
  height: 50vh;
`

const DoorLeft = styled(DoorLeftRight)`
  transform: rotateY(-90deg) translateZ(25px);
  background-color: purple;
  left: 100vw;
`

const DoorRight = styled(DoorLeftRight)`
  transform: rotateY(-90deg) translateZ(25px);
  background-color: cyan;
`

const Gate = () => (
  <DoorScene>
    <DoorContainer>
      <DoorTop />
      <DoorLeft />
      <DoorFront />
      <DoorBack />
      <DoorRight />
      <DoorBottom />
    </DoorContainer>
  </DoorScene>
)

export default Gate
