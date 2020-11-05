import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    minHeight: 76,
    maxWidth: 600,
    width: '100%',
  },
  list: {
    width: '100%',
  },
}))
