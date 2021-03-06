import React, { useContext } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'


import { AppContext } from '../AppContext'

const Container = styled.div`
  z-index:1;
`

const Problem = styled.h1`
  font-size:2.5em;
  text-align: center;
  border-bottom: 5px dashed rgba(0, 0, 0, 0.7);
  min-width: 150px;
  
  transition: background-color,color 0.2s ease-in-out;
  &.wrong {
    border-radius: 5px;
    background-color: rgba(193, 0, 0, 1); 
    color:white;
    border-bottom: none;
  }
  
  /* desktop */
  @media (min-width: 769px) {
    padding:30px;
  }
  /* tablet */
  @media (max-width: 768px) {
    padding:20px;
  }
  /* phone */
  @media only screen 
    and (max-device-width: 768px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
      padding:15px;
      font-size:2em;
  }
`

const MathProblem = props => {
  const {
    mathProblem, isCorrect, isWrong, startOver, tryAgain
  } = useContext(AppContext)

  const handleClick = () => {
    if (isWrong) 
      tryAgain()
    else 
      startOver()
  }

  return (
    <Container onClick={handleClick}>
      <Problem className={classnames({ correct: isCorrect, wrong: isWrong })}>{mathProblem}</Problem>
    </Container>
  )
}
export default MathProblem