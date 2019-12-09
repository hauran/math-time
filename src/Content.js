import React, { useContext} from 'react'

import styled from 'styled-components'
import Yes from './Yes'
import Nope from './Nope'
import Confetti from './Confetti'
import DisplayStuff from './DisplayStuff'
import Settings from './Settings'

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
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:  'center';
  flex-direction: column;
  position: relative;
  /* desktop */
  @media screen 
    and (min-device-width: 1200px)  { 
      padding-top:100px;
  }

  /* tablet */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) {
    padding-top:100px;
  }

  /* phone */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px){ 
      padding-top:0px;
  }
`

const Content = props => {

  const {
    isWrong, isCorrect
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

  return (
    <Container>
      <Main style={{ backgroundColor: getBackGroundColor() }}>
        {isCorrect ? <><Yes /><Confetti /></> : null}
        {isWrong ? <Nope /> : null}
        <DisplayStuff/>
      </Main>
      <Settings />
    </Container>
  )
}

export default Content
