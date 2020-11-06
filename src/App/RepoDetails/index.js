import React from 'react'

import { Card, CardMedia, Grid, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router'
import clsx from 'clsx'

import { RepoIcon } from '../../assets/repo-icon'
import { useGlobalState } from '../../utils'
import { useStyles } from './style'

const RepoDetails = () => {
  const classes = useStyles()
  const params = useParams()
  const history = useHistory()
  const { results } = useGlobalState()

  const repo = results?.data?.items?.find(({ id }) => id == params.id)

  if (repo) {
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <Grid>
            <Grid item sm={12}>
              <CardMedia
                className={classes.media}
                image={repo.owner.avatar_url}
                title="Profile Image"
              />
            </Grid>
            <Grid
              item
              sm={12}
              className={clsx(classes.gridItem, classes.center)}
            >
              <RepoIcon className={classes.repoIcon} />
              <Typography
                className={classes.title}
                variant="h4"
                align="center"
                component="a"
                href={repo.html_url}
              >
                {repo.name} / <b>{repo.owner.login}</b>
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.gridItem}>
              <Typography variant="h6">
                <b>Description:</b> {repo.description}
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.gridItem}>
              <Typography variant="h6">
                <b>Stars:</b> {repo.stargazers_count}
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.gridItem}>
              <Typography variant="h6">
                <b>Language:</b> {repo.language}
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.gridItem}>
              <Typography variant="h6">
                <b>Forks:</b> {repo.forks}
              </Typography>
            </Grid>
            <Grid item sm={12} className={classes.gridItem}>
              <Typography variant="h6">
                <b>Open Issues:</b> {repo.open_issues}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  } else {
    alert('Error')
    history.push('/')
  }

  return null
}

export { RepoDetails }
