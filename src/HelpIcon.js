import React, { useContext } from 'react'
import styled from 'styled-components'
import Gif from './Gif'

import { AppContext } from './AppContext'

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  z-index: 2;
  @media (min-width: 48em) {
    top: 0px;
    right: 0px;
  }
  @media (max-width: 48em) {
    top: -15px;
    right: -15px;
  }
`

const HelpIcon = props => {
  const {
    setShowHelp
  } = useContext(AppContext)

  return (
    <Container onClick={() => setShowHelp(1)} onTouchEnd={() => setShowHelp(1)}>
      <Gif
        alt="Help"
        id="fs61bzDxPiv1bW6IlP"
        wDesktop="60"
        wMobile="40"
        style={{ opacity: 0.8 }}
      />
    </Container>
  )
}

export default HelpIcon
