import React, { useContext } from 'react'
import styled from 'styled-components'

import Gif from './Gif'

import { AppContext } from '../AppContext'

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  z-index: 1;
  /* desktop */
  @media (min-width: 769px) {
    top: 0px;
    left: 0px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    top: -25px;
    left: -13px;
  }
`

const HomeIcon = props => {
  const {
    backToHome
  } = useContext(AppContext)

  return (
    <Container onClick={backToHome}><Gif id='WNiHDLoMyUNV39DzGk' wDesktop={35} wMobile={35} /></Container>
  )
}


export default HomeIcon
