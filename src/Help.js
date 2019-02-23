import React, { useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from './AppContext'

const Container = styled.div`
  background-color: rgba(99, 205, 218, 1);
  border-radius: 20px;
  border: 5px dashed rgba(0, 0, 0, 0.4);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  @media (min-width: 48em) {
    padding: 30px;
    max-width: 800px;
    & h1 {
      font-size: 1.9em;
      margin-top:0;
    }
    & h2 {
      font-size: 1.5em;
      margin: 5px 0 5px;
    }
    & p {
      line-height:1.4em;
    }
  }
  @media (max-width: 48em) {
    padding: 15px;
    max-width: 70vw;
    & h1 {
      font-size: 1.6em;
      margin-top:10px;
    }
    & h2 {
      font-size: 1.3em;
      margin: 5px 0 5px;
    }x
  }
`

const Desktop = () => {
  return (
    <Container>
      <h1>Math Time is a 2 player game.</h1>
      <h2>right side: P</h2>
      <h2>left side: Q</h2>
      <p>
        Hold down your key for as many seconds as the answer to the math problem.
        <br />
        For example, if the math problem is <b>2 + 6</b>, hold down your key for <b>8</b> seconds.
      </p>

      <h2>Space bar to play again.</h2>
    </Container>
  )
}

const Mobile = () => {
  return (
    <Container>
      <h1>Math Time is a 2 player game.</h1>
      <h2>Tap and hold your side for as many seconds as the answer to the math problem.</h2>
      <p>
        For example, if the math problem is <b>2 + 6</b>, hold down your side for <b>8</b> seconds.
      </p>
      <h2>Tap the lemon to play again.</h2>
    </Container>
  )
}

const Help = props => {
  const { touchDevice } = useContext(AppContext)

  return <div>{touchDevice ? <Mobile /> : <Desktop />}</div>
}

export default Help
