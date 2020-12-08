import styled from 'styled-components'

const DateMarker = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media only screen and (min-width: 1024px) {
    clip-path: polygon(50% 100%, 100% 50%, 50% 0%, 0% 50%, 50% 100%);
    width: 100px;
    height: 100px;
  }
`

export default DateMarker
