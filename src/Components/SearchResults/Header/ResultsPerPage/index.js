import React, { useState } from 'react'

import { List, ListItem, Menu, MenuItem, Paper } from '@material-ui/core'
import ArrowDownIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'

import { useStyles } from './style'

const sizes = [10, 15, 50, 100]

const ResultsPerPage = ({ useQuery }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(null)
  const [query, setQuery] = useQuery

  const select = (size) => () =>
    setQuery((prev) => ({ ...prev, pageSize: size }))

  return (
    <>
      <List component={Paper} disablePadding>
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