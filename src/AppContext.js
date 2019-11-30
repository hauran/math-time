import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'


const AppContext = createContext()

const AppProvider = props => {
  const [touchDevice, setTouchDevice] = useState(null)
  const [mathProblem, setMathProblem] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [response, setResponse] = useState(null)
  const [numbers, setNumbers] = useState([])

  const [gameState, setGameState] = useState(0)
  const [isResponseCorrect, setIsResponseCorrect] = useState(null)

  const [showHelp, setShowHelp] = useState(0)

  const randomNumber = (max_value) => {
    return Math.floor(Math.random() * max_value + 1)
  }

  const generateAdditionProblem = () => {
    const max_value = 50
    const num1 = randomNumber(max_value)
    const num2 = randomNumber(max_value)
    const answer = num1 + num2
    setNumbers([num1, num2])
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
    setNumbers([num1, num2])
    setMathProblem(`${biggerNumber} - ${smallerNumber}`)
    setAnswer(answer)
  }

  const generateMultiplicationProblem = () => {
    const max_value = 5
    let num1 = randomNumber(max_value)
    let num2 = randomNumber(max_value)
    const answer = num1 * num2
    setNumbers([num1, num2])
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
    setGameState(2)
    if (response === answer){
      setResponse(null)
      setIsResponseCorrect(true)
      setMathProblem(`${mathProblem} = ${answer}`)
    }
    else {
      setIsResponseCorrect(false)
      setResponse(null)
    }
  }


  // do on initial load only  
  useEffect(() => {
    generateMathProblem()
    setTouchDevice(isTouchDevice())
  }, [])

  // compute correct answers
  // useEffect(() => {
  //   if (gameState !== 2) setIsResponseCorrect(null)
  //   else setIsResponseCorrect(true) //todo
  // }, [gameState])

  return (
    <AppContext.Provider
      value={{
        touchDevice,
        answer,
        response,
        mathProblem,
        generateMathProblem,
        showHelp,
        setShowHelp,
        digitPress,
        checkResponse,
        gameState,
        setGameState,
        isResponseCorrect,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
