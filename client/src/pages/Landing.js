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
  /* width: 50%;
  height: 100%; */
  /* transform: translateZ(200px); */
  /* background-image: url('https://www.hipsthetic.com/wp-content/uploads/2017/12/timber-wall-texture-pattern.jpeg'); */
  background-size: contain;
  backface-visibility: hidden;
  background-repeat: repeat;
  animation-timing-function: cubic-bezier(0.85, 0.32, 0.43, 0.32);
  animation-iteration-count: infinite;
  animation-duration: 4s;
`

// @keyframes swingLeft {
//   from {
//     transform: rotateY(0);
//   }
//   to {
//     transform: rotateY(120deg);
//   }
// }

const DoorContainer = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-50px);
`

const DoorFrontBack = styled(Door)`
  width: 300px;
  height: 200px;
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
  width: 300px;
  height: 100px;
  top: 50px;
`

const DoorBottom = styled(DoorTopBottom)`
  transform: rotateX(-90deg) translateZ(100px);
  background-color: blue;
`

const DoorTop = styled(DoorTopBottom)`
  transform: rotateX( 90deg) translateZ(100px);
  background-color: green;
`

const DoorLeftRight = styled(Door)`
  width: 100px;
  height: 200px;
  left: 100px;
`

const DoorLeft = styled(DoorLeftRight)`
  transform: rotateY(-90deg) translateZ(150px);
  background-color: purple;
`

const DoorRight = styled(DoorLeftRight)`
  transform: rotateY( 90deg) translateZ(150px);
  background-color: cyan;
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
