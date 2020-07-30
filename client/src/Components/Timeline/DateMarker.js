import styled from 'styled-components'

const DateMarker = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  clip-path: polygon(50% 100%, 100% 50%, 50% 0%, 0% 50%, 50% 100%);
`

export default DateMarker
