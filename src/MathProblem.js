import React, { useState } from 'react'
import styled from 'styled-components'

const MAX_VALUE = 25

const Display = styled.h1`
  color: white;
  font-size: 4em;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.1);
`
const randomNumber = () => {
  return Math.floor(Math.random() * MAX_VALUE + 1)
}

const generateAdditionProblem = () => {
  let num1 = randomNumber()
  let temp = randomNumber()
  while (temp === num1) {
    temp = randomNumber()
  }
  const answer = num1 > temp ? num1 : temp
  num1 = num1 > temp ? temp : num1
  const num2 = answer - num1
  return `${num1} + ${num2}`
}

const MathProblem = props => {
  return <Display>{generateAdditionProblem()}</Display>
}
export default MathProblem
