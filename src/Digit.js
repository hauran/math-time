import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 1;
  background-color: #252525;
  color: #fff;
  border-radius:5px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:700;
  
  &:hover, &:active {
    background-color: #333333;
  }

  /* desktop */
  @media (min-width: 769px) {
    height: 70px;
    font-size:25px;
  }
  /* tablet */
  @media (max-width: 768px) {
    height: 70px;
    font-size:25px
  }
  /*  phone */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) { 
      height: 60px;
      font-size:20px
  }
`

const Digit = props => {
  return (
    <Container style={{...props.style}} onClick={props.onClick}>{props.children}</Container>
  )
}

export default Digit
