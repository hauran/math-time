import { createContext } from 'react'
import { makeObs } from 'react-obs'

const MAX_VALUE = 20

const generateMathProblem = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * MAX_VALUE + 1)
  }

  let num1 = randomNumber()
  let temp = randomNumber()
  while (temp === num1) {
    temp = randomNumber()
  }
  const answer = num1 > temp ? num1 : temp
  num1 = num1 > temp ? temp : num1
  const num2 = answer - num1
  return [`${num1} + ${num2}`, answer]
}

class AppStore {
  mathProblem = makeObs(generateMathProblem())
}
export const appStore = new AppStore()
// we pass appStore here just for intellisense, but the real value is passed to the Provider
export const AppContext = createContext(appStore)
