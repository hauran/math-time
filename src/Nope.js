import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const gifs = ['26xBIgTMTE5b3Ware', 'XwnxEG9365aMw', 'l378nu4kJajdfCvUk']

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

const Gify = props => {
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

export default Gify
