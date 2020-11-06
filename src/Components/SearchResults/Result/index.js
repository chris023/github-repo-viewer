import React from 'react'

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarRate'
import he from 'he'
import { useHistory } from 'react-router'

import { useStyles } from './style'

const Result = ({ item }) => {
  const classes = useStyles()
  const history = useHistory()

  const redirectToItemDetails = () => history.push('/repository/' + item.id)

  return (
    <ListItem
      className={classes.listItem}
      divider
      button
      onClick={redirectToItemDetails}
    >
      <ListItemIcon>
        <svg
          height="32"
          style={{ color: '#6a737d' }}
          className="octicon octicon-repo"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <div className={classes.listItemPrimary}>
            <Typography variant="h6" className={classes.listItemPrimaryText}>
              {he.decode(item.full_name.replace('/', '/&#8203;'))}
            </Typography>
            <Typography
              variant="body1"
              className={classes.listItemPrimaryStarText}
            >
              {(() => {
                if (Number(item.stargazers_count) > 1000)
                  return (item.stargazers_count / 1000).toFixed(1) + 'K'
                return item.stargazers_count
              })()}
              <StarIcon className={classes.listItemPrimaryStar} />
            </Typography>
          </div>
        }
        secondary={
          <>
            <Typography variant="body1">{item.language}</Typography>
          </>
        }
      />
    </ListItem>
  )
}

export { Result }
