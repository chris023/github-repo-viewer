import React, { useState } from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core'
import ArrowDownIcon from '@material-ui/icons/ExpandMore'

import { useStyles } from './style'

const languages = [
  'All',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C',
  'PHP',
  'C#',
  'Shell',
  'Go',
  'TypeScript',
  'Ruby',
  'Jupyter Notebook',
  'Objective-C',
  'Swift',
  'Kotlin',
  'Rust',
  'R',
  'Scala',
  'Lua',
  'Powershell',
  'Matlab',
  'CoffeeScript',
  'Perl',
  'Groovy',
  'Haskell',
]

const LanguageMenu = ({ useQuery }) => {
  const [open, setOpen] = useState(null)
  const classes = useStyles()
  const [query, setQuery] = useQuery

  const select = (language) => () => {
    setQuery((prev) => ({ ...prev, language, page: 1 }))
    setOpen(null)
  }

  return (
    <>
      <List
        disablePadding
        className={classes.list}
        onClick={(e) => setOpen(e.currentTarget)}
      >
        <ListItem button>
          <ListItemText>{query.language}</ListItemText>
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowDownIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      <Menu anchorEl={open} open={Boolean(open)} onClose={() => setOpen(null)}>
        {languages
          .sort((a, b) => b < a)
          .map((language, i) => (
            <MenuItem key={`language-${i}`} onClick={select(language)}>
              {language}
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}

export { LanguageMenu }
