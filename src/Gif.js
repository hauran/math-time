import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index:1;
  @media (min-width: 48em) {
    width: ${props => `${props.wDesktop}px`};
  }
  @media (max-width: 48em) {
    width: ${props => `${props.wMobile}px`};
  }

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`

const ErrorX = props => {
  return (
    <Container wDesktop={props.wDesktop} wMobile={props.wMobile}>
      <img
        src={`https://i.giphy.com/media/${props.id}/giphy.gif`}
        alt={props.alt}
        style={props.style}
      />
    </Container>
  )
}

// 3og0IvGtnDyPHCRaYU
export default ErrorX
