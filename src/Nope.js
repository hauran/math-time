import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  '3d6WSrv3PbyZq1vdjC'
]

const Container = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 48em) {
    width: 450px;
    margin-top: 250px;
  }
  @media (max-width: 48em) {
    width: 50vw;
  }

  & img {
    max-width: 100%;
    max-height: 100%;
    width: 40vw;
  }
`

const Gify = props => {
  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }
  const [gif, setGif] = useState(null)

  useEffect(() => {
    const x = randomGif()
    setGif(`https://i.giphy.com/media/${x}/giphy.gif`)
  }, [])

  return (
    <Container>
      <img src={gif} alt="nope" />
    </Container>
  )
}

export default Gify
