import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import stringReplacer from '../utils/stringReplacer'
import Screen from '../styles/Screen'

const StyledInput = styled(Screen)`
  font-size: 34px;
  cursor: pointer;
  color: ${props => props.warning ? 'white' : '#f1ff85'};
  text-transform: inherit;
  border-radius: 1px;
  outline: 3px solid transparent;
  box-shadow: inset 3px 3px 7px 3px #bfd00aa6;
  text-transform: uppercase;
  letter-spacing: 3px;
  background-color: ${props => props.warning ? 'red' : '#828663'};
  pointer-events: ${props => props.warning ? 'none' : 'auto'};
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
`

const LockIcon = styled.i`
  position: absolute;
  right: 23px;
  font-size: 23px;
  color: white;
  bottom: 19px;
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
    <form onSubmit={(e) => e.preventDefault()}>
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
    </form>
  )
}

LoginForm.propTypes = {
  submitHandler: PropTypes.func,
  password: PropTypes.string,
  isActivated: PropTypes.bool,
  isWarning: PropTypes.bool
}

export default LoginForm
