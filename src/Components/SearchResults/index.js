import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'

import { GenericLoader } from '../../Components'
import { useStyles } from './style'

const Error = ({ error }) => <Typography>{error}</Typography>

const SearchResults = ({ results }) => {
  const classes = useStyles()

  const { loading, error, data } = results

  console.log(loading)

  if (loading)
    return (
      <Paper className={classes.root}>
        <GenericLoader />
      </Paper>
    )

  if (error) return <Error error={error} />

  if (data) {
    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          Displaying {data?.items?.length} of {data?.total_count} Results
        </Typography>
        <Paper>
          <List alignItems="flex-start" dense className={classes.list}>
            {data?.items?.map((item, i) => {
              return (
                <ListItem
                  className={classes.listItem}
                  key={`item-${i}`}
                  divider
                  button
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
                    primary={
                      <Typography variant="h6">{item.full_name}</Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body1">
                          {item.stargazers_count} Stars
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        </Paper>
      </div>
    )
  }

  return <Error error={error} />
}

export { SearchResults }