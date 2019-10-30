import React, { useEffect } from 'react'
import freezeScroll from '../../utils/DOM-manipulation/freezeScroll'
import { Container } from './Styles'
import '../../assets/images/black-texture.png'
import SmokeContainer from '../SmokeContainer'
import useLink from '../../Hooks/useLink'
import Login from '../Login'

const Welcome = () => {
  const $doorIsOpened = useLink(false)

  useEffect(freezeScroll, [])

  return (
    <Container>
      {$doorIsOpened.value
        ? <SmokeContainer doorIsOpened={$doorIsOpened.value} />
        : <Login handleDoorOpen={() => $doorIsOpened.set(true)} />
      }
    </Container>
  )
}

export default Welcome
