import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import stringReplacer from '../utils/stringReplacer'
import Screen from '../styles/Screen'
import { pulseOpacity } from '../styles/keyframes'

const StyledInput = styled(Screen)`
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.warning ? 'white' : '#f1ff85'};
  text-transform: inherit;
  outline: none;
  box-shadow: inset 3px 3px 7px 3px #bfd00aa6;
  text-transform: uppercase;
  letter-spacing: 3px;
  background-color: ${props => props.warning ? 'red' : '#828663'};
  pointer-events: ${props => props.warning ? 'none' : 'all'};
  transition: all 0.3s ease-in-out;
  &:hover, :focus {
    outline: none;
    text-shadow: 1px 1px 4px white;
    color: #f1ff85;
    box-shadow: inset 3px 3px 12px 7px #e7ff0085;
  }
  &:focus {
    background-color: #858c45;
  }
  &::placeholder {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${props => props.warning ? 'white' : '#f1ff85'};
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
  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 40px;
  }
`

const Form = styled.form`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    box-shadow: inset 5px 7px 30px 9px #f7ff9af2;
    animation: ${pulseOpacity} 2s ease-in-out infinite 0.5s;
    border-radius: 7px;
  }
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    width: calc(100% - 7px);
    height: calc(100% - 7px);
    border: 14px solid #252525;
    border-radius: 18px;
    box-shadow: 3px 3px 20px 0px black;
  }
`

const LockIcon = styled.i`
  position: absolute;
  right: 0.8em;
  font-size: 24px;
  display: block;
  color: white;
  top: 0.7em;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1400px) {
    top: 0.9em;
  }
`

const defSubmitHandler = () => false
const defPassword = 'password'
const defIsActivated = false
const defIsWarning = false

const LoginForm = ({
  submitHandler = defSubmitHandler,
  password = defPassword,
  isActivated = defIsActivated,
  isWarning = defIsWarning
}) => {
  const handleInput = ({ target }) => {
    target.value = target.value
      .replace(target.value, stringReplacer(password, target.value))

    if (target.value.length >= password.length) {
      target.disabled = true
      submitHandler()
    }
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        as="input"
        type="text"
        maxLength="14"
        placeholder="enter password"
        onChange={handleInput}
        autoComplete="off"
        warning={isWarning}
        autoFocus
      />
      {isActivated
        ? <LockIcon className="fas fa-key" />
        : <></>}
    </Form>
  )
}

LoginForm.propTypes = {
  submitHandler: PropTypes.func,
  password: PropTypes.string,
  isActivated: PropTypes.bool,
  isWarning: PropTypes.bool
}

export default LoginForm
