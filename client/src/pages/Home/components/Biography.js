import React from 'react'
import styled from 'styled-components'
import profilePhoto from '../../../assets/images/profile_photo.png'

const Container = styled.div`
  width: 100%;
  padding: 80px ${(props) => props.theme.padding.horizontal}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`

const Description = styled.p`
  font-size: 24px;
  color: black;
  margin-right: 50px;
`

const Scene = styled.div`
  width: 800px;
  height: 300px;
  perspective: 1400px;
`

const Flip = styled.div`
  width: 100%;
  height: 100%;
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

const ImageFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`

const ImageBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: black;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

export default function Biography() {
  return (
    <Container>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni
        omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.
      </Description>
      <Scene>
        <Flip>
          <ImageFront src={profilePhoto} />
          <ImageBack />
        </Flip>
      </Scene>
    </Container>
  )
}
