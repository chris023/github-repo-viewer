import React, { useState } from 'react'

import { List, ListItem, Menu, MenuItem, Paper } from '@material-ui/core'
import ArrowDownIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'

import { useGlobalState } from '../../../../utils'
import { useStyles } from './style'

const sizes = [10, 15, 50, 100]

const ResultsPerPage = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(null)
  const { query, setQuery } = useGlobalState()

  const select = (size) => () =>
    setQuery((prev) => ({ ...prev, pageSize: size }))

  return (
    <>
      <List component={Paper} disablePadding className={classes.root}>
        <ListItem button onClick={(e) => setOpen(e.currentTarget)}>
          Per Page: {query.pageSize} <ArrowDownIcon />
        </ListItem>
      </List>
      <Menu anchorEl={open} open={Boolean(open)} onClose={() => setOpen(null)}>
        {sizes.map((size, i) => (
          <MenuItem
            key={`size-${i}`}
            onClick={select(size)}
            className={clsx(
              query.pageSize === size && classes.menuItemSelected,
            )}
          >
            {size}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export { ResultsPerPage }
