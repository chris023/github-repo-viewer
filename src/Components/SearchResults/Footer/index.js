import React from 'react'

import { Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { useGlobalState } from '../../../utils'
import { useStyles } from './style'

const Footer = () => {
  const classes = useStyles()
  const { query, setQuery } = useGlobalState()

  const back = () => {
    if (query.page > 1) {
      setQuery((prev) => ({ ...prev, page: prev.page - 1 }))
    }
  }

  const next = () => {
    setQuery((prev) => ({ ...prev, page: prev.page + 1 }))
  }

  return (
    <div className={classes.root}>
      <Paper
        component="button"
        elevation={0}
        className={classes.button}
        onClick={back}
      >
        <ArrowBackIcon />
      </Paper>

      <Paper variant="outlined" className={classes.button}>
        Page: {query.page}
      </Paper>

      <Paper
        component="button"
        elevation={0}
        className={classes.button}
        onClick={next}
      >
        <ArrowForwardIcon />
      </Paper>
    </div>
  )
}

export { Footer }
