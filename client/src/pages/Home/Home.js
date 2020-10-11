import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PageHeader from './Views/PageHeader'
import Biography from './Views/Biography'
import Contact from './Views/Contact'
import TakeOver from '../../components/TakeOver'
import useElementScrollTop from '../../Hooks/useElementScrollTop'
import Button from '../../components/Button'
import useLockScroll from '../../Hooks/useLockScroll'

const ButtonContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 20px;
  transform: translateY(${props => (props.hide ? -100 : 0)}%);
  transition: transform 0.5s ease-in-out;
`

const StyledIcon = styled.i`
  font-size: 2em;
`

const StyledP = styled.p`
  font-weight: 900;
`

const MenuTrigger = ({ hide, active, onClick }) => {
  const animation = ['animate__animated', 'animate__headShake']

  const addAnimation = e => {
    e.persist()
    e.target.children[0].classList.remove(animation[0], animation[1])
    requestAnimationFrame(() => {
      e.target.children[0].classList.add(animation[0], animation[1])
    })
  }

  return (
    <ButtonContainer hide={hide}>
      <Button
        onMouseEnter={addAnimation}
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
        onClick={onClick}
      >
        {active ? (
          <StyledIcon className="fas fa-times" />
        ) : (
          <StyledP>Contact</StyledP>
        )}
      </Button>
    </ButtonContainer>
  )
}

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactRef, reachedContact] = useElementScrollTop(0.5, '0px', {
    stopOnReach: false
  })
  useLockScroll(isMenuOpen)

  return (
    <div>
      <TakeOver
        open={isMenuOpen}
        trigger={
          <MenuTrigger
            hide={!isMenuOpen && reachedContact}
            active={isMenuOpen}
            onClick={() => setIsMenuOpen(status => !status)}
          />
        }
      >
        <Contact />
      </TakeOver>
      <PageHeader />
      <Biography />
      <div
        style={{
          height: '100%'
        }}
        ref={contactRef}
      >
        <Contact />
      </div>
    </div>
  )
}

export default Home
