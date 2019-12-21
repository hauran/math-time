import React, { useContext } from 'react'
import styled from 'styled-components'
import Digit from './Digit'
import { AppContext } from '../AppContext'

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`
const Text = styled.div`
  -moz-user-select: none;
  -ms-user-select: none; 
  -khtml-user-select: none; 
  -webkit-user-select: none; 
  -webkit-touch-callout: none; 
`

const Digits = props => {
  const {
    digitPress,
    checkResponse,
    isWrong, isCorrect
  } = useContext(AppContext)

  const digits = []
  for(let i=1; i < 10; i++) {
    digits.push(<Digit key={i} onClick={() => !isWrong && !isCorrect && digitPress(i)}><Text>{i}</Text></Digit>)
  }
  digits.push(<Digit key={0} onClick={() => !isWrong && !isCorrect && digitPress(0)} ><Text>0</Text></Digit>)
  digits.push(<Digit key='ok' onClick={() => !isWrong && !isCorrect && checkResponse()} style={{ backgroundColor: '#2e86c0', gridColumn: '2/4' }}><Text>OK</Text></Digit>)

  return (
    <Container>
      {digits}
    </Container>
  )
}

export default Digits
