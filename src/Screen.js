import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './AppContext'
const Container = styled.div`
  width: 100%;
  border: none;
  background-color: #252525;
  color: #fff;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;

  /* desktop */
  @media screen and (min-device-width: 1200px) {
    height: 80px;
    font-size: 5em;
  }

  /* tablet */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height: 80px;
    font-size: 5em;
  }

  /* phone */
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    height: 70px;
    font-size: 3.5em;
  }
`

const Digit = props => {
  const {
    response,
  } = useContext(AppContext)
  return (
    <Container onClick={props.onClick}>{response}</Container>
  )
}

export default Digit
