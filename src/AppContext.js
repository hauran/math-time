import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'

const AppContext = createContext()
const wrong_duration = 2500

const AppProvider = props => {
  const [touchDevice, setTouchDevice] = useState(null)
  const [mathProblem, setMathProblem] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [response, setResponse] = useState(null)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
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

  const digitPress = (d) => {
    const currentResponse = (response || '').toString()
    setResponse(parseInt(currentResponse + d))
  }
  
  const checkResponse = () => {
    if (!response) return
    if (response === answer){
      setResponse(null)
      setMathProblem(`${mathProblem} = ${answer}`)
      setIsWrong(false)
      setIsCorrect(true)
    }
    else {
      setMathProblem(`${mathProblem} ≠ ${response}`)
      setIsWrong(true)
      setIsCorrect(false)
    }
  }

  const startOver = () => {
    generateMathProblem()
    setIsWrong(false)
    setIsCorrect(false)
  }

  useEffect(() => {
    if (isWrong) {
      const timer = setTimeout(() => {
        const i = mathProblem.indexOf('≠')

        setResponse(null)
        setMathProblem(mathProblem.substr(0,i-1))
        setIsWrong(false)
        setIsCorrect(false)
      }, wrong_duration)
      return () => clearTimeout(timer)
    }
  }, [isWrong])

  // do on initial load only  
  useEffect(() => {
    generateMathProblem()
    setTouchDevice(isTouchDevice())
  }, [])

  return (
    <AppContext.Provider
      value={{
        touchDevice,
        answer,
        response,
        setResponse,
        mathProblem,
        generateMathProblem,
        showHelp,
        setShowHelp,
        digitPress,
        checkResponse,
        isWrong,
        setIsWrong,
        isCorrect,
        setIsCorrect,
        startOver,
        wrong_duration
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
