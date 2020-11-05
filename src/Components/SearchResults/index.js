import React from 'react'

import { List, Paper, Typography } from '@material-ui/core'

import { GenericLoader } from '../../Components'

import { Result } from './Result'
import { SortBy } from './SortBy'
import { useStyles } from './style'

const Error = ({ error }) => <Typography>{error}</Typography>

const SearchResults = ({ results }) => {
  const classes = useStyles()

  const { loading, error, data } = results

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
          {data?.items?.length
            ? `Displaying ${data?.items?.length} of ${data?.total_count} Results`
            : `No Results`}
        </Typography>
        <SortBy />
        {data?.items?.length ? (
          <Paper>
            <List alignItems="flex-start" dense className={classes.list}>
              {data?.items?.map((item, i) => (
                <Result item={item} key={`item-${i}`} />
              ))}
            </List>
          </Paper>
        ) : null}
      </div>
    )
  }

  return <Error error={error} />
}

export { SearchResults }
