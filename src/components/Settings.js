import React, { useContext } from 'react'
import styled from 'styled-components'

import SettingsIcon from './SettingsIcon'
import Operation from './Operation'
import { AppContext } from '../AppContext'
import 'react-toggle/style.css'

const HelpInfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items:center;
  /* desktop */
  @media (min-width: 769px) {
    padding-top: 100px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

const Container = styled.div`
  background-color: rgba(99, 205, 218, 1);
  border-radius: 20px;
  border: 5px dashed rgba(0, 0, 0, 0.4);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  /* desktop */
  @media (min-width: 769px) {
    padding: 30px;
    max-width: 350px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    margin-top: -50px;
    padding: 5px;
    width: 80vw;
    max-width: 350px;
  }
`

const Title = styled.h1`
  /* phone */
  @media only screen and (max-device-width: 768px) {
    margin: 10px;
  }
`

const Help = props => {
  const {
    showSettings,
    setShowSettings,
    settings,
    setSettingsUseOperation,
    setSettingsOperationMax
  } = useContext(AppContext)

  return (
    <>
      <SettingsIcon />
      {showSettings ? (
        <HelpInfoContainer onClick={e => setShowSettings(false)}>
          <Container onClick={e => e.stopPropagation()}>
            <Title>Settings</Title>
            <Operation
              use={settings.addition.use}
              setUse={use => setSettingsUseOperation('addition', use)}
              max={settings.addition.max}
              setMax={max => setSettingsOperationMax('addition', max) } 
              title="Addition (+)" />

            <Operation
              use={settings.subtraction.use}
              setUse={use => setSettingsUseOperation('subtraction', use)}
              max={settings.subtraction.max}
              setMax={max => setSettingsOperationMax('subtraction', max)}
              title="Subtraction (-)" />

            <Operation
              use={settings.multiplication.use}
              setUse={use => setSettingsUseOperation('multiplication', use)}
              max={settings.multiplication.max}
              setMax={max => setSettingsOperationMax('multiplication', max)}
              title="Multiplication (x)" />
            
            <Operation
              use={settings.division.use}
              setUse={use => setSettingsUseOperation('division', use)}
              max={settings.division.max}
              setMax={max => setSettingsOperationMax('division', max)}
              title="Division (÷)" 
              hint={true}/>
          </Container>
        </HelpInfoContainer>
      ) : null}
    </>
  )
}
export default Help
