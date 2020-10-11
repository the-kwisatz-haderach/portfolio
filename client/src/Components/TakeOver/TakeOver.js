import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  clip-path: inset(0% 100% 0% 0%);
  transition: clip-path 0.3s ease-in-out;
`

const getInset = index => {
  const direction = [0, 0, 0, 0]
  direction[index % 4] = 100
  return direction.join('% ') + '%'
}

function TakeOver({ trigger, children, open = false }) {
  const menuRef = useRef()
  const direction = useRef(0)

  useEffect(() => {
    if (menuRef.current) {
      requestAnimationFrame(() => {
        if (open) {
          menuRef.current.style.clipPath = 'inset(0% 0% 0% 0%)'
        } else {
          menuRef.current.style.clipPath = `inset(${getInset(
            direction.current
          )})`
          direction.current += 1
        }
      })
    }
  }, [open, menuRef])

  return (
    <>
      <Container ref={menuRef}>{children}</Container>
      {trigger}
    </>
  )
}

TakeOver.propTypes = {
  trigger: PropTypes.node,
  open: PropTypes.bool,
  children: PropTypes.node,
  hideTrigger: PropTypes.bool
}

export default TakeOver
