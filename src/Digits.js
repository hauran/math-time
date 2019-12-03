import React, { useContext } from 'react'
import styled from 'styled-components'
import Digit from './Digit'
import { AppContext } from './AppContext'

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`


const Digits = props => {
  const {
    digitPress,
    checkResponse,
    isWrong, isCorrect
  } = useContext(AppContext)

  const digits = []
  for(let i=1; i < 10; i++) {
    digits.push(<Digit key={i} onClick={() => !isWrong && !isCorrect && digitPress(i)}>{i}</Digit>)
  }
  digits.push(<Digit key={0} onClick={() => !isWrong && !isCorrect && digitPress(0)} >0</Digit>)
  digits.push(<Digit key='ok' onClick={() => !isWrong && !isCorrect && checkResponse()}  style={{ backgroundColor: '#2e86c0', gridColumn:'2/4'}}>OK</Digit>)

  return (
    <Container>
      {digits}
    </Container>
  )
}

export default Digits
