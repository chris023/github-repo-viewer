import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    marginTop: theme.spacing(2),
    maxWidth: 600,
    width: '100%',
  },
  list: {
    width: '100%',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}))