import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../../components/HeroImage'
import bearImg from '../../../assets/images/bear.jpg'

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

const message =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.'

export default function PageHeader() {
  return (
    <Container>
      <HeroImage image={bearImg} title="Hi. Welcome." description={message} />
    </Container>
  )
}
