import React, { useEffect } from 'react'

import { Typography } from '@material-ui/core'

import { SearchInput, SearchResults } from '../../Components'
import { searchGithubRepos, useGlobalState } from '../../utils'
import { useStyles } from './style'

const Search = () => {
  const classes = useStyles()
  const { query, setResults } = useGlobalState()

  const search = (query) => {
    if (query.search?.length) {
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
      <SearchInput />
      <SearchResults />
    </div>
  )
}

export { Search }
