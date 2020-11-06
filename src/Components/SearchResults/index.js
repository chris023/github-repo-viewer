import React from 'react'

import { List, Paper, Typography } from '@material-ui/core'

import { GenericLoader } from '../../Components'

import { useGlobalState } from '../../utils'
import { Footer } from './Footer'
import { Header } from './Header'
import { Result } from './Result'
import { useStyles } from './style'

const Error = ({ error }) => <Typography>{error}</Typography>

const SearchResults = () => {
  const classes = useStyles()
  const { results } = useGlobalState()

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
      <>
        <div className={classes.root}>
          <Header data={data} />

          {data?.items?.length ? (
            <Paper>
              <List dense disablePadding className={classes.list}>
                {data?.items?.map((item, i) => (
                  <Result item={item} key={`item-${i}`} />
                ))}
              </List>
            </Paper>
          ) : null}
        </div>
        <Footer />
      </>
    )
  }

  return <Error error={error} />
}

export { SearchResults }
