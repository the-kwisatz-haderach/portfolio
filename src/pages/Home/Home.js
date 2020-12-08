import React, { useState } from 'react'
import PageHeader from './Views/PageHeader'
import Biography from './Views/Biography'
import Contact from './Views/Contact'
import TakeOver from '../../components/TakeOver'
import useElementScrollTop from '../../Hooks/useElementScrollTop'
import useLockScroll from '../../Hooks/useLockScroll'
import MenuTrigger from '../../Components/MenuTrigger'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactRef, reachedContact] = useElementScrollTop(0.5, '0px', {
    stopOnReach: false
  })
  useLockScroll(isMenuOpen)

  return (
    <div>
      <TakeOver
        open={isMenuOpen}
        trigger={
          <MenuTrigger
            hide={!isMenuOpen && reachedContact}
            active={isMenuOpen}
            onClick={() => setIsMenuOpen(status => !status)}
          />
        }
      >
        <Contact />
      </TakeOver>
      <PageHeader />
      <Biography />
      <div
        style={{
          height: '100%'
        }}
        ref={contactRef}
      >
        <Contact />
      </div>
    </div>
  )
}

export default Home
