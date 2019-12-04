import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Calculator from './Calculator'
import MathProblem from './MathProblem'
import { AppContext } from './AppContext'

import classnames from 'classnames'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform:translate3d(0, 0, 0);
  transition: transform .2s ease-in-out;
  &.wrong {  
    transform:translate3d(0, 275px, 0);
  }
  &.correct {  
    transform:translate3d(0, 450px, 0);
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
