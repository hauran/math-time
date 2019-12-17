import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import { AppContext } from '../AppContext'

const gifs = [
  '26xBIgTMTE5b3Ware',
  'XwnxEG9365aMw',
  'l378nu4kJajdfCvUk',
  'mcsE75zh9etKE',
  '3o7aCYje2hvVsaTpio',
  'QObQirfaL3arJiKxeW',
  'llXSgLPOy6DfCNcJDp',
  '4KFwpiwm1JYEZi5Gsq',
  '28j6GjBumA7ZKmaKI9',
  '9oICl27yHGp3wAXUW6',
  '3d6WSrv3PbyZq1vdjC',
  '3og0ILLYnJryuFD7Gw',
  '3ohhwkMaNYF1TA0NJS',
  'EEFEyXLO9E0YE',
  '1d5ZfBGrEQXfzx4sYf',
  'oX90d6Bqef02AmU45H',
  '3og0IJHMqlmPzy7sGs',
  'l378yQjDMER6TR8Q0',
  'xT9IgGdsbmikX5wW4M',
  'YneftWBHs3qmifiI1I',
  '3Hxy8wKadIdMjRXc9k',
  '26vIfVoRG8NrbjfQQ',
  'l1J9EItyIZFodSNqg',
  'SYlo8PolAVDkQ',
  'LT5oQB6JY9A97Hlx6R',
  '1VWybIFCQdLJblbPHu',
  'SvciJUUsnE2iYFDIpm',
  'zfKMfT85E2JJm',
  '10UGj1H0J40JxK',
  'vcC7toES0gZq',
  'fCb8FBfkMCRzy',
  'l3V0mVZqZONZSsx5C',
  '1361EDTRvnRRza',
  'LXy9atSZqVXMY',
  'S4AxU8ZHb0KQQtWW30',
  'ZxVNFSvi71Oy7r17c9',
  'QZUpRxZSaqNa5eXzku',
  'ZedIV6kL34KG27MTnb',
  'VCt4exaVmW2sxFbv5z',
  '2rAyK0sx8Zqb3o6p3D',
  '3o7TKBxS1HArb73Pz2',
  '26xBvIRIPi7C2mem4',
  'ZgTzOTkabbk0zi3rU2',
  'hqUUf3uBeJ0PLn9Qr5',
  'dt6FPWcT2Ck3oE49Wv',
  '1ZnIdpgcI3roMnL5nl',
  'h59nN40mHLwRkCDX9k'
]

const Container = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform:translate3d(0, -300px, 0);
  transition: transform .2s ease-in-out;
  position:absolute;
  left:0; right:0;
  & img {
    max-width: 100%;
    max-height: 100%;
    height:230px;
    margin-top:20px;
  }
  &.show {
    transform:translate3d(0, 0, 0);
  }
`

const Nope = props => {
  const {
    isWrong, wrong_duration, tryAgain
  } = useContext(AppContext)
  
  const [gif, setGif] = useState(null)
  const [show, setShow] = useState(false)

  const randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)]
  }
  
  useEffect(() => {
    const x = randomGif()
    setGif(`https://i.giphy.com/media/${x}/giphy.gif`)

    let s, h 
    s = setTimeout(() => {
      setShow(true)
      h = setTimeout(() => {
        setShow(false)
      }, wrong_duration-250)
      return () => clearTimeout(h)
    }, 100);

    return () => {
      if (s) clearTimeout(s)
      if (h) clearTimeout(h)
    }
  }, [isWrong, wrong_duration])

  const reset = () => {
    setShow(false)
    tryAgain()
  }

  return (
    <Container className={classnames({ show: show })} onClick={reset}>
      <img src={gif} alt="nope" />
    </Container>
  )
}

export default Nope
