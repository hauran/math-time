import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Yes from './Yes'
import Nope from './Nope'
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
`

const Left = styled(Side)`
  background-color: ${props =>
    props.keydown ? 'rgba(253, 121, 168, 1.0)' : 'rgba(253, 121, 168, 0.5)'};
`

const Right = styled(Side)`
  background-color: ${props =>
    props.keydown ? 'rgba(108, 92, 231, 1.0)' : 'rgba(108, 92, 231, 0.5)'};
`

const MathContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Display = styled.h1`
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
`

const MathProblem = styled(Display)`
  min-width: 150px;
`

const Time = styled(Display)`
  font-size: 5em;
`

const Content = props => {
  const { answer, mathProblem, generateMathProblem } = useContext(AppContext)

  // sides have 3 states
  // not pressed = 0
  // down = 1
  // up = 2
  const [leftDown, setLeftDown] = useState(0)
  const [leftTimer, setLeftTimer] = useState(0)
  const [leftTimeStart, setLeftTimeStart] = useState(0)

  const [rightDown, setRightDown] = useState(0)
  const [rightTimer, setRightTimer] = useState(0)
  const [rightTimeStart, setRightTimeStart] = useState(0)

  let leftDone = 0,
    rightDone = 0

  const toggleTimer = (timer, value) => {
    const now = new Date().getTime()
    if (value === 1) {
      // start timer
      if (timer === 'left' && !leftTimeStart) setLeftTimeStart(now)
      else if (timer === 'right' && !rightTimeStart) setRightTimeStart(now)
    } else {
      //end timer
      if (timer === 'left') {
        setLeftTimer(Math.floor((now - leftTimeStart) / 1000))
        leftDone = 1
      } else {
        setRightTimer(Math.floor((now - rightTimeStart) / 1000))
        rightDone = 1
      }
    }
  }

  const reset = () => {
    setLeftDown(0)
    setLeftTimer(0)
    setLeftTimeStart(0)
    setRightDown(0)
    setRightTimer(0)
    setRightTimeStart(0)
    leftDone = 0
    rightDone = 0
  }

  const handleDown = side => {
    if (side === 'left') {
      if (!leftTimeStart) {
        toggleTimer(side, 1)
        setLeftDown(1)
      }
    } else {
      if (!rightTimeStart) {
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
  const handleKeyDown = event => {
    switch (event.keyCode) {
      case SPACE_KEY:
        reset()
        generateMathProblem()
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <Container>
      <Left
        keydown={leftDown === 1 ? 1 : 0}
        onTouchStart={() => handleDown('left')}
        onTouchEnd={() => handleUp('left')}
      >
        {leftDown === 2 ? <Time>{leftTimer}</Time> : null}
        {leftDown === 2 ? leftTimer === answer ? <Yes /> : <Nope /> : null}
      </Left>
      <Right
        keydown={rightDown === 1 ? 1 : 0}
        onTouchStart={() => handleDown('right')}
        onTouchEnd={() => handleUp('right')}
      >
        {rightDown === 2 ? <Time>{rightTimer}</Time> : null}
        {rightDown === 2 ? rightTimer === answer ? <Yes /> : <Nope /> : null}
      </Right>
      <MathContainer>
        <MathProblem>{mathProblem}</MathProblem>
      </MathContainer>
    </Container>
  )
}

export default Content
