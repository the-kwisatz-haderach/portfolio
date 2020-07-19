import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-image: radial-gradient(transparent 30%, black),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  color: white;
`
