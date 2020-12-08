import React from 'react'
import Button from '../Button'
import { ButtonContainer, StyledIcon, StyledP } from './style'

const MenuTrigger = ({ hide, active, onClick }) => {
  const animation = ['animate__animated', 'animate__headShake']

  const addAnimation = e => {
    e.persist()
    setTimeout(() => {
      if (e.target.children[0]) {
        e.target.children[0].classList.remove(animation[0], animation[1])
      }
    }, 500)
    requestAnimationFrame(() => {
      if (e.target.children[0]) {
        e.target.children[0].classList.add(animation[0], animation[1])
      }
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

export default MenuTrigger
