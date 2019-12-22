import React, { useRef } from 'react'
import styled from 'styled-components'

const Scene = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  perspective: 600px;
  z-index: 10;
`

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(-100px);
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
`

const CarouselFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 4px solid grey;
`

const FrontFace = styled(CarouselFace)`
  transform: rotateY(0deg) translateZ(100px);
`

const BackFace = styled(CarouselFace)`
  transform: rotateY(180deg) translateZ(100px);
`

const RightFace = styled(CarouselFace)`
  transform: rotateY(90deg) translateZ(100px);
`

const LeftFace = styled(CarouselFace)`
  transform: rotateY(-90deg) translateZ(100px);
`

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled.i`
  font-size: 32px;
`

function Carousel3D () {
  const carousel = useRef()
  let degreesRotated = 0

  const rotateLeft = () => {
    degreesRotated += 90
    window.requestAnimationFrame(() => {
      carousel.current.style.transform = `translateZ(-100px) rotateY(${degreesRotated}deg)`
    })
  }

  const rotateRight = () => {
    degreesRotated -= 90
    window.requestAnimationFrame(() => {
      carousel.current.style.transform = `translateZ(-100px) rotateY(${degreesRotated}deg)`
    })
  }

  return (
    <div>
      <button onClick={rotateLeft}>Left</button>
      <button onClick={rotateRight}>Right</button>
      <Scene>
        <CarouselContainer ref={carousel}>
          <FrontFace>
            <IconContainer>
              <StyledIcon className="fab fa-linkedin-in" />
            </IconContainer>
          </FrontFace>
          <BackFace>
            <IconContainer>
              <StyledIcon className="fab fa-github" />
            </IconContainer>
          </BackFace>
          <RightFace>
            <IconContainer>
              <StyledIcon className="fab fa-linkedin-in" />
            </IconContainer>
          </RightFace>
          <LeftFace>
            <IconContainer>
              <StyledIcon className="fab fa-linkedin-in" />
            </IconContainer>
          </LeftFace>
        </CarouselContainer>
      </Scene>
    </div>
  )
}

export default Carousel3D
