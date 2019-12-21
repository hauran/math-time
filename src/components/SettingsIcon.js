import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components';

import { AppContext } from '../AppContext'

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  padding-right: 10px;
  z-index: 1;
  /* desktop */
  @media (min-width: 769px) {
    top: 0px;
    right: 0px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    top: -13px;
    right: 0px;
  }
`
const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`
const Circle = styled.div`
  border-radius: 50%;
  animation: ${spin} 20s linear 0s infinite;
  /* desktop */
  @media (min-width: 769px) {
    font-size:1.5em;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    font-size:1.3em;
  }
`

const SettingsIcon = props => {
  const {
    setShowSettings
  } = useContext(AppContext)

  return (
    <Container onClick={() => setShowSettings(true)}>
      <Circle>⚙</Circle>
    </Container>
  )
}


export default SettingsIcon
