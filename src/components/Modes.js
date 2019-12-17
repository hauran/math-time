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
  justify-content: center;
  align-items: center;
  flex-direction:column;
  /* desktop */
  @media (min-width: 769px) {
    /* padding-top: 100px; */
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    padding: 30px;
  }
`

const Option = styled.div`
  background-color: rgba(99, 205, 218, 1);
  border-radius: 20px;
  border: 5px dashed rgba(0, 0, 0, 0.4);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  flex: 1;
  width: 100%;
  max-height: 400px;
  max-width: 450px;
  margin: 15px 0;
  /* desktop */
  @media (min-width: 769px) {
    /* padding: 30px;
    max-width: 800px; */
    padding: 20px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    /* margin-top: -50px;
    padding: 15px;
    width: 80vw; */
    padding: 15px;
  }
`
const Title = styled.h1`
  text-align:center;
`

const Body = styled.section`
  display:flex;
    /* tablet & phone */
  @media (max-width: 768px) {
    margin-top: 30px;
  }
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

