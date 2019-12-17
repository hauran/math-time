import React, { useContext} from 'react'

import styled from 'styled-components'
import Yes from './components/Yes'
import Nope from './components/Nope'
import Confetti from './components/Confetti'
import DisplayStuff from './components/DisplayStuff'
import Settings from './components/Settings'
import HomeIcon from './components/HomeIcon'
import Modes from './components/Modes'
import Countdown from './components/Countdown'
import BackgrondColor from './components/BackgrondColor'
import Results from './components/Results'

import { AppContext } from './AppContext'

const Container = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  /* desktop */
  @media (min-width: 769px) {
    height: 100vh;
  }
  /* tablet & phones */
  @media (max-width: 768px) {
    height: 100%;
  }
`

const Main = styled.div`
  flex: 1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: 'center';
  flex-direction: column;
  position: relative;
  /* desktop */
  @media screen and (min-device-width: 1200px) {
    padding-top: 100px;
  }

  /* tablet */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    padding-top: 100px;
  }

  /* phone */
  @media only screen and (max-device-width: 768px) {
    padding-top: 0px;
  }
`

const Content = props => {

  const {
    isWrong, isCorrect, mode, secondsRemaining
  } = useContext(AppContext)

  return (
    <Container>
      <Main>
        <BackgrondColor/>
        {mode && ( (mode === 'casual') || (mode === 'timer' && secondsRemaining > 0)  ) ? 
          <>
              {isCorrect ? <><Yes /><Confetti /></> : null}
              {isWrong ? <Nope /> : null}
              <DisplayStuff/>
            <Settings />
            <HomeIcon/>
          </>
        : null}
      </Main>

      <Modes/>
      <Countdown/>
      <Results />
    </Container>
  )
}

export default Content
