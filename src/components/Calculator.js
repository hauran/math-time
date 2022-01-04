import React, { useContext } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import Digits from './Digits'
import Screen from './Screen'
import { AppContext } from '../AppContext'

const Container = styled.section`
  width: 95%;
  max-width: 450px;
  opacity: initial;
  transition: opacity 0.2s ease-in-out;
  &.wrong {
    opacity: 30%;
  }
  &.correct {
    visibility: hidden;
  }

  /* desktop */
  @media screen and (min-device-width: 1200px) {
    margin-top: 30px;
    padding-top: 40px;
  }

  /* tablet */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-top: 20px;
    padding: 20px;
  }

  /* phone */
  @media only screen and (max-device-width: 768px) {
    margin-top: 10px;
    padding: 20px;
  }
`

const Calculator = (props) => {
  const { setResponse, isWrong, isCorrect } = useContext(AppContext)
  const erase = () => setResponse(null)
  return (
    <Container className={classnames({ wrong: isWrong, correct: isCorrect })}>
      <Screen onClick={() => !isWrong && erase()} />
      <Digits />
    </Container>
  )
}

export default Calculator
