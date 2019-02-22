import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Yes from './Yes'
import Nope from './Nope'
import StartOver from './StartOver'

import { AppContext } from './AppContext'

const SPACE_KEY = 32
const RIGHT_QUESTION_KEY = 191
const LEFT_Z_KEY = 90

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
`

const Side = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const Left = styled(Side)``

const Right = styled(Side)``

const MathContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 48em) {
    top: 50px;
  }
  @media (max-width: 48em) {
    top: 30px;
  }
`

const StartOverContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  @media (min-width: 48em) {
    display: none;
  }
`

const Display = styled.h1`
  color: white;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  @media (min-width: 48em) {
    padding: 30px;
  }
  @media (max-width: 48em) {
    padding: 10px;
  }
`

const MathProblem = styled(Display)`
  @media (min-width: 48em) {
    min-width: 150px;
  }
`

const Time = styled(Display)`
  position: absolute;
  @media (min-width: 48em) {
    top: 150px;
    font-size: 5em;
  }
  @media (max-width: 48em) {
    top: 100px;
    font-size: 3em;
  }
`

const Content = props => {
  const { answer, mathProblem, generateMathProblem } = useContext(AppContext)

  // sides have 3 states
  // not pressed = 0
  // down = 1
  // up = 2
  const [leftDown, setLeftDown] = useState(0)
  const [leftTimer, setLeftTimer] = useState(0)
  const [leftTimerStarted, setLeftTimerStarted] = useState(0)

  const [rightDown, setRightDown] = useState(0)
  const [rightTimer, setRightTimer] = useState(0)
  const [rightTimerStarted, setRightTimerStarted] = useState(0)

  let leftDone = 0,
    rightDone = 0

  const toggleTimer = (timer, value) => {
    const now = new Date().getTime()
    if (value === 1) {
      // console.log('timer start', now, leftTimerStarted)
      // start timer
      if (timer === 'left' && leftTimerStarted === 0) {
        setLeftTimerStarted(now)
        // console.log('leftTimerStarted', leftTimerStarted, now)
      } else if (timer === 'right' && !rightTimerStarted) {
        setRightTimerStarted(now)
      }
    } else {
      //end timer
      if (timer === 'left') {
        // console.log('timer end', now, leftTimerStarted)
        setLeftTimer(Math.floor((now - leftTimerStarted) / 1000))
        leftDone = 1
      } else {
        setRightTimer(Math.floor((now - rightTimerStarted) / 1000))
        rightDone = 1
      }
    }
  }

  const reset = () => {
    setLeftDown(0)
    setLeftTimer(0)
    setRightDown(0)
    setRightTimer(0)
    leftDone = 0
    rightDone = 0
    setLeftTimerStarted(0)
    setRightTimerStarted(0)
  }

  const handleDown = side => {
    if (side === 'left') {
      if (!leftTimerStarted) {
        toggleTimer(side, 1)
        setLeftDown(1)
      }
    } else {
      if (!rightTimerStarted) {
        toggleTimer(side, 1)
        setRightDown(1)
      }
    }
  }

  const handleUp = side => {
    if (side === 'left') {
      if (!leftDone) {
        setLeftDown(2)
        toggleTimer(side, 0)
      }
    } else {
      if (!rightDone) {
        setRightDown(2)
        toggleTimer(side, 0)
      }
    }
  }
  const startOver = () => {
    reset()
    generateMathProblem()
  }
  const handleKeyDown = event => {
    switch (event.keyCode) {
      case SPACE_KEY:
        startOver()
        break
      case LEFT_Z_KEY:
        handleDown('left')
        break
      case RIGHT_QUESTION_KEY:
        handleDown('right')
        break
      default:
        break
    }
  }

  const handleKeyUp = event => {
    switch (event.keyCode) {
      case LEFT_Z_KEY:
        handleUp('left')
        break
      case RIGHT_QUESTION_KEY:
        handleUp('right')
        break
      default:
        break
    }
  }

  const setBackGroundColor = side => {
    const colors = {
      wrong: ['#b2bec3', '#dfe6e9'],
      correct: ['#00b894', '#55efc4'],
      down: ['rgba(253, 121, 168, 1.0)', 'rgba(108, 92, 231, 1.0)'],
      rest: ['rgba(232, 67, 147,1.0)', 'rgba(108, 92, 231, 0.5)']
    }

    const i = side === 'left' ? 0 : 1
    if (side === 'left') {
      if (leftDown === 2 && leftTimer !== answer) return colors.wrong[i]
      else if (leftDown === 2 && leftTimer === answer) return colors.correct[i]
      else if (leftDown === 1) return colors.down[i]
      else return colors.rest[i]
    } else {
      if (rightDown === 2 && rightTimer !== answer) return colors.wrong[i]
      else if (rightDown === 2 && rightTimer === answer) return colors.correct[i]
      else if (rightDown === 1) return colors.down[i]
      else return colors.rest[i]
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <Container>
      <Left
        className="side"
        keydown={leftDown === 1 ? 1 : 0}
        wrong={leftTimer && leftTimer !== answer}
        correct={leftTimer && leftTimer === answer}
        style={{ backgroundColor: setBackGroundColor('left') }}
        onTouchStart={() => handleDown('left')}
        onTouchEnd={() => handleUp('left')}
      >
        {leftDown === 2 ? <Time>{leftTimer}</Time> : null}
        {leftDown === 2 ? leftTimer === answer ? <Yes /> : <Nope /> : null}
      </Left>

      <Right
        className="side"
        keydown={rightDown === 1 ? 1 : 0}
        style={{ backgroundColor: setBackGroundColor('right') }}
        onTouchStart={() => handleDown('right')}
        onTouchEnd={() => handleUp('right')}
      >
        {rightDown === 2 ? <Time>{rightTimer}</Time> : null}
        {rightDown === 2 ? rightTimer === answer ? <Yes /> : <Nope /> : null}
      </Right>

      <MathContainer>
        <MathProblem>{mathProblem}</MathProblem>
      </MathContainer>
      <StartOverContainer onClick={startOver}>
        <StartOver />
      </StartOverContainer>
    </Container>
  )
}

export default Content
