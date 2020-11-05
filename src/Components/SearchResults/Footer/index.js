import React from 'react'

import { Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { useStyles } from './style'

const Footer = ({ useQuery }) => {
  const classes = useStyles()
  const [query, setQuery] = useQuery

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

      <Paper elevation={4} className={classes.button}>
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
