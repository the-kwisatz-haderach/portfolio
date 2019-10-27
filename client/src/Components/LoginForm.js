import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
    background-color: #a9b348e6;
  }
  &::placeholder {
    color: #f1ff85;
    text-shadow: 1px 1px 4px white;
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
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: 1;
  padding: 10px 20px;
  font-size: 34px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  border: none;
  color: white;
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

const LoginForm = () => {
  const checkInputLength = (e) => {
    if (e.target.value.length >= e.target.maxLength) {
      const input = document.getElementById('form-input')
      const button = document.getElementById('form-button')
      input.style.translateX = ''
      button.style.translateX = ''
      input.style.animationName = 'shiftLeft'
      button.style.animationName = 'shiftRight'
    }
  }

  return (
    <StyledForm>
      <SubmitButton
        id="form-button"
        type="submit"
      >
        Enter
      </SubmitButton>
      <StyledInput
        id="form-input"
        type="text"
        size={9}
        maxLength="5"
        placeholder="Pass"
        onChange={checkInputLength}
      />
    </StyledForm>
  )
}

export default LoginForm
