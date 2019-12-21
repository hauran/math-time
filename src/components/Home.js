import React, { useContext } from 'react'
import Gif from './Gif'

import styled from 'styled-components'

import { AppContext } from '../AppContext'


const Container = styled.div`
  margin-bottom:20px;
  font-size: 1em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content:center;
  /* desktop */
  @media (min-width: 769px) {
    padding: 20px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    padding: 15px;
  }
`

const Home  = () => {
  const {
    backToHome
  } = useContext(AppContext)

  return (
    <Container onClick={backToHome}><Gif id='WNiHDLoMyUNV39DzGk' wDesktop={50} wMobile={50} /></Container>
  )
}

export default Home

