import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import stringReplacer from '../utils/stringReplacer'

const StyledForm = styled.form`
  font-size: 34px;
  font-family: 'calculator', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
`

const StyledInput = styled.input`
  transform: translateX(-60px);
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: 1;
  cursor: pointer;
  color: #f1ff85;
  text-transform: inherit;
  letter-spacing: inherit;
  background-color: #828663;
  padding: 10px;
  border: 2px solid #ffffff94;
  border-radius: 2px;
  outline: 3px solid transparent;
  outline-offset: -2px;
  box-shadow: inset 3px 3px 7px 3px #bfd00aa6;
  transition: all 0.3s ease-in-out;
  &:hover, :focus {
    outline: 2px solid #f3ffb4;
    text-shadow: 1px 1px 4px white;
    color: #f1ff85;
    box-shadow: inset 3px 3px 12px 7px #e7ff0085;
  }
  &:focus {
    background-color: #858c45;
  }
  &::placeholder {
    color: #f1ff85;
    text-shadow: 1px 1px 4px white;
  }
  &:disabled {
    transition: none;
    background-color: #4cb167;
    box-shadow: inset 3px 3px 12px 7px #e7ff0085;
    color: white;
    text-shadow: 1px 1px 4px white;
    outline: none;
    cursor: auto;
  }
  @keyframes shiftLeft {
    from {
      transform: translateX(-60px);
    }
    to {
      transform: translateX(-100px);
    }
  }
`

const SubmitButton = styled.button`
  transform: translateX(90px);
  outline: none;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: 1;
  padding: 10px 13px 10px 16px;
  font-size: 18px;
  font-family: Helvetica, arial, sans-serif;
  font-weight: 100;
  height: 50px;
  position: relative;
  bottom: 4px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0 16px 16px 0;
  border: none;
  color: white;
  letter-spacing: 2px;
  background-image: linear-gradient(95deg, #053317, #2baf4dab);
  @keyframes shiftRight {
    from {
      transform: translateX(90px);
    }
    to {
      transform: translateX(170px);
    }
  }
`

const LoginForm = ({ submitHandler }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    submitHandler()
  }

  const handleInput = ({ target }) => {
    target.value = target.value
      .replace(target.value, stringReplacer('admin', target.value))

    if (target.value.length >= target.maxLength) {
      target.disabled = true
      const input = target
      const button = input.previousElementSibling
      const setNewInputPosition = (e) => {
        e.target.style.transform = 'translateX(-100px)'
        e.target.removeEventListener('animationend', setNewInputPosition)
      }
      const setNewButtonPosition = (e) => {
        e.target.style.transform = 'translateX(170px)'
        e.target.removeEventListener('animationend', setNewButtonPosition)
      }
      input.addEventListener('animationend', setNewInputPosition)
      button.addEventListener('animationend', setNewButtonPosition)
      input.style.animationName = 'shiftLeft'
      button.style.animationName = 'shiftRight'
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SubmitButton
        type="submit"
      >
        Unlock
      </SubmitButton>
      <StyledInput
        type="text"
        size={9}
        maxLength="5"
        placeholder="Pass"
        onChange={handleInput}
        autoComplete="off"
      />
    </StyledForm>
  )
}

export default LoginForm
