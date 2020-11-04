import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { RepoDetails } from './RepoDetails'
import { Search } from './Search'

const App = () => {
  return (
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/repository" component={RepoDetails} />
      <Redirect to="/search" />
    </Switch>
  )
}

export default App
