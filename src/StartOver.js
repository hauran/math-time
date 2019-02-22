import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 50px;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

const StartOver = props => {
  return (
    <Container>
      <img src="https://i.giphy.com/media/2wY28XHCbVrgwS5wEr/giphy.webp" alt="start over" />
    </Container>
  )
}

export default StartOver
