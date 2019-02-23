import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  z-index: 1;
  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);
  background-repeat: repeat-x;
  @media (min-width: 48em) {
    background-size: contain;
  }
  @media (max-width: 48em) {
    background-size: cover;
  }
`

const Confetti = props => {
  return (
    <Container
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")'
      }}
    />
  )
}

export default Confetti
