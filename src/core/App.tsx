import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import AppRouting from './modules/app/components/AppRouting'
import { GlobalStyles } from './styles/reset'
import { appHistory } from './utils/appHistory'
import { configureAppStore } from './utils/configureAppStore'

const store = configureAppStore()

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <AppRouting />
        </ConnectedRouter>
      </Provider>
    </>
  )
}

export default App
