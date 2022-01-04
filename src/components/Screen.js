import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../AppContext'
const ClearContainer = styled.div`
  position: absolute;
  padding: 5px;
  right: 0px;
  top: 0px;
`
const Clear = styled.div`
  color: #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  /* desktop */
  @media (min-width: 769px) {
    font-size: 16px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

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
  position: relative;
  height: 80px;

  /* desktop */
  @media screen and (min-device-width: 1200px) {
    font-size: 5em;
  }

  /* tablet */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    font-size: 5em;
  }

  /* phone */
  @media only screen and (max-device-width: 768px) {
    height: 70px;
    font-size: 3.5em;
  }
`

const Digit = (props) => {
  const { response } = useContext(AppContext)
  return (
    <Container>
      <>
        {response}
        {response && (
          <ClearContainer onClick={props.onClick}>
            <Clear>✖</Clear>
          </ClearContainer>
        )}
      </>
    </Container>
  )
}

export default Digit
