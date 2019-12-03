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
  transform:translate3d(0, -300px, 0);
  transition: transform .2s ease-in-out;
  &.wrong {  
    transform:translate3d(0, 0, 0);
  }
  &.correct {  
    transform:translate3d(0, 500px, 0);
  }
`

const DisplayStuff = props => {
  const {
    isWrong, wrong_duration
  } = useContext(AppContext)

  const [wrong, setWrong] = useState(false)

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
  }, [isWrong])

  return (
    <Container className={classnames({wrong})}>
      <MathProblem />
      <Calculator/>
    </Container>
  )
}

export default DisplayStuff
