import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const gifs = [
  'Wp5CIL0eQj8D6',
  '1ZostJS3YDb34j0D7s',
  'pOTEhtq8Jv7voNl7mb',
  'W6aQJOobbZ8BboYFY4',
  '1oInQF9RIwD1VXe8Ha',
  'u47vUoXTLfLCWP7bt4',
  '2YpXAHspGxLszFs25W',
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
  '3ohs4C4pHiR4xE70qc'
]

const Container = styled.div`
  @media (min-width: 48em) {
    width: 450px;
  }
  @media (max-width: 48em) {
    width: 50vw;
  }

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Yes = props => {
  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }
  const [gif, setGif] = useState(null)

  useEffect(() => {
    const x = randomGif()
    setGif(`https://i.giphy.com/media/${x}/giphy.webp`)
  }, [])

  return (
    <Container>
      <img src={gif} alt="nope" />
    </Container>
  )
}

export default Yes
