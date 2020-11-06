import React, { useState } from 'react'

import { List, ListItem, Menu, MenuItem, Paper } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Done'
import ArrowDownIcon from '@material-ui/icons/ExpandMore'

import clsx from 'clsx'

import { sortMethods, useGlobalState } from '../../../../utils'
import { useStyles } from './style'

const SortBy = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(null)
  const { query, setQuery } = useGlobalState()

  const select = (method) => () => {
    setQuery((prev) => ({ ...prev, sort: method }))
    setOpen(null)
  }

  return (
    <div className={classes.root}>
      <List
        disablePadding
        className={classes.list}
        onClick={(e) => setOpen(e.currentTarget)}
        component={Paper}
      >
        <ListItem button className={classes.listItem}>
          {query.sort.display} <ArrowDownIcon />
        </ListItem>
      </List>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={() => setOpen(null)}
        classes={{ list: classes.menu }}
      >
        {sortMethods.map((method, i) => {
          const selected = query.sort.value === method.value
          return (
            <MenuItem
              onClick={select(method)}
              key={`sortMethod-${i}`}
              className={clsx(
                classes.menuItem,
                selected && classes.menuItemSelected,
              )}
            >
              {method.display}
              {selected ? <CheckIcon className={classes.checkIcon} /> : <div />}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

export { SortBy }
