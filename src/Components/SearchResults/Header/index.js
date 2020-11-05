import React from 'react'

import { Paper, Typography } from '@material-ui/core'

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
    <div>
      <Typography className={classes.title} align="center">
        {data?.items?.length
          ? `Displaying ${data?.items?.length} of ${totalResults} Results`
          : `No Results`}
      </Typography>
      <div className={classes.subheader}>
        <ResultsPerPage useQuery={useQuery} />
        <Paper className={classes.button}>Page: {query.page}</Paper>
        <SortBy useQuery={useQuery} />
      </div>
    </div>
  )
}

export { Header }
