import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: 600,
  },
  button: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    padding: theme.spacing(1),
  },
}))
