import React, { useState } from 'react'
import styled from 'styled-components'
import { greenishBlue } from '../styles/variables'

const StyledForm = styled.form`
  font-size: 34px;
  font-family: 'calculator', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
`

const StyledInput = styled.input`
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
`

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 34px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  border: none;
  color: white;
  background-image: linear-gradient(95deg, #053317, #2baf4dab);
`

const LoginForm = () => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        size={9}
        maxLength="5"
        placeholder="Pass"
      />
      <SubmitButton type="submit">Enter</SubmitButton>
    </StyledForm>
  )
}

export default LoginForm
