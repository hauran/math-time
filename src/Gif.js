import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index:1;
  /* desktop */
  @media (min-width: 769px) {
    width: ${props => `${props.wDesktop}px`};
  }
  /* tablet & phone */
  @media (max-width: 768px) {
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
