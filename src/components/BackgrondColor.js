import React, { useContext } from 'react'

import styled from 'styled-components'

import { AppContext } from '../AppContext'

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  flex: 1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow:hidden;
`

const Progress = styled.div`
  position:absolute;
  top:0;left:0;
  height:100vh;
  width:100vw;
  background-color:rgba(255, 255, 255, 0.6);
  transform: ${props => props.percent ? `translate3d(0, ${props.percent}vh, 0)` : 'translate3d(0, 0vh ,0)'} ;
  opacity: ${props => props.hide ? 0.2 : 1};
  transition: transform 1s linear;
  
`

const BackgroundColor = () => {
  const {
    mode, isWrong, isCorrect, timer_mode_length, secondsRemaining
  } = useContext(AppContext)

  const getBackGroundColor = side => {
    const colors = {
      wrong: '#b2bec3',
      correct: '#00b894',
      rest: 'rgba(232, 67, 147,1.0)'
    }
    if (!isWrong && !isCorrect) return colors.rest
    else if (isWrong) return colors.wrong
    else if (isCorrect) return colors.correct
    else return colors.rest
  }

  const whatsLeft = () => {
    if (!isNaN(secondsRemaining))
      return 100 - (100 * secondsRemaining / timer_mode_length)
  }

  return (
    <Container style={{backgroundColor:getBackGroundColor()}}>
      {secondsRemaining ? <Progress percent={whatsLeft()} hide={isWrong || isCorrect}/> : null}
    </Container>
  )
}

export default BackgroundColor
