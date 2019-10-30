import React, { useEffect } from 'react'
import freezeScroll from '../../utils/DOM-manipulation/freezeScroll'
import { Container } from './Styles'
import '../../assets/images/black-texture.png'
import SmokeContainer from '../SmokeContainer'
import useLink from '../../Hooks/useLink'
import Login from '../Login'
import Light from '../Light'

const Welcome = () => {
  const $doorIsOpened = useLink(false)

  useEffect(freezeScroll, [])

  return (
    <Container>
      <Light />
      <SmokeContainer doorIsOpened={$doorIsOpened.value} />
    </Container>
  )
}
{/* <Container>
  {$doorIsOpened.value
    ? <SmokeContainer doorIsOpened={$doorIsOpened.value} />
    : <Login handleDoorOpen={() => $doorIsOpened.set(true)} />
  }
</Container> */}

export default Welcome
