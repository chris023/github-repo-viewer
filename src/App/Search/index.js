import React, { useState } from 'react'

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
      <SearchInput setResults={setResults} />
      <SearchResults results={results} />
    </div>
  )
}

export { Search }
