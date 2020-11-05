import React from 'react'

import { List, Paper, Typography } from '@material-ui/core'

import { GenericLoader } from '../../Components'

import { Result } from './Result'
import { SortBy } from './SortBy'
import { useStyles } from './style'

const Error = ({ error }) => <Typography>{error}</Typography>

const SearchResults = ({ results, useQuery }) => {
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
    const totalResults = (() => {
      if (Number(data?.total_count) > 1000)
        return (data?.total_count / 1000).toFixed(0) + 'K'
      return data?.total_count
    })()

    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          {data?.items?.length
            ? `Displaying ${data?.items?.length} of ${totalResults} Results`
            : `No Results`}
        </Typography>
        <SortBy useQuery={useQuery} />
        {data?.items?.length ? (
          <Paper>
            <List dense className={classes.list}>
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
