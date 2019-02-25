import React, { Component } from 'react'
import { AppProvider } from './AppContext'
// import { AppContext, appStore } from './AppStore'

import Content from './Content'

class App extends Component {
  render() {
    return (
      <AppProvider>
        {/* <AppContext.Provider value={appStore}> */}
        <Content />
        {/* </AppContext.Provider> */}
      </AppProvider>
    )
  }
}

export default App
