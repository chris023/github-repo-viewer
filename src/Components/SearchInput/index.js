import React, { useState } from 'react'

import { InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { searchGithubRepos } from '../../utils'
import { useStyles } from './style'

const SearchInput = ({ setResults }) => {
  const classes = useStyles()
  const [query, setQuery] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (query?.length) {
      setResults((prev) => ({ ...prev, loading: true }))

      searchGithubRepos(query)
        .then((response) => response.json())
        .then((data) => setResults((prev) => ({ ...prev, data })))
        .catch((error) => setResults((prev) => ({ ...prev, error })))
        .finally(() => setResults((prev) => ({ ...prev, loading: false })))
    }
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Search Github Repositories"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export { SearchInput }
