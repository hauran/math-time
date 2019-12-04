import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { AppContext } from './AppContext'

const gifs = [
  'Wp5CIL0eQj8D6',
  '1ZostJS3YDb34j0D7s',
  'pOTEhtq8Jv7voNl7mb',
  'W6aQJOobbZ8BboYFY4',
  '1oInQF9RIwD1VXe8Ha',
  'u47vUoXTLfLCWP7bt4',
  '5vidmYpnogEo8chJcx',
  'l4pTfLGPVb6KM3jmU',
  'jVTEgn7a5nkvGn3069',
  'iEbPnIPyh9Exq',
  '4NWT0Ry3dtTLW',
  '3oFzmcl7D4fv7BSW4w',
  'bg283WKwSbH3i',
  'Jlys8jzFoI8ne',
  'JoaeMGYYkHpC',
  '3ohs7WhawOVfLMJ14c',
  '3ohs4C4pHiR4xE70qc',
  '1d9qTol1d5xZCTkwIA',
  'ygx4FycuFuEnl5lpwh',
  '6InGIyfwSIoIU',
  '3oKIPv4pMwu3NQtKhO',
  'nvKjkfWIl2msw',
  'rPGkUqdQkB7xe',
  'W0DTCPYu9vrhu',
  'YS3j8cDQ5Ff68',
  '2zoLjKxnxHYS5fTJrr',
  '5e1UBubfNAM2BSnwmF'
]

const Container = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform:translate3d(0, -470px, 0);
  transition: transform .2s ease-in-out;
  position:absolute;
  left:0; right:0;
  & img {
    max-width: 100%;
    max-height: 100%;
    height:400px;
    margin-top:20px;
  }
  &.show {
    transform:translate3d(0, 0, 0);
  }
`

const Yes = props => {
  const {
    startOver, isCorrect
  } = useContext(AppContext)

  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }

  const [gif, setGif] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isCorrect) {
      const x = randomGif()
      setGif(`https://i.giphy.com/media/${x}/giphy.gif`)
      const s = setTimeout(() => {
        setShow(true)
      }, 100);
      return () => clearTimeout(s);
    }
  }, [isCorrect])

  return (
    <Container onClick={startOver} className={classnames({ show: show })}>
      <img src={gif} alt="yes" />
    </Container>
  )
}

export default Yes
