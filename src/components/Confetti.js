import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position:absolute;
  top:0;
  left:0;
  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);
  background-repeat: repeat-x;
  /* desktop */
  @media (min-width: 769px) {
    background-size: contain;
  }
  /* tablet & mobile */
  @media (max-width: 768px) {
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
