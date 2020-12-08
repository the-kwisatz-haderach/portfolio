import styled from 'styled-components'

const Screen = styled.div`
  padding: 15px;
  background-color: #828663;
  outline-offset: -2px;
  border: 2px solid #ffffff94;
  border-radius: 7px;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: 'calculator', sans-serif;
  text-transform: uppercase;
  &:hover, :focus {
    outline: 2px solid #f3ffb4;
    text-shadow: 1px 1px 4px white;
    color: #f1ff85;
    box-shadow: inset 3px 3px 12px 7px #e7ff0085;
  }
  &:focus {
    background-color: #858c45;
  }
`

export default Screen
