import React, { useEffect, useState } from 'react'

const gifs = ['26xBIgTMTE5b3Ware', 'XwnxEG9365aMw', 'l378nu4kJajdfCvUk']

const Gify = props => {
  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }
  const [gif, setGif] = useState(null)

  useEffect(() => {
    const x = randomGif()
    setGif(`https://i.giphy.com/media/${x}/giphy.webp`)
  }, [])

  return <img src={gif} height="450" width="450" alt="nope" />
}

export default Gify
