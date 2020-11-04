import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { RepoDetails } from './RepoDetails'
import { Search } from './Search'
import { useStyles } from './style'

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/repository" component={RepoDetails} />
        <Redirect to="/search" />
      </Switch>
    </div>
  )
}

export default App
