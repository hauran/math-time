import React, { Component } from 'react'
import { AppProvider } from './AppContext'

import Content from './Content'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Content />
      </AppProvider>
    )
  }
}

export default App
