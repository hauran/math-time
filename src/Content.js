import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Yes from './Yes'
import Nope from './Nope'
import Confetti from './Confetti'
import Gif from './Gif'
import Help from './Help'
import Digits from './Digits'
import Screen from './Screen'


import { AppContext } from './AppContext'

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
  justify-content: ${props => props.submitted ? 'flex-start' : 'center'};
  flex-direction: column;
  position: relative;
`

const Left = styled(Side)``

const MathContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media (min-width: 48em) {
    top: 50px;
  }
  */
  @media (max-width: 48em) {
    bottom: ${props => props.correct ? '150px' : 'initial'};
    position: ${props => props.correct ? 'absolute' : 'initial'};
  } 
`

const Calculator = styled.section`
  width:95%;
  max-width:400px;
  margin-top:30px;
  /* margin-top:${props => props.inCorrect ? '200px' : '0px'}; */
`


const StartOverContainer = styled.div`
  position: absolute;
  left: calc(50vw - 25px);
  bottom: 50px;
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
  font-size:2.5em;
  @media (min-width: 48em) {
    min-width: 150px;
  }
  @media (max-width: 48em) {
    position: relative;
  }
`

const DisplayStuff = styled.section`
  margin-top:${props => props.submitted ? 'initial' : '107px'};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = props => {
  const {
    touchDevice,
    mathProblem,
    generateMathProblem,
    showHelp,
    setShowHelp,
    gameState,
    setGameState,
    isResponseCorrect,
  } = useContext(AppContext)
  
  const reset = () => {
    setGameState(0)
  }

  const startOver = () => {
    reset()
    generateMathProblem()
  }

  const getBackGroundColor = side => {
    const colors = {
      wrong: '#b2bec3',
      correct: '#00b894',
      rest: 'rgba(232, 67, 147,1.0)'
    }
    if (gameState === 0) return colors.rest
    else if (gameState === 2 && isResponseCorrect === false) return colors.wrong
    else if (gameState === 2 && isResponseCorrect) return colors.correct
    else return colors.rest
  }

  useEffect(() => {
    // on load
    return () => {
      // on unload
    }
  }, [])

  return (
    <Container>
      <Left
        className="side"
        submitted={gameState === 2}
        style={{ backgroundColor: getBackGroundColor() }}
      >

        {gameState === 2 ? isResponseCorrect ? <Yes /> : <Nope /> : null}
        {gameState === 2 && isResponseCorrect ? <Confetti /> : null}


        <DisplayStuff submitted={gameState === 2} >
          <MathContainer correct={gameState === 2 && isResponseCorrect}>
            <MathProblem>{mathProblem}</MathProblem>
          </MathContainer>

          {gameState === 2 && isResponseCorrect ?
            null
          :
            <Calculator inCorrect={gameState === 2 && !isResponseCorrect}>
              <Screen />
              <Digits />
            </Calculator>
          }
        </DisplayStuff>

      </Left>

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
