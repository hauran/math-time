
import React, { useContext } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import Digits from './Digits'
import Screen from './Screen'
import { AppContext } from './AppContext'

const Container = styled.section`
  width: 95%;
  max-width: 450px;
  margin-top: 30px;
  opacity:initial;
  transition: opacity .2s ease-in-out;
  &.wrong {
    opacity:40%;
  }
  &.correct {
    visibility:hidden;
  }
  @media (max-width: 48em) {
    padding:20px
  } 
`

const Calculator = props => {
  const {
    setResponse, isWrong, isCorrect
  } = useContext(AppContext)
  const erase = () => setResponse(null)
  return (
    <Container className={classnames({ wrong: isWrong, correct:isCorrect})}>
      <Screen onClick={erase} />
      <Digits />
    </Container>
  )
}

export default Calculator
