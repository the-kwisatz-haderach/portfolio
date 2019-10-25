import React from 'react'
import styled from 'styled-components'

const DoorScene = styled.div`
  position: absolute;
  perspective: 2000px;
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
  width: 50%;
  height: 100%;
  transform: translateZ(200px);
  background-image: url('https://www.hipsthetic.com/wp-content/uploads/2017/12/timber-wall-texture-pattern.jpeg');
  background-size: contain;
  background-repeat: repeat;
`

const DoorFrontLeft = styled(Door)`
  position: absolute;
  backface-visibility: hidden;
  background-color: palegreen;
  transform-origin: left;
  transform: rotateY(120deg);
  animation: swingLeft 4s cubic-bezier(0.85, 0.32, 0.43, 0.32) 1;
  @keyframes swingLeft {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(120deg);
    }
  }
`

const DoorFrontRight = styled(Door)`
  position: absolute;
  left: 50%;
  backface-visibility: hidden;
  background-color: palevioletred;
  transform-origin: right;
  transform: rotateY(-120deg);
  animation: swingRight 4s cubic-bezier(0.85, 0.32, 0.43, 0.32) 1;
  @keyframes swingRight {
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(-120deg);
    }
  }
`

const Landing = () => {
  return (
    <DoorScene>
      <DoorFrontLeft />
      <DoorFrontRight />
    </DoorScene>
  )
}

export default Landing
