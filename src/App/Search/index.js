import React from 'react'

import { SearchInput } from '../../Components'
import { useStyles } from './style'

const Search = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SearchInput />
    </div>
  )
}

export { Search }
