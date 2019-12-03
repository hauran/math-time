import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './AppContext'

const Container = styled.div`
  width: ${props => (props.wide ? 'auto' : '70%')};
  max-width:  ${props => (props.wide ? 'initial' : '250px')};
  margin-top: 30px;
  z-index:1;
  @media only screen
    and(min-device-width: 375px)
    and(max-device-width: 667px)
    and(-webkit-min-device-pixel-ratio: 2)
    and(orientation: portrait) {
    width: 90%;
  }
`

const Problem = styled.h1`
  font-size:2.5em;
  color: white;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  min-width: 150px;
  @media (min-width: 48em) {
    padding:30px
  }
  @media (max-width: 48em) {
    padding:20px
  }
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      padding:15px
  }
`

const MathProblem = props => {
  const {
    mathProblem, isCorrect, isWrong, startOver
  } = useContext(AppContext)

  return (
    <Container wide={isCorrect || isWrong} onClick={startOver}>
      <Problem>{mathProblem}</Problem>
    </Container>
  )
}
export default MathProblem