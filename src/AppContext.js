import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'


const AppContext = createContext()

const AppProvider = props => {
  const [touchDevice, setTouchDevice] = useState(null)
  const [mathProblem, setMathProblem] = useState(null)
  const [answer, setAnswer] = useState(null)

  const [leftState, setLeftState] = useState(0)
  const [leftTimer, setLeftTimer] = useState(0)
  const [leftCorrect, setLeftCorrect] = useState(null)

  const [rightState, setRightState] = useState(0)
  const [rightTimer, setRightTimer] = useState(0)
  const [rightCorrect, setRightCorrect] = useState(null)

  const [showHelp, setShowHelp] = useState(0)

  const randomNumber = (max_value) => {
    return Math.floor(Math.random() * max_value + 1)
  }

  const generateAdditionProblem = () => {
    const max_value = 50
    const num1 = randomNumber(max_value)
    const num2 = randomNumber(max_value)
    const answer = num1 + num2
    setMathProblem(`${num1} + ${num2}`)
    setAnswer(answer)
  }

  const generateSubtractionProblem = () => {
    const max_value = 20
    let num1 = randomNumber(max_value)
    let num2 = randomNumber(max_value)
    while (num2 === num1) {
      num2 = randomNumber(max_value)
    }
    const biggerNumber = num1 > num2 ? num1 : num2
    const smallerNumber = num1 < num2 ? num1 : num2
    const answer = biggerNumber - smallerNumber
    setMathProblem(`${biggerNumber} - ${smallerNumber}`)
    setAnswer(answer)
  }

  const generateMultiplicationProblem = () => {
    const max_value = 5
    let num1 = randomNumber(max_value)
    let num2 = randomNumber(max_value)

    const answer = num1 * num2
    setMathProblem(`${num1} x ${num2}`)
    setAnswer(answer)
  }

  const generateMathProblem = () => {
    const problems = [generateMultiplicationProblem , generateAdditionProblem, generateSubtractionProblem]
    return problems[randomNumber(problems.length)-1]()
  }

  // do on initial load only  
  useEffect(() => {
    generateMathProblem()
    setTouchDevice(isTouchDevice())
  }, [])

  // compute correct answers
  useEffect(() => {
    if (rightState !== 2) setRightCorrect(null)
    else setRightCorrect(rightTimer === answer)
  }, [rightState, rightTimer])

  useEffect(() => {
    if (leftState !== 2) setLeftCorrect(null)
    else setLeftCorrect(leftTimer === answer)
  }, [leftState, leftTimer])

  return (
    <AppContext.Provider
      value={{
        touchDevice,
        answer,
        mathProblem,
        generateMathProblem,
        showHelp,
        setShowHelp,

        leftState,
        setLeftState,
        rightState,
        setRightState,

        leftTimer,
        setLeftTimer,
        rightTimer,
        setRightTimer,

        leftCorrect,
        rightCorrect
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
