import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'

const AppContext = createContext()
const wrong_duration = 2250
const defaultSettings = {
  addition:{
    use:true,
    max:10
  },
  subtraction: {
    use: true,
    max: 10
  },
  multiplication: {
    use: false,
    max: 10
  },
  division: {
    use: false,
    max: 10
  }
}


const AppProvider = props => {
  const [touchDevice, setTouchDevice] = useState(null)
  const [mathProblem, setMathProblem] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [response, setResponse] = useState(null)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState(defaultSettings)

  const randomNumber = (max_value) => {
    return Math.floor(Math.random() * max_value + 1)
  }

  const generateAdditionProblem = () => {
    const max_value = settings.addition.max
    const num1 = randomNumber(max_value)
    const num2 = randomNumber(max_value)
    const answer = num1 + num2
    setMathProblem(`${num1} + ${num2}`)
    setAnswer(answer)
  }

  const generateSubtractionProblem = () => {
    const max_value = settings.subtraction.max
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
    const max_value = settings.multiplication.max
    let num1 = randomNumber(max_value)
    let num2 = randomNumber(max_value)
    const answer = num1 * num2
    setMathProblem(`${num1} x ${num2}`)
    setAnswer(answer)
  }

  const generateDivisionProblem = () => {
    const max_value = settings.division.max
    let num1 = randomNumber(max_value)
    let num2 = randomNumber(max_value)
    while (num2 === num1) {
      num2 = randomNumber(max_value)
    }
    const biggerNumber = num1 > num2 ? num1 : num2
    const smallerNumber = num1 < num2 ? num1 : num2

    const answer = parseInt(biggerNumber/smallerNumber)
    setMathProblem(`${biggerNumber} ÷ ${smallerNumber}`)
    setAnswer(answer)
  }

  const generateMathProblem = () => {
    const problems = []
    if (settings.addition.use) problems.push(generateAdditionProblem)
    if (settings.subtraction.use) problems.push(generateSubtractionProblem)
    if (settings.multiplication.use) problems.push(generateMultiplicationProblem)
    if (settings.division.use) problems.push(generateDivisionProblem)
    if(problems.length === 0) return
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
    setResponse(null)
  }


  const tryAgain = () => {
    setIsWrong(false)
    setResponse(null)
    resetMathProblem()
  }

  const resetMathProblem = () => {
    const i = mathProblem.indexOf('≠')
    if (i > -1)
      setMathProblem(mathProblem.substr(0, i - 1))
  }

  const getConfig = () => {
    let settings = localStorage.getItem('settings')
    if(!settings) settings = defaultSettings
    else settings = JSON.parse(settings)
    updateSettings(settings)
  }

  const setSettingsUseOperation = (operation, use) => {
    const _settings = JSON.parse(JSON.stringify(settings))
    _settings[operation].use = use
    updateSettings(_settings)
  }

  const setSettingsOperationMax = (operation, max) => {
    const _settings = JSON.parse(JSON.stringify(settings))
    if(max === '0') return
    _settings[operation].max = !isNaN(max) ? parseInt(max) : max
    updateSettings(_settings)
  }

  const updateSettings = (s) => {
    localStorage.setItem('settings', JSON.stringify(s))
    setSettings(s)
  }

  useEffect(() => {
    if (isWrong) {
      const timer = setTimeout(() => {
        resetMathProblem()
        setResponse(null)
        setIsWrong(false)
        setIsCorrect(false)
      }, wrong_duration)
      return () => clearTimeout(timer)
    }
  }, [isWrong])

  useEffect(() => {
    if (!showSettings) {
      if (!settings.addition.use && !settings.subtraction.use && !settings.multiplication.use && !settings.division.use)
        setSettingsUseOperation('addition', true)
      startOver()
    }
  }, [showSettings])

  // do on initial load only  
  useEffect(() => {
    getConfig()
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
        showSettings,
        setShowSettings,
        digitPress,
        checkResponse,
        isWrong,
        setIsWrong,
        isCorrect,
        setIsCorrect,
        startOver,
        resetMathProblem,
        tryAgain,
        settings,
        setSettingsUseOperation,
        setSettingsOperationMax,
        wrong_duration
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
