import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { CustomHookProvider } from '../utils'
import { RepoDetails } from './RepoDetails'
import { Search } from './Search'
import { useStyles } from './style'

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CustomHookProvider>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/repository/:id" component={RepoDetails} />
          <Redirect to="/search" />
        </Switch>
      </CustomHookProvider>
    </div>
  )
}

export default App
