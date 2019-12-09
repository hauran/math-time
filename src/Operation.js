import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'

import { AppContext } from './AppContext'
import 'react-toggle/style.css'

const Container = styled.section`
  border-top:1px solid rgba(22, 154, 171, 1);
  padding:10px;
`
const Title = styled.h2`
  display: inline;
  font-size: 1.2em;
  margin: -2px 0 0 10px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`
const Content = styled.section`
  padding:15px 0;
`
const Max = styled.input`
  padding: 10px;
  font-size: 1.2em;
  letter-spacing: 3px;
  width: 85px;
  margin-left:10px;
`

const Operation = props => {
  const { use, setUse, max, setMax} = props

  return (
    <Container>
      <Header>
        <label >
          <Toggle checked={use} icons={{ unchecked: false }} onChange={() => setUse(!use)} />
        </label>
        <Title onClick={() => setUse(!use)}>{props.title}</Title>
      </Header>

      {use ? <Content>
        Maximum Value:
        <Max type='number' value={max || ''} onChange={e => setMax(e.currentTarget.value)}/>
      </Content>
      :null}
    </Container>
  )
}


export default Operation
