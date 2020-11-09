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

import { RepoIcon } from '../../../assets/repo-icon'
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
        <RepoIcon width={32} height={32} />
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
