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

const Check = props => {
  return (
    <Container>
      <img src="https://i.giphy.com/media/8PmStlLCFNZrs35q5c/giphy.gif" alt="start over" />
    </Container>
  )
}

export default Check
