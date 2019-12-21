import React, { useContext } from 'react'
import styled from 'styled-components'
import Gif from './Gif'

import { AppContext } from '../AppContext'
import 'react-toggle/style.css'

const ModeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction:column;
  /* desktop */
  @media (min-width: 769px) {
    justify-content:center;
  }

  /* tablet & phone */
  @media (max-width: 768px) {
    padding: 40px;
    justify-content: flex-start;
  }
`

const Option = styled.div`
  background-color: rgba(99, 205, 218, 1);
  border-radius: 20px;
  border: 5px dashed rgba(0, 0, 0, 0.4);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  max-height: 400px;
  max-width: 450px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom:0;
  }
  /* desktop */
  @media (min-width: 769px) {
    padding: 20px;
    flex:0.5;

  }
  /* tablet & phone */
  @media (max-width: 768px) {
    padding: 15px;
    flex: calc( 0.5 - 50px);
  }
`
const Title = styled.h1`
  text-align:center;
  margin:10px;
`

const Body = styled.section`
  display:flex;
`

const Copy = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
`

const Modes = props => {
    const {
      mode, setMode
    } = useContext(AppContext)


  return (
    <>
    {!mode ?
    <ModeContainer>
      <Option onClick={() => setMode('timer')}>
        <Title>Timer Mode</Title>
        <p style={{ textAlign: 'center' }}>You have 2 minutes. Ready, Set...</p>
        <Body>
          <Gif id="8OPzq48W0upEDZHQ43" wDesktop={200} wMobile={100}></Gif>
          <Copy>
            <p style={{ margin: 0 }}>
              For that extra excitment of racing the clock and beating your personal best.
            </p>
          </Copy>
        </Body>
      </Option>

      <Option onClick={() => setMode('casual')}>
        <Title>Casual Mode</Title>
        <p style={{ textAlign: 'center' }}>Chill dude...</p>
        <Body>
          <Gif id="kC8VlVbwprG6gmIaTZ" wDesktop={220} wMobile={120}></Gif>
          <Copy>
            <p style={{ margin: 0 }}>
              Take your time. Just relax and practice a few math problems.
            </p>
          </Copy>
        </Body>
      </Option>
    </ModeContainer>
    :null}
    </>
  )
}
export default Modes

