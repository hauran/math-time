import React  from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'

import 'react-toggle/style.css'

const Container = styled.section`
  border-top:1px solid rgba(22, 154, 171, 1);
  padding:10px;
`
const Title = styled.h2`
  display: inline;
  font-size: 1.1em;
  margin: -2px 0 0 10px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`
const Content = styled.section`
  padding:10px 0;
`
const Max = styled.input`
  padding: 8px 10px;
  font-size: 1.1em;
  letter-spacing: 3px;
  width: 80px;
  margin-left:10px;
`

const Hint = styled.div`
  font-size:12px;
  font-style:italic;
  color:rgba(0,0,0,0.7);
  margin-top:-3px;
`

const Operation = props => {
  const { hint, use, setUse, max, setMax, title} = props
  return (
    <Container>
      <Header>
        <label >
          <Toggle checked={use} icons={{ unchecked: false }} onChange={() => setUse(!use)} />
        </label>
        <Title onClick={() => setUse(!use)}>{title}</Title>
      </Header>

      {use ? <Content>
        Maximum Value:
        <Max type='number' value={max || ''} onChange={e => setMax(e.target.value)} />
      </Content>  
      :null}

      {hint ? <Hint>
        For division, try to use a larger number. There's only so many ways to be able to divide 10.  Ya' know?
      </Hint>
        : null}
    </Container>
  )
}


export default Operation
