import styled from 'styled-components'

export const Absolute = styled.div`
  position: absolute;
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};
`

export const Relative = styled.div`
  position: relative;
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};
`
