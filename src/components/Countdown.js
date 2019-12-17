import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import { AppContext } from '../AppContext'
import 'react-toggle/style.css'

const ModeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* desktop */
  @media (min-width: 769px) {
    /* padding-top: 100px; */
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    padding: 30px;
  }
`

const Number = styled.h1`
/* desktop */
  @media (min-width: 769px) {
    font-size:12em;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    font-size:10em;
  }
`

const Modes = props => {
  const { mode, secondsRemaining, startTimer } = useContext(AppContext)
  const [countdown, setCountDown] = useState(3)

  useEffect( () => {
    if (secondsRemaining !== null) return

    if (countdown === 'GO!') setTimeout(() => { startTimer(); setCountDown(3)} , 1000) 
    if (isNaN(countdown) || mode !== 'timer') return
    if (countdown===0)
      setCountDown('GO!')
    else
      setTimeout( () => setCountDown(countdown-1) ,1000)
  }, [mode, countdown, startTimer, secondsRemaining])
  
  return (
    <>
      {mode === 'timer' && secondsRemaining === null ? (
        <ModeContainer>
          <Number>{!isNaN(countdown) && countdown > 3 ? '' : countdown}</Number>
        </ModeContainer>
      ) : null}
    </>
  )
}
export default Modes
