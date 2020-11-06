import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 600,
    margin: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  media: {
    height: 280,
  },
  repoIcon: {
    marginRight: theme.spacing(1),
    marginTop: 2,
    height: 30,
    width: 30,
  },
  title: {
    color: '#0366de',
    textDecoration: 'none',
  },
}))
