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
  '5e1UBubfNAM2BSnwmF',
  'l4pSWqoUxbgL5B9S0',
  'ZeEDEW0CsoRJ6',
  '9FpDeOvKOts5y',
  'oz45ELYgMoYVsZqmor',
  '3YHsKK4VIb70RMfBlX',
  '2ieYd6DY1iS8y4arB2',
  'TgVBx3Y6VM49HLuZri',
  'VxFrlqO1mVzmE',
  'jpuJkyuJUEHNc62H0L',
  'ujTV0zime3Qxfns0DL',
  'Wq9FnoYuvzrjEgZTkb',
  'gLEt5YXtyV1FOSr8K9',
  'pOqOGrDRh0SkvLoOh6',
  'lSgt9DJOZeBoGGXv2o',
  '1ymqOsKqLqna4YLKCE',
  '4KFvWyb6izh6e0spNL',
  '51UtVbQK372Kv1N1Ms',
  '1Bf00ajBXG10XPEoV9',
  '8TCWcOcocBO3UuxuDt',
  '1pnye1n5EWWHTu93Ly',
  'mIElqgnBjaprEHTOY1',
  '2Ys9oIKMwdWxy4MxjK',
  '1AgCRUfQhu7QdwPEm4',
  '9x55tYxEVrI04pKHl1',
  'l378zKVk7Eh3yHoJi',
  'cnQcCcz8BpJiiyNX2Q',
  'ZCldwd8JpfXgY',
  'ftMvs2Z7oECN0W0A0t',
  'JstNscBNrecbJOWryt',
  '40a347YQBKFOuzQweW',
  'cnnjPX5DYXgB6MfrU3',
  'x49DCuOOBiurrmlEov',
  'i2oemhIwuZHIQ'
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
