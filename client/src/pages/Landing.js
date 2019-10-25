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
  background-image: url('https://www.hipsthetic.com/wp-content/uploads/2017/12/timber-wall-texture-pattern.jpeg');
  background-size: contain;
  backface-visibility: hidden;
  background-repeat: repeat;
`

const DoorContainer = styled.div`
  padding: 10px;
  width: 50%;
  height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: left;
  transform: rotateY(280deg) translateZ(-50px);
  animation-timing-function: ease-out;
  /* animation-timing-function: cubic-bezier(0.85, 0.32, 0.43, 0.32); */
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-name: swingLeft;
  @keyframes swingLeft {
    from {
      transform: translateZ(-50px) translateX(-10px) rotateY(0deg);
    }
    20% {
      transform: translateZ(-50px) translateX(-10px) rotateY(0deg);
    }
    to {
      transform: translateZ(-220px) translateX(-90px) rotateY(-73deg);
    }
  }
`

const DoorFrontBack = styled(Door)`
  width: 50vw;
  height: calc(100vh - 20px);
`

const DoorFront = styled(DoorFrontBack)`
  transform: rotateY(  0deg) translateZ( 50px);
  background-color: red;
`

const DoorBack = styled(DoorFrontBack)`
  transform: rotateY(180deg) translateZ( 50px);
  background-color: yellow;
`

const DoorTopBottom = styled(Door)`
  width: 50vw;
  height: 100px;
`

const DoorBottom = styled(DoorTopBottom)`
  transform: rotateX(-90deg) translateZ(100px);
  background-color: blue;
  bottom: 60px;
`

const DoorTop = styled(DoorTopBottom)`
  transform: rotateX( 90deg) translateZ(100px);
  background-color: green;
  top: 60px;
`

const DoorLeftRight = styled(Door)`
  width: 100px;
  height: calc(100vh - 20px);
`

const DoorLeft = styled(DoorLeftRight)`
  transform: rotateY(-90deg) translateZ(150px);
  background-color: purple;
  left: 110px;
`

const DoorRight = styled(DoorLeftRight)`
  transform: rotateY( 90deg) translateZ(150px);
  background-color: cyan;
  right: 90px;
`

// const DoorFrontRight = styled(Door)`
//   left: 50%;
//   background-color: palevioletred;
//   transform-origin: right;
//   transform: rotateY(-120deg);
//   animation-name: swingRight;
//   @keyframes swingRight {
//     from {
//       transform: rotateY(0);
//     }
//     to {
//       transform: rotateY(-120deg);
//     }
//   }
// `

const Landing = () => {
  return (
    <DoorScene>
      <DoorContainer>
        <DoorTop />
        <DoorLeft />
        <DoorFront />
        <DoorBack />
        <DoorRight />
        <DoorBottom />
      </DoorContainer>
      {/* <DoorFrontRight /> */}
    </DoorScene>
  )
}

export default Landing
