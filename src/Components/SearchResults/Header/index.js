import React from 'react'

import { Typography } from '@material-ui/core'

import { useGlobalState } from '../../../utils'
import { useStyles } from './style'
import { ResultsPerPage } from './ResultsPerPage'
import { SortBy } from './SortBy'

const Header = () => {
  const classes = useStyles()
  const {
    query,
    results: { data },
  } = useGlobalState()

  const totalResults = (() => {
    if (Number(data?.total_count) > 1000)
      return (data?.total_count / 1000).toFixed(0) + 'K'
    return data?.total_count
  })()

  return (
    <div className={classes.root}>
      <ResultsPerPage />
      <div className={classes.summaryContainer}>
        <Typography className={classes.searchTermText}>
          Search for &quot;{query.search}&quot;
        </Typography>
        <Typography variant="caption">{`${totalResults} Results`}</Typography>
      </div>
      <SortBy />
    </div>
  )
}

export { Header }
