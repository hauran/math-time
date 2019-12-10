import { range } from 'lodash'
import primes from './primeNumbers'

const randomNumber = max_value => {
  return Math.floor(Math.random() * max_value + 1)
}

const generateAdditionProblem = (settings, setMathProblem, setAnswer) => {
  const max_value = settings.addition.max
  const num1 = randomNumber(max_value)
  const num2 = randomNumber(max_value)
  const answer = num1 + num2
  setMathProblem(`${num1} + ${num2}`)
  setAnswer(answer)
}

const generateSubtractionProblem = (settings, setMathProblem, setAnswer) => {
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

const generateMultiplicationProblem = (settings, setMathProblem, setAnswer) => {
  const max_value = settings.multiplication.max
  let num1 = randomNumber(max_value)
  let num2 = randomNumber(max_value)
  const answer = num1 * num2
  setMathProblem(`${num1} x ${num2}`)
  setAnswer(answer)
}

const generateDivisionProblem = (settings, setMathProblem, setAnswer) => {
  const max_value = settings.division.max
  let num1 = randomNumber(max_value)
  while (primes.includes(num1)) num1 = randomNumber(max_value)
  const numbers = range(2, num1)
  const multiplesOf = numbers.filter(n => !(num1 % n))
  const num2 = multiplesOf[randomNumber(multiplesOf.length) - 1]
  const answer = parseInt(num1 / num2)
  setMathProblem(`${num1} ÷ ${num2}`)
  setAnswer(answer)
}

const generateMathProblem = (settings, setMathProblem, setAnswer) => {
  const problems = []
  if (settings.addition.use) problems.push(generateAdditionProblem)
  if (settings.subtraction.use) problems.push(generateSubtractionProblem)
  if (settings.multiplication.use) problems.push(generateMultiplicationProblem)
  if (settings.division.use) problems.push(generateDivisionProblem)
  if (problems.length === 0) return
  return problems[randomNumber(problems.length) - 1](settings, setMathProblem, setAnswer)
}

export default generateMathProblem