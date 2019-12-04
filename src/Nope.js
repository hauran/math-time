import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { AppContext } from './AppContext'

const gifs = [
  '26xBIgTMTE5b3Ware',
  'XwnxEG9365aMw',
  'l378nu4kJajdfCvUk',
  'mcsE75zh9etKE',
  '3o7aCYje2hvVsaTpio',
  'QObQirfaL3arJiKxeW',
  'llXSgLPOy6DfCNcJDp',
  '4KFwpiwm1JYEZi5Gsq',
  '28j6GjBumA7ZKmaKI9',
  '9oICl27yHGp3wAXUW6',
  '3d6WSrv3PbyZq1vdjC',
  '3og0ILLYnJryuFD7Gw',
  '3ohhwkMaNYF1TA0NJS',
  'EEFEyXLO9E0YE',
  '1d5ZfBGrEQXfzx4sYf'
]

const Container = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform:translate3d(0, -300px, 0);
  transition: transform .2s ease-in-out;
  position:absolute;
  left:0; right:0;
  & img {
    max-width: 100%;
    max-height: 100%;
    height:230px;
    margin-top:20px;
  }
  &.show {
    transform:translate3d(0, 0, 0);
  }
`

const Gify = props => {
  const {
    setIsWrong, isWrong, wrong_duration, setResponse, resetMathProblem
  } = useContext(AppContext)
  
  const [gif, setGif] = useState(null)
  const [show, setShow] = useState(false)
  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }

  useEffect(() => {
    if (isWrong) {
      const x = randomGif()
      setGif(`https://i.giphy.com/media/${x}/giphy.gif`)

      const s = setTimeout(() => {
        setShow(true)
        const h = setTimeout(() => {
          setShow(false)
        }, wrong_duration-250)
        return () => clearTimeout(h)
      }, 100);
      return () => clearTimeout(s);
    }
  }, [isWrong])

  const reset = () => {
    setShow(false)
    setIsWrong(false)
    setResponse(null)
    resetMathProblem()
  }

  return (
    <Container className={classnames({ show: show })} onClick={reset}>
      <img src={gif} alt="nope" />
    </Container>
  )
}

export default Gify
