import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Calculator from './Calculator'
import MathProblem from './MathProblem'
import { AppContext } from '../AppContext'

import classnames from 'classnames'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-in-out;

  /* desktop */
  @media screen and (min-device-width: 1200px) {
    &.correct {
      transform: translate3d(0, 450px, 0);
    }
    &.wrong {
      transform: translate3d(0, 300px, 0);
    }
  }

  /* tablet */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    &.correct {
      transform: translate3d(0, 450px, 0);
    }
    &.wrong {
      transform: translate3d(0, 400px, 0);
    }
  }

  /* phone */
  @media only screen and (max-device-width: 768px) {
    &.correct {
      transform: translate3d(0, 410px, 0);
    }
    &.wrong {
      transform: translate3d(0, 280px, 0);
    }
  }
`

const DisplayStuff = props => {
  const {
    isWrong, isCorrect, wrong_duration
  } = useContext(AppContext)

  const [wrong, setWrong] = useState(false)
  const [correct, setCorrect] = useState(false)

  useEffect(() => {
    if (isWrong) {
      const down = setTimeout(() => {
        setWrong(true)
        const up = setTimeout(() => {
          setWrong(false)
        }, wrong_duration)
        return () => clearTimeout(up)
      }, 100);
      return () => clearTimeout(down);
    }
    else
      setWrong(false)
  }, [isWrong])

  useEffect(() => {
    if (isCorrect) {
      const down = setTimeout(() => {
        setCorrect(true)
      }, 100);
      return () => clearTimeout(down);
    }
    else 
      setCorrect(false)
  }, [isCorrect])


  return (
    <Container className={classnames({wrong, correct})}>
      <MathProblem />
      <Calculator/>
    </Container>
  )
}

export default DisplayStuff
