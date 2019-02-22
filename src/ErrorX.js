import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  @media (min-width: 48em) {
    width: 100px;
  }
  @media (max-width: 48em) {
    width: 45px;
  }

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

const ErrorX = props => {
  return (
    <Container>
      <img src="https://i.giphy.com/media/3og0IvGtnDyPHCRaYU/giphy.gif" alt="start over" />
    </Container>
  )
}

export default ErrorX
