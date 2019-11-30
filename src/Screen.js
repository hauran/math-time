import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from './AppContext'
const Container = styled.div`
  width: 100%;
  font-size: 5rem;
  height: 80px;
  border: none;
  background-color: #252525;
  color: #fff;
  padding: 10px 30px;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`

const Digit = props => {
  const {
    response,
  } = useContext(AppContext)
  return (
    <Container>{response}</Container>
  )
}

export default Digit
