import React, { useState } from 'react'

import { Divider, InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { useGlobalState } from '../../utils'
import { LanguageMenu } from './LanguageMenu'
import { useStyles } from './style'

const SearchInput = () => {
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('')
  const { setQuery } = useGlobalState()

  const onSubmit = (e) => {
    e.preventDefault()

    setQuery((prev) => ({ ...prev, search: inputValue, page: 1 }))
  }

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={onSubmit}
      data-testid="cy-search-input"
    >
      <LanguageMenu />
      <Divider orientation="vertical" style={{ height: 36 }} />
      <InputBase
        className={classes.input}
        placeholder="Search Github Repositories"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export { SearchInput }
