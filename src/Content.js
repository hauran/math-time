import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Yes from './Yes'
import Nope from './Nope'
import Confetti from './Confetti'
import Gif from './Gif'
import Help from './Help'

import { AppContext } from './AppContext'

const SPACE_KEY = 32
const RIGHT_KEY = 80 // P
const LEFT_KEY = 81 // Q

const Container = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  @media (min-width: 48em) {
    height: 100vh;
  }
  @media (max-width: 48em) {
    height: 100%;
  }
`

const Side = styled.div`
  flex: 1;
  height: 100vh;
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
  left: calc(50vw - 25px);
  bottom: 120px;
`

const HelpIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 20px;
  z-index: 2;
  @media (min-width: 48em) {
    top: 0px;
    right: 0px;
  }
  @media (max-width: 48em) {
    top: -15px;
    right: -15px;
  }
`

const HelpInfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  @media (min-width: 48em) {
    padding-top: 100px;
  }
  @media (max-width: 48em) {
    padding-top: 50px;
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
    padding: 15px;
  }
`

const MathProblem = styled(Display)`
  @media (min-width: 48em) {
    min-width: 150px;
  }
  @media (max-width: 48em) {
    position: relative;
    top: -30px;
  }
`

const Time = styled(Display)`
  position: absolute;
  min-width: 80px;
  @media (min-width: 48em) {
    top: 150px;
    font-size: 5em;
  }
  @media (max-width: 48em) {
    top: 130px;
    font-size: 3em;
  }
`

const Markings = styled.div`
  position: absolute;
  z-index: 1;
  @media (min-width: 48em) {
    top: ${props => (props.correct ? '145px' : '170px')};
    & div {
      position: relative;
      left: 70px;
    }
  }
  @media (max-width: 48em) {
    top: ${props => (props.correct ? '130px' : '145px')};
    & div {
      position: relative;
      left: 50px;
    }
  }
`

const Content = props => {
  const {
    touchDevice,
    mathProblem,
    generateMathProblem,
    showHelp,
    setShowHelp,

    leftState,
    setLeftState,
    rightState,
    setRightState,

    leftTimer,
    setLeftTimer,
    rightTimer,
    setRightTimer,

    leftCorrect,
    rightCorrect
  } = useContext(AppContext)

  // sides have 3 states
  // not pressed = 0
  // down = 1
  // up = 2

  const toggleTimer = (timer, state) => {
    const now = new Date().getTime()
    if (timer === 'left') {
      if (state === 1) setLeftTimer(now)
      else if (state === 2) setLeftTimer(Math.floor((now - leftTimer) / 1000))
    } else {
      if (state === 1) setRightTimer(now)
      else if (state === 2) setRightTimer(Math.floor((now - rightTimer) / 1000))
    }
  }

  const reset = () => {
    setLeftState(0)
    setLeftTimer(0)
    setRightState(0)
    setRightTimer(0)
  }

  const handleDown = side => {
    if (side === 'left') setLeftState(1)
    else setRightState(1)
  }

  const handleUp = side => {
    if (side === 'left') setLeftState(2)
    else setRightState(2)
  }

  useEffect(() => {
    toggleTimer('left', leftState)
  }, [leftState])

  useEffect(() => {
    toggleTimer('right', rightState)
  }, [rightState])

  const startOver = () => {
    reset()
    generateMathProblem()
  }

  const handleKeyDown = event => {
    switch (event.keyCode) {
      case SPACE_KEY:
        startOver()
        break
      case LEFT_KEY:
        handleDown('left')
        break
      case RIGHT_KEY:
        handleDown('right')
        break
      default:
        break
    }
  }

  const handleKeyUp = event => {
    switch (event.keyCode) {
      case LEFT_KEY:
        handleUp('left')
        break
      case RIGHT_KEY:
        handleUp('right')
        break
      default:
        break
    }
  }

  const getBackGroundColor = side => {
    const colors = {
      wrong: ['#b2bec3', '#dfe6e9'],
      correct: ['#00b894', '#55efc4'],
      down: ['rgba(253, 121, 168, 1.0)', 'rgba(108, 92, 231, 1.0)'],
      rest: ['rgba(232, 67, 147,1.0)', 'rgba(108, 92, 231, 0.5)']
    }

    const i = side === 'left' ? 0 : 1
    if (side === 'left') {
      if (leftCorrect === false) return colors.wrong[i]
      else if (leftCorrect) return colors.correct[i]
      else if (leftState === 1) return colors.down[i]
      else return colors.rest[i]
    } else {
      if (rightCorrect === false) return colors.wrong[i]
      else if (rightCorrect) return colors.correct[i]
      else if (rightState === 1) return colors.down[i]
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
        keydown={leftState === 1 ? 1 : 0}
        style={{ backgroundColor: getBackGroundColor('left') }}
        onTouchStart={() => handleDown('left')}
        onTouchEnd={() => handleUp('left')}
      >
        {leftState === 2 ? (
          <Markings correct={leftCorrect}>
            {leftCorrect ? (
              <Gif alt="correctCheck" id="8PmStlLCFNZrs35q5c" wDesktop="100" wMobile="65" />
            ) : (
              <Gif alt="errorX" id="3og0IvGtnDyPHCRaYU" wDesktop="70" wMobile="40" />
            )}
          </Markings>
        ) : null}
        {/* < 1000 to prevent blink/flash */}
        {leftState === 2 && leftTimer < 1000 ? <Time>{leftTimer}</Time> : null}
        {leftState === 2 ? leftCorrect ? <Yes /> : <Nope /> : null}
        {leftState === 1 ? <Confetti /> : null}
      </Left>

      <Right
        className="side"
        keydown={rightState === 1 ? 1 : 0}
        style={{ backgroundColor: getBackGroundColor('right') }}
        onTouchStart={() => handleDown('right')}
        onTouchEnd={() => handleUp('right')}
      >
        {rightState === 2 ? (
          <Markings correct={rightCorrect}>
            {rightCorrect ? (
              <Gif alt="correctCheck" id="8PmStlLCFNZrs35q5c" wDesktop="100" wMobile="65" />
            ) : (
              <Gif alt="errorX" id="3og0IvGtnDyPHCRaYU" wDesktop="70" wMobile="40" />
            )}
          </Markings>
        ) : null}
        {rightState === 2 && rightTimer < 1000 ? <Time>{rightTimer}</Time> : null}
        {rightState === 2 ? rightCorrect ? <Yes /> : <Nope /> : null}
        {rightState === 1 ? <Confetti /> : null}
      </Right>

      <MathContainer>
        <MathProblem>{mathProblem}</MathProblem>
      </MathContainer>

      {touchDevice ? (
        <StartOverContainer onClick={startOver} show={touchDevice}>
          <Gif alt="Reset" id="2wY28XHCbVrgwS5wEr" wDesktop="60" wMobile="60" />
        </StartOverContainer>
      ) : null}

      <HelpIconContainer onClick={() => setShowHelp(1)} onTouchEnd={() => setShowHelp(1)}>
        <Gif
          alt="Help"
          id="fs61bzDxPiv1bW6IlP"
          wDesktop="60"
          wMobile="40"
          style={{ opacity: 0.8 }}
        />
      </HelpIconContainer>

      {showHelp ? (
        <HelpInfoContainer onClick={() => setShowHelp(0)} onTouchEnd={() => setShowHelp(0)}>
          <Help />
        </HelpInfoContainer>
      ) : null}
    </Container>
  )
}

export default Content