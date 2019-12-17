import React, { useContext } from 'react'
import Gif from './Gif'
import Home from './Home'

import styled from 'styled-components'

import { AppContext } from '../AppContext'

const gifs = [
  'l1l9jSfkJ2NuLM01OZ',
  'Rfl0RYrMdC3YbVrXtQ',
  '7YBJwWrTZEYoXSphx5',
  '3owypcn3q5lmUURlbG',
  'StXFAImziJyPZM7xtI',
  '7YBJwWrTZEYoXSphx5',
  'j2TDpEysH8hRFVKSO4',
  'ftMuBbRQY1VimqAZJN',
  '9PmfhA8rQzqGroYgYj'
]

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  flex: 1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top:10px;
`

const Huge = styled.div`
  font-size:4em;
  display:inline;
  font-weight:bold;
`
const Big = styled.div`
  font-size:3em;
  margin-left: 10px;
  display:inline;
`

const Bottom = styled.div`
  flex:1;
  display: flex;
  justify-content:flex-end;
  flex-direction:column;
`

const Button = styled.div`
  margin:20px 0;
  background-color: rgba(99, 205, 218, 1);
  border-radius: 20px;
  border: 5px dashed rgba(0, 0, 0, 0.4);
  font-size: 2em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content:center;
  /* desktop */
  @media (min-width: 769px) {
    /* padding: 30px;
    max-width: 800px; */
    padding: 20px;
  }
  /* tablet & phone */
  @media (max-width: 768px) {
    /* margin-top: -50px;
    padding: 15px;
    width: 80vw; */
    padding: 15px;
  }
`

const Results = () => {
  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }

  const {
    mode, secondsRemaining, correctCount, playAgain
  } = useContext(AppContext)


  return (
    <>
    {mode=== 'timer' && secondsRemaining===0 ? 
      <Container>
          <Gif id={randomGif()} wDesktop={300} wMobile={300}></Gif>
          <div style={{marginTop:-15}}><Huge>{correctCount || 0 }</Huge><Big>correct</Big></div>
          <Bottom>
            <div style={{flex:1}}></div>
            <Button onClick={playAgain}>Play Again <Gif id='1fiIjGnEGUObilCOE2' wDesktop={80} wMobile={80} /></Button>
          </Bottom>
          <Home />
      </Container>
    :null}
    </>
  )
}

export default Results
