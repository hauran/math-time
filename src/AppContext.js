import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'

const MAX_VALUE = 20

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

  const randomNumber = () => {
    return Math.floor(Math.random() * MAX_VALUE + 1)
  }

  const generateMathProblem = () => {
    let num1 = randomNumber()
    let temp = randomNumber()
    while (temp === num1) {
      temp = randomNumber()
    }
    const answer = num1 > temp ? num1 : temp
    num1 = num1 > temp ? temp : num1
    const num2 = answer - num1
    setMathProblem(`${num1} + ${num2}`)
    setAnswer(answer)
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
