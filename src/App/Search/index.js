import React, { useState } from 'react'

import { Typography } from '@material-ui/core'

import { SearchInput, SearchResults } from '../../Components'
import { useStyles } from './style'

const Search = () => {
  const classes = useStyles()

  // eslint-disable-next-line no-unused-vars
  const [results, setResults] = useState({
    loading: false,
    error: false,
    data: undefined,
  })

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Useless But Sick Repo Searcher
      </Typography>
      <SearchInput setResults={setResults} />
      <SearchResults results={results} />
    </div>
  )
}

export { Search }
