import React, { useState, useEffect } from 'react'

import { Typography } from '@material-ui/core'

import { SearchInput, SearchResults } from '../../Components'
import { searchGithubRepos, sortMethods } from '../../utils'
import { useStyles } from './style'

const Search = () => {
  const classes = useStyles()
  const [query, setQuery] = useState({
    query: '',
    language: 'All',
    sort: sortMethods[0],
  })
  const [results, setResults] = useState({
    loading: false,
    error: false,
    data: undefined,
  })

  const search = (query) => {
    if (query?.query?.length) {
      setResults((prev) => ({ ...prev, loading: true }))

      searchGithubRepos(query)
        .then((response) => response.json())
        .then((data) => setResults((prev) => ({ ...prev, data })))
        .catch((error) => setResults((prev) => ({ ...prev, error })))
        .finally(() => setResults((prev) => ({ ...prev, loading: false })))
    }
  }

  useEffect(() => search(query), [query])

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Useless But Sick Repo Searcher
      </Typography>
      <SearchInput useQuery={[query, setQuery]} />
      <SearchResults useQuery={[query, setQuery]} results={results} />
    </div>
  )
}

export { Search }
