import React, { useState } from 'react'

import { Divider, InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { LanguageMenu } from './LanguageMenu'
import { useStyles } from './style'

const SearchInput = ({ useQuery }) => {
  const classes = useStyles()
  const [inputValue, setInputValue] = useState('')

  const [, setQuery] = useQuery

  const onSubmit = (e) => {
    e.preventDefault()

    setQuery((prev) => ({ ...prev, search: inputValue, page: 1 }))
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <LanguageMenu useQuery={useQuery} />
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
