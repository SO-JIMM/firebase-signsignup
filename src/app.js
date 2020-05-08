import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header.component'
import HomePage from './pages/home.page'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
