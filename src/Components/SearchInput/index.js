import React, { useState, useEffect } from 'react'

import { Divider, InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { searchGithubRepos } from '../../utils'
import { LanguageMenu } from './LanguageMenu'
import { useStyles } from './style'

const SearchInput = ({ setResults }) => {
  const classes = useStyles()
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState('All')

  const search = (...props) =>
    searchGithubRepos(...props)
      .then((response) => response.json())
      .then((data) => setResults((prev) => ({ ...prev, data })))
      .catch((error) => setResults((prev) => ({ ...prev, error })))
      .finally(() => setResults((prev) => ({ ...prev, loading: false })))

  useEffect(() => query?.length && search(query, language), [language])

  const onSubmit = (e) => {
    e.preventDefault()

    if (query?.length) {
      setResults((prev) => ({ ...prev, loading: true }))
    }

    search(query, language)
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <LanguageMenu language={language} setLanguage={setLanguage} />
      <Divider orientation="vertical" style={{ height: 36 }} />
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
