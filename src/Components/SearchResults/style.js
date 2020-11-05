import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    maxWidth: 600,
    width: '100%',
  },
  list: {
    width: '100%',
    overflow: 'hidden',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}))
