import React from 'react'

import { Typography } from '@material-ui/core'

import { useStyles } from './style'
import { ResultsPerPage } from './ResultsPerPage'
import { SortBy } from './SortBy'

const Header = ({ data, useQuery }) => {
  const classes = useStyles()

  const [query] = useQuery

  const totalResults = (() => {
    if (Number(data?.total_count) > 1000)
      return (data?.total_count / 1000).toFixed(0) + 'K'
    return data?.total_count
  })()

  return (
    <div className={classes.root}>
      <ResultsPerPage useQuery={useQuery} />
      <div className={classes.summaryContainer}>
        <Typography className={classes.searchTermText}>
          Search for &quot;{query.query}&quot;
        </Typography>
        <Typography variant="caption">{`${totalResults} Results`}</Typography>
      </div>
      <SortBy useQuery={useQuery} />
    </div>
  )
}

export { Header }
