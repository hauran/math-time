import React, { createContext, useState, useEffect } from 'react'
import isTouchDevice from 'is-touch-device'
import generateMathProblem from './mathStuff/generateMath'

const AppContext = createContext()
const wrong_duration = 2250
const timer_mode_length = 120
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
    max: 25
  }
}


const AppProvider = props => {
  const [touchDevice, setTouchDevice] = useState(null)
  const [mathProblem, setMathProblem] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [response, setResponse] = useState(null)
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [correctCount, setCorrectCount] = useState(null)
  const [mathProblemCount, setMathProblemCount] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState(null)
  const [mode, setMode] = useState(null)
  const [secondsRemaining, setSecondsRemaining] = useState(null)

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
      setCorrectCount(correctCount + 1)
      setIsCorrect(true)
    }
    else {
      setMathProblem(`${mathProblem} ≠ ${response}`)
      setIsWrong(true)
      setIsCorrect(false)
    }
  }

  const startOver = () => {
    generateMathProblem(settings, setMathProblem, setAnswer)
    setIsWrong(false)
    setIsCorrect(false)
    setResponse(null)
    setMathProblemCount(mathProblemCount + 1)
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

  const getSettings = () => {
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

  const startTimer = () => {
    setSecondsRemaining(timer_mode_length)
  }

  const playAgain = () => {
    setCorrectCount(0)
    setMathProblemCount(0)
    setSecondsRemaining(null)
    startOver()
  }

  // initial load
  useEffect(() => {
    getSettings()
    setTouchDevice(isTouchDevice())
  }, [])


  // only when settings are loaded
  useEffect(() => {
    if (settings && !mathProblem){
      setMathProblemCount(mathProblemCount + 1)
      generateMathProblem(settings, setMathProblem, setAnswer)
    }
  }, [settings])


  // when settings are closed, generate problem
  useEffect(() => {
    if (settings && !showSettings) {
      if (!settings.addition.use && !settings.subtraction.use && !settings.multiplication.use && !settings.division.use)
        setSettingsUseOperation('addition', true)
      startOver()
    }
  }, [showSettings])


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

  // timer mode
  useEffect(() => {
    if (secondsRemaining && secondsRemaining > 0)
      setTimeout(() => setSecondsRemaining(secondsRemaining - 1),1000)
  }, [secondsRemaining])


  return (
    <AppContext.Provider
      value={{
        touchDevice,
        answer,
        response,
        setResponse,
        mathProblem,
        showSettings,
        setShowSettings,
        digitPress,
        checkResponse,
        isWrong,
        setIsWrong,
        isCorrect,
        setIsCorrect,
        startOver,
        tryAgain,
        settings,
        setSettingsUseOperation,
        setSettingsOperationMax,
        wrong_duration,
        mode,
        setMode,
        secondsRemaining,
        startTimer,
        timer_mode_length,
        correctCount,
        mathProblemCount,
        playAgain
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
