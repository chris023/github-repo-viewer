import React, { useState } from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { CustomHookProvider } from '../utils'
import { RepoDetails } from './RepoDetails'
import { Search } from './Search'
import { state } from './state'
import { useStyles } from './style'

const App = () => {
  const classes = useStyles()
  const stateHook = useState(state)

  return (
    <div className={classes.root}>
      <CustomHookProvider hook={stateHook}>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/repository" component={RepoDetails} />
          <Redirect to="/search" />
        </Switch>
      </CustomHookProvider>
    </div>
  )
}

export default App
