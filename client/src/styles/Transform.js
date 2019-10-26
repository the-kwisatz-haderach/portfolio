import styled from 'styled-components'

export const Rotate = styled.div`
  transform: rotate(${(props) => props.angle || '0'}deg);
`

export const Translate = styled.div`
  transform: translateX(${(props) => props.x || '0'}, ${(props) => props.y || '0'});
`
