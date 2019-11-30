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
      <h1>Math Time Desktop</h1>
      <h2>Boop</h2>
      <p>
        Instructions
        <br />
        More Instructions
      </p>

      <h2>Space bar to play again.</h2>
    </Container>
  )
}

const Mobile = () => {
  return (
    <Container>
      <h1>Math Time Mobile</h1>
      <h2>Boop</h2>
      <p>
        Instructions
        <br />
        More Instructions
      </p>

      <h2>Space bar to play again.</h2>
    </Container>
  )
}

const Help = props => {
  const { touchDevice } = useContext(AppContext)

  return <div>{touchDevice ? <Mobile /> : <Desktop />}</div>
}

export default Help
